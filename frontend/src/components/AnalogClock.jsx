import { useEffect, useState } from "react";

function AnalogClock() {
  const [time, setTime] = useState(new Date());
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Analog clock angles
  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = (hours % 12) * 30 + minutes * 0.5;

  // Digital time
  const digitalTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="w-full max-w-md rounded-xl border border-white/10 bg-blue-950 py-6 px-4 text-white">

      <div className="flex items-center justify-between">

        {/* Left side */}
        <div>
          <h2 className="text-3xl font-semibold tracking-tight uppercase">
            {digitalTime}
          </h2>

          <p className="mt-2 text-base text-white/70">
            Ahmedabad, Gujarat, IN
          </p>

          <p className="mt-1 text-sm text-white/70">
            Today, +0hrs
          </p>
        </div>


        {/* Analog Clock */}
        <div className="relative h-28 w-28 rounded-full shadow-[0_0_15px_rgba(80,110,252,0.5)] fade-zoomIn">

          {/* Numbers */}
          {numbers.map((number) => (
            <span
              key={number}
              style={{
                transform: `rotate(${number * 30}deg) translateY(-40px) rotate(-${number * 30}deg)`,
              }}
              className="absolute left-1/2 top-11 -translate-x-1/2 text-sm font-semibold">
              {number}
            </span>
          ))}


          {/* Hands container */}
          <div className="absolute inset-0">

            {/* Hour hand */}
            <div
              className="absolute left-1/2 top-1/2 h-[30px] w-[3px] origin-bottom rounded-full bg-white"
              style={{
                transform: `translate(-50%, -100%) rotate(${hourAngle}deg)`,
              }}
            />

            {/* Minute hand */}
            <div
              className="absolute left-1/2 top-1/2 h-10 w-0.5 origin-bottom rounded-full bg-white"
              style={{
                transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)`,
              }}
            />

            {/* Second hand */}
            <div
              className="absolute left-1/2 top-1/2 h-11 w-0.5 origin-bottom bg-blue-500"
              style={{
                transform: `translate(-50%, -100%) rotate(${secondAngle}deg)`,
              }}
            />

            {/* Center dot */}
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default AnalogClock;