// Sound manager for timer notifications
const warningSound = new Audio('/sounds/warning.mp3');
const criticalSound = new Audio('/sounds/critical.mp3');
const timeUpSound = new Audio('/sounds/timeup.mp3');

// Configure sounds
warningSound.volume = 0.7;
criticalSound.volume = 0.8;
timeUpSound.volume = 0.9;

export const playWarningSound = () => {
  warningSound.currentTime = 0;
  warningSound.play().catch(err => console.log('Audio playback failed:', err));
};

export const playCriticalSound = () => {
  criticalSound.currentTime = 0;
  criticalSound.play().catch(err => console.log('Audio playback failed:', err));
};

export const playTimeUpSound = () => {
  timeUpSound.currentTime = 0;
  timeUpSound.play().catch(err => console.log('Audio playback failed:', err));
};
