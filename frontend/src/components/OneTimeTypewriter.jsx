import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function OneTimeTypewriter({ text = "", speed = 50, className = "" }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;

    const id = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(id);
      }
    }, speed);

    return () => clearInterval(id);
  }, [text, speed]);

  return <p className={className}><ReactMarkdown>{display}</ReactMarkdown></p>;
}
