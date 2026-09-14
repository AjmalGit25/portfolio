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
        <p className='text-xl font-black'>{progress}%</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 sm:h-4 overflow-hidden rounded-2xl bg-gray-700">
        <div
          className="h-full bg-linear-to-r from-blue-500 via-blue-700 to-blue-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
