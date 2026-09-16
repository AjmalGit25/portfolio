import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="flex items-center justify-between gap-2 rounded-full border border-blue-300/20 bg-black/40 px-4 py-2 shadow-[0_0_10px_rgba(59,130,246,0.5)] backdrop-blur-md w-full text-xs sm:text-sm">
      {/* Copyright */}
      <div className="flex-1">
        <p className="tracking-wide text-white/80">&copy; {new Date().getFullYear()} Edition</p>
      </div>

      {/* Clock Timer */}
      <div className="flex-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Status Indicator */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
          </span>

          {/* Time */}
          <span className="font-mono tracking-wider text-white uppercase">
            {formattedTime}
          </span>
        </div>

        {/* Region */}
        <span className="tracking-wide text-white/80">
          Ahmedabad, Gujarat, IN
        </span>
      </div>
    </div>
  );
}

export default Clock;