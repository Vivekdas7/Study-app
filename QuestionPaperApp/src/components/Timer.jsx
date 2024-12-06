import React, { useEffect, useState, useCallback } from 'react';
import { FaClock, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { playWarningSound, playCriticalSound, playTimeUpSound } from '../utils/soundManager';

const Timer = ({ timeLeft, setTimeLeft, onTimeUp }) => {
  const [isWarning, setIsWarning] = useState(false);
  const [isCritical, setIsCritical] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [lastMinuteNotified, setLastMinuteNotified] = useState(null);

  // Handle sound notifications
  const handleSoundNotifications = useCallback((currentTime) => {
    if (isMuted) return;

    // Get current minute to avoid multiple notifications in the same minute
    const currentMinute = Math.floor(currentTime / 60);

    if (currentMinute !== lastMinuteNotified) {
      if (currentTime === 1800) { // 30 minutes
        playWarningSound();
      } else if (currentTime === 600) { // 10 minutes
        playCriticalSound();
      } else if (currentTime === 300) { // 5 minutes
        playCriticalSound();
      } else if (currentTime === 60) { // 1 minute
        playCriticalSound();
      } else if (currentTime === 0) { // Time up
        playTimeUpSound();
      } else if (currentTime <= 300 && currentTime % 60 === 0) { // Every minute in last 5 minutes
        playCriticalSound();
      }
      setLastMinuteNotified(currentMinute);
    }
  }, [isMuted, lastMinuteNotified]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setTimeLeft, onTimeUp]);

  useEffect(() => {
    // Warning when 30 minutes remaining
    setIsWarning(timeLeft <= 1800 && timeLeft > 600);
    // Critical when 10 minutes remaining
    setIsCritical(timeLeft <= 600);
    // Handle sound notifications
    handleSoundNotifications(timeLeft);
  }, [timeLeft, handleSoundNotifications]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(remainingSeconds).padStart(2, '0')
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={`flex items-center space-x-2 timer-container 
      ${isMuted ? 'text-gray-500' : 'text-gray-800'}
    `}>
      <div className="flex items-center">
        <FaClock className="mr-2" />
        <span className="font-semibold text-sm md:text-base">
          {hours}:{minutes}:{seconds}
        </span>
      </div>
      <button 
        onClick={toggleMute}
        className="focus:outline-none ml-2"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
};

export default Timer;
