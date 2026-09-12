import { useState, useEffect } from "react";

export default function Typewriter({ words = [], speed = 150, className = "" }) {

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    let timeout;

    if (!isDeleting) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, speed);

      if (text === currentWord) {
        // Pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      // Deleting
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, 50);

      if (text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <p className={className}>
      {text}
      <span className={`${className} animate-ping`}>|</span>
    </p>
  );
}