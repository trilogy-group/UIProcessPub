import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaUndoAlt, FaStop } from 'react-icons/fa';
import WaveSurfer from 'wavesurfer.js';

const AudioRecorderModal = ({ isOpen, onClose }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState('');
  const audioRef = useRef(null);
  const waveformRef = useRef(null);
  let wavesurfer = useRef(null);
  const [audioChunks, setAudioChunks] = useState([]);

  useEffect(() => {
    if (navigator.mediaDevices && window.MediaRecorder && waveformRef.current) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          wavesurfer.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: 'violet',
            progressColor: 'purple',
            backend: 'WebAudio',
          });

          wavesurfer.current.on('ready', () => {
            try {
              const mediaStreamSource = wavesurfer.current.backend.ac.createMediaStreamSource(stream);
              mediaStreamSource.connect(wavesurfer.current.backend.ac.destination);
            } catch (error) {
              console.error('Error connecting stream to WaveSurfer:', error);
            }
          });

          const newMediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
          setMediaRecorder(newMediaRecorder);

          newMediaRecorder.ondataavailable = (event) => {
            setAudioChunks(prev => [...prev, event.data]);
          };

          newMediaRecorder.onstop = async () => {
            const audioBlob = new Blob(audioChunks, { 'type': 'audio/webm' });
            const url = URL.createObjectURL(audioBlob);
            setAudioUrl(url);

            setAudioChunks([]);

            audioRef.current.src = url;
            audioRef.current.onloadedmetadata = () => {
              console.log('Audio metadata loaded');
            };
            audioRef.current.onerror = () => {
              console.error('Error in loading audio');
            };

            if (wavesurfer.current) {
              wavesurfer.current.load(url);
            }
          };
        }).catch(console.error);
    }

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
      if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
      }
    };
  }, []);

  const handleRecordClick = () => {
    if (mediaRecorder) {
      if (!isRecording) {
        setIsRecording(true);
        mediaRecorder.start();
      } else {
        setIsRecording(false);
        mediaRecorder.stop();
      }
    } else {
      console.error('MediaRecorder not initialized');
    }
  };

  const handlePlayPauseClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSkip = (amount) => {
    if (audioRef.current) {
      audioRef.current.currentTime += amount;
    }
  };

  return (
    <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center ${!isOpen && 'hidden'}`}>
      <div className="bg-white rounded p-4">
        <h2 className="text-lg mb-4">Audio Recorder</h2>
        <div ref={waveformRef} className="waveform" />
        <audio ref={audioRef} src={audioUrl} />
        <div>
          <button onClick={handleRecordClick} className="p-2">
            {isRecording ? <FaStop /> : <FaPlay />}
          </button>
          <button onClick={handlePlayPauseClick} className="p-2">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={() => handleSkip(-15)} className="p-2">
            <FaUndoAlt />
          </button>
          <button onClick={() => handleSkip(15)} className="p-2">
            <FaUndoAlt className="transform rotate-180" />
          </button>
        </div>
        <button onClick={onClose} className="p-2 bg-red-500 text-white rounded">Close</button>
      </div>
    </div>
  );
};  

export default AudioRecorderModal;
