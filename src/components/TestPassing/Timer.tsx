import React, { useEffect, useState } from 'react';

interface TimerProps {
  initialTime: number; // в секундах
  onTimeEnd: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeEnd }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeEnd();
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return <div className="timer">⏱️ {formatTime(timeLeft)}</div>;
};

export default Timer;