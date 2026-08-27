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
    <div className="flex items-center gap-2 rounded-full border border-blue-300/20 bg-black/40 px-4 py-2 shadow-[0_0_15px_rgba(59,130,246,0.15)] backdrop-blur-md w-fit">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
      </span>

      <span className="font-mono text-sm tracking-wider text-white uppercase">
        {formattedTime}
      </span>
    </div>
  );
}

export default Clock;