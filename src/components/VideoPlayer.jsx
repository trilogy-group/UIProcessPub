import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpand } from 'react-icons/fa';


const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const controlsTimerRef = useRef(null);
  const progressBarRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    videoRef.current.volume = volume;
  }, [volume]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    setIsActive(!isActive);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };



  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const formatTime = (seconds) => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, '0');
    if (hh) {
      return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  const handleMouseActivity = () => {

    clearTimeout(controlsTimerRef.current);
    setShowControls(true);
    console.log("mouse activity");
    controlsTimerRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000); // Hide controls after 3 seconds of inactivity
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener('mousemove', handleMouseActivity);
    videoElement.addEventListener('click', handleMouseActivity);

    return () => {
      videoElement.removeEventListener('mousemove', handleMouseActivity);
      videoElement.removeEventListener('click', handleMouseActivity);
    };
  }, []);

  const handleTimeUpdate = () => {
    const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(currentProgress);
    setCurrentTime(videoRef.current.currentTime);
  };

  const skipTo = (newTime) => {
    videoRef.current.currentTime = newTime;
    setProgress((newTime / videoRef.current.duration) * 100);
  };

  const handleProgressBarClick = (e) => {
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * videoRef.current.duration;
    skipTo(newTime);
  };

  return (
    <div
      className="w-full max-w-xl mx-auto relative overflow-hidden rounded-xl"
      onMouseEnter={handleMouseActivity}
      onMouseLeave={isPlaying ? () => setShowControls(false) : () => { }}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full"
        onTimeUpdate={handleTimeUpdate}
        onClick={handlePlayPause}
      />


      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            exit={{ y: 40 }}
            transition={{ duration: 0.3 }}

            className="absolute bottom-0 w-full"
          >
            <div ref={progressBarRef}
              onClick={handleProgressBarClick}
              className="h-1 bg-gray-300 cursor-pointer">
              <div className="h-1 bg-blue-500" style={{ width: `${progress}%` }}></div>
            </div>

            <div style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div className='flex'>
                <div onClick={handlePlayPause} className={`mx-2 button button--play ${isActive ? 'button--active' : ''}`}>
                  <div className="button__shape button__shape--one"></div>
                  <div className="button__shape button__shape--two"></div>
                </div>

                <div className="flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24"
                  />
                </div>
                <span className="text-white mr-2">{`${formatTime(currentTime)} / ${formatTime(videoRef.current.duration)}`}</span>
              </div>

              <button onClick={toggleFullScreen} className="text-white">
                <FaExpand />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoPlayer;
