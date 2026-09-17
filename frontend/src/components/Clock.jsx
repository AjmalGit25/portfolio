import { useEffect, useState } from "react";
import { LuAlarmClock } from "react-icons/lu";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

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
    <div className="flex items-center justify-between gap-2 rounded-full border border-blue-300/20 bg-black/40 px-4 py-2 shadow-[0_0_10px_rgba(59,130,246,0.5)] backdrop-blur-md w-full text-[10px] sm:text-sm">

      {/* Copyright */}
      <div className="flex items-center gap-2 text-white/80">
        <AiOutlineCopyrightCircle />
        <p className="tracking-wide">{new Date().getFullYear()} Edition</p>
      </div>

      {/* Horizintal Divider -------------------- */}
      <div className="h-5 w-px bg-blue-500/50"></div>

      <div className="flex items-center gap-2 text-white">
        {/* Clock symbol */}
        <LuAlarmClock />

        {/* Time */}
        <span className="font-mono tracking-wider uppercase">
          {formattedTime}
        </span>

        {/* Status Indicator */}
        {/* <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
          </span> */}
      </div>

      {/* Horizintal Divider -------------------- */}
      <div className="h-5 w-px bg-blue-500/50"></div>

      {/* Region */}
      <div className="flex items-center justify-between gap-2 text-white/80">
        <MdLocationOn />
        <span className="tracking-wide">
          Ahmedabad, Gujarat, IN
        </span>
      </div>
    </div>
  );
}

export default Clock;