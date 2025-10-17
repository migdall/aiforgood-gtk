// Happy achievement sound effect using Web Audio API
export const playHappySound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  
  // Create oscillators for a pleasant chord
  const createNote = (frequency: number, startTime: number, duration: number) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(0.2, startTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
    
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
    
    return oscillator;
  };
  
  const now = audioContext.currentTime;
  
  // Play a happy major chord progression (C-E-G, then C-F-A)
  createNote(523.25, now, 0.3); // C5
  createNote(659.25, now, 0.3); // E5
  createNote(783.99, now, 0.3); // G5
  
  createNote(523.25, now + 0.15, 0.4); // C5
  createNote(698.46, now + 0.15, 0.4); // F5
  createNote(880.00, now + 0.15, 0.4); // A5
};
