import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
export function CountdownTimer({
  hours,
  mins
}) {
  const [timeLeft, setTimeLeft] = useState({
    hours,
    mins,
    secs: 0
  });
  useEffect(() => {
    // Initial calculate total seconds
    let totalSeconds = hours * 3600 + mins * 60;
    const timer = setInterval(() => {
      totalSeconds--;
      if (totalSeconds < 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        hours: Math.floor(totalSeconds / 3600),
        mins: Math.floor(totalSeconds % 3600 / 60),
        secs: totalSeconds % 60
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [hours, mins]);
  const pad = num => num.toString().padStart(2, '0');
  return <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded-md">{<Clock className="w-3.5 h-3.5" />}{<span>{pad(timeLeft.hours)}h {pad(timeLeft.mins)}m {pad(timeLeft.secs)}s</span>}</div>;
}