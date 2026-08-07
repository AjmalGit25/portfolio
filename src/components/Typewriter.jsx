import { useState, useEffect } from "react";

export default function Typewriter() {
  const words = ["fast", "secure", "responsive", "reliable"];

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
      }, 150);
      
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
    <h3 className="text-white text-xl sm:text-2xl font-bold fade-down">
      We build{" "}
      <span className="text-blue-500">
        {text}
      </span>{" "}
      {/* <span className="font-thin text-lg">| </span> */}
      websites.
    </h3>
  );
}