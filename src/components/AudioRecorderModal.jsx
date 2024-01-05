import React, { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.js';
import Minimap from 'wavesurfer.js/dist/plugins/minimap.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.js';

function AudioRecorder({ onClose }) {
    const [scrollingWaveform, setScrollingWaveform] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [currentBlob, setCurrentBlob] = useState(null);
    const wavesurferRef = useRef(null);
    const playbackRef = useRef(null);
    const recordRef = useRef(null);
    let deviceId = null;

    useEffect(() => {
        const wavesurfer = WaveSurfer.create({
            container: wavesurferRef.current,
            waveColor: 'rgb(255, 0, 0)',
            progressColor: 'rgb(53, 53, 53)',
            interact: true,
            minPxPerSec: 75,
            hideScrollbar: true,
            barWidth: 2,
            barGap: 2,
            autoCenter: true,
            autoScroll: true,
            dragToSeek: true,
            plugins: [
                // Register the plugin
                TimelinePlugin.create({ height: 20,
                    timeInterval: 0.25,
                    secondaryLabelInterval: 1,
                    style: {
                      fontSize: '15px',
                      color: '#2D5B88',
                    },}),
                Minimap.create({
                  height: 30,
                  waveColor: '#ddd',
                  progressColor: '#999',
                    cursorColor: '#999',
                    autoScroll: true,
                  // the Minimap takes all the same options as the WaveSurfer itself
                }),
            ],
        });


        recordRef.current = wavesurfer.registerPlugin(RecordPlugin.create({ scrollingWaveform }));

        recordRef.current.on('record-pause', ( blob ) => {
            setCurrentBlob(blob);
            console.log('record-pause', blob);
        });

        RecordPlugin.getAvailableAudioDevices().then((devices) => {
            deviceId = devices[0].deviceId;
        });

        return () => wavesurfer.destroy();
    }, [scrollingWaveform]);

    const startRecording = () => {
        recordRef.current.startRecording({ deviceId }).then(() => {
            setIsRecording(true);
            setIsPaused(false);
        });
    };

    const stopRecording = () => {
        recordRef.current.stopRecording();
        setIsRecording(false);
        setIsPaused(false);
    };

    const pauseRecording = () => {
        recordRef.current.pauseRecording();
        setIsPaused(true);
    };

    const resumeRecording = () => {
        recordRef.current.resumeRecording();
        setIsPaused(false);

        if (playbackRef.current) {
            playbackRef.current.destroy();
            playbackRef.current = null;
        }
    };

    const playCurrentRecording = () => {
        if (currentBlob && isPaused) {
            console.log(recordRef);
            recordRef.current.wavesurfer.playPause();
        }            
    };

return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h1 className="text-xl font-bold">Press Record to start recording 🎙️</h1>

        <button className={`px-4 py-2 rounded-md text-white font-bold ${isRecording ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'}`} onClick={isRecording ? stopRecording : startRecording}>
          {isRecording ? 'Finish' : 'Record'}
        </button>

        {isRecording && (
          <button className="ml-2 px-4 py-2 rounded-md bg-yellow-500 text-white font-bold hover:bg-yellow-700" onClick={isPaused ? resumeRecording : pauseRecording}>
            {isPaused ? 'Resume' : 'Pause'}
          </button>
        )}

        {isPaused && (
          <button className="ml-2 px-4 py-2 rounded-md bg-green-500 text-white font-bold hover:bg-green-700" onClick={playCurrentRecording}>
            Play Current Recording
          </button>
        )}



        <div className="flex items-center my-4">
          <input className="mr-2 leading-tight" type="checkbox" onChange={e => setScrollingWaveform(e.target.checked)} />
          <span className="text-sm">Scrolling waveform</span>
        </div>

        <div className="border border-gray-300 rounded-md" ref={wavesurferRef}></div>

        <div id="playback" className="mt-4 border border-gray-300 rounded-md h-0 invisible"></div>

        <button className="mt-4 px-4 py-2 rounded-md bg-gray-500 text-white font-bold hover:bg-gray-700" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}


export default AudioRecorder;
