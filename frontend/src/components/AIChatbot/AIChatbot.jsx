import { useEffect, useState } from 'react';
import "./AIChatbot.css";
import { RiMenuUnfoldLine, RiMenuFoldLine, RiCloseLargeFill } from "react-icons/ri";

export default function AIChatbot() {
  const [botOpen, setBotOpen] = useState(false);

  useEffect(() => {
    const handleAssistant = () => {
      if (botOpen) {
        console.log("Chatbot Opened");
      }
      else {
        console.log("Chatbot Closed");
      }
    };

    handleAssistant();
  }, [botOpen]);

  return (
    <div
      onClick={() => setBotOpen(prev => !prev)}
      className='bg-blue-800 w-13 h-13 rounded-full overflow-hidden fixed bottom-4 right-4 p-1 cursor-pointer hover:scale-110 transition-all duration-200 ai-chatbot-button'>

      {botOpen ? (
        <div className='w-full h-full flex items-center justify-center text-white'>
          <RiCloseLargeFill size={20} />
        </div>
      ) : (
        <div className='w-full h-full flex items-center justify-center border border-blue-400 rounded-full overflow-hidden'>
          <img
            src="/myFavicon.png" alt="Favicon"
            className='w-full h-auto object-cover '
          />
        </div>
      )}
    </div>
  )
}
