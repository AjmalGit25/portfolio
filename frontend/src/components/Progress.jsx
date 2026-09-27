import { useState, useEffect } from 'react';
import { PiGearFineBold } from "react-icons/pi";

export default function Progress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className={`flex flex-col gap-2`}>
      {/* Status Counter */}
      <div className='flex items-center justify-between text-xs sm:text-base font-mono font-bold uppercase'>
        <div className='flex items-center gap-2'>
          <PiGearFineBold className="animate-spin" />
          <p>Compiling System Assets</p>
        </div>
        <p className={`text-xl font-black transition-colors duration-300 delay-200 ${progress === 100 ? "text-blue-500" : "text-white/80"}`}>{progress}%</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 overflow-hidden rounded-2xl bg-gray-700">
        <div
          className={`h-full rounded-full transition-colors duration-300 delay-200 ${progress === 100 ? "bg-blue-600" : "bg-white/80"}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
