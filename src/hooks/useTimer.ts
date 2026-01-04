import { useRef, useState } from "react";

export const useTimer = (maxTime: number) => {
  const [time, setTime] = useState(maxTime);
  const interval = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    interval.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  };

  const clearTimer = () => {
    setTime(maxTime);
    if (interval.current) {
      clearInterval(interval.current);
    }
  };

  return {
    time,
    startTimer,
    clearTimer,
  };
};
