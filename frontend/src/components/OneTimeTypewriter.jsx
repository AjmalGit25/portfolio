import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const typedMessages = new Set();      // mount/unmount: Typing problem fix

export default function OneTimeTypewriter({ text = "", speed = 50, messageId, className = "" }) {

  const [displayedText, setDisplayedText] = useState(
    typedMessages.has(messageId) ? text : ""
  );

  useEffect(() => {
    // Already typed → don't animate again
    if (typedMessages.has(messageId)) {
      setDisplayedText(text);
      return;
    }

    let idx = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, idx + 1));
      idx++;

      if (idx === text.length) {
        clearInterval(interval);

        // Mark this message as typed
        typedMessages.add(messageId);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [messageId, text, speed]);

  return <p className={className}><ReactMarkdown>{displayedText}</ReactMarkdown></p>;
}
