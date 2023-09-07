import React, { useEffect, useState } from "react";

const Timer = ({ onTimerEnd }) => {
  const quizTime = 60 * 60 * 1000; // 60 minutes in milliseconds
  const [timeLeft, setTimeLeft] = useState(quizTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1000);

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        onTimerEnd();
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timeLeft, onTimerEnd]);

  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div id="timer" className="timer">
      Time left: {minutes}m {seconds}s
    </div>
  );
};

export default Timer;
