import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        console.log("timer tick");
        if (prevTime === 0) {
          return 0;
        }
        return prevTime - 10;
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
