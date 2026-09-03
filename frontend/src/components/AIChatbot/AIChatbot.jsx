import { useEffect, useState } from 'react';
import "./AIChatbot.css";
import { RiMenuUnfoldLine, RiMenuFoldLine, RiCloseLargeFill } from "react-icons/ri";
import ReactMarkdown from "react-markdown";

export default function AIChatbot() {
  const [botOpen, setBotOpen] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setButtonVisible(true), 500);
    const t2 = setTimeout(() => setTooltipVisible(true), 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

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
    <div>
      {/* Floating Tooltip */}
      {tooltipVisible && !botOpen && buttonVisible && (
        <div className="fixed bottom-20 right-4 ai-chatbot-tooltip">
          <div className="relative bg-blue-900 text-white text-[10px] sm:text-xs px-2 py-2 pr-5 rounded-md shadow-md border border-blue-500/50">
            <button
              onClick={() => setTooltipVisible(false)}
              className="absolute top-0 right-0  rounded-full w-4 h-4 flex items-center justify-center text-white/80 hover:text-white cursor-pointer"
              style={{ fontSize: '8px', lineHeight: 1 }}
            >✕
            </button>
            👋 Hey! Ajmal's AI Chat assistant coming soon...
            {/* Triangle arrow pointing down */}
            <div class="absolute -bottom-[6px] right-6 w-3 h-3 bg-blue-900 border-r border-b border-blue-500/50 rotate-45"></div>
          </div>
        </div>
      )}

      {/* Chatbot Button */}
      <div
        onClick={() => setBotOpen(prev => !prev)}
        className={`fixed bottom-4 right-4 bg-blue-800 rounded-full p-1 cursor-pointer hover:scale-110 transition-all duration-200 ${buttonVisible ? 'ai-chatbot-button' : 'translate-x-24 opacity-0'} ${botOpen ? 'w-10 h-10' : 'w-13 h-13'}`}
      >

        {botOpen ? (
          <div
            className={`w-full h-full flex items-center justify-center text-white`}>
            <RiCloseLargeFill size={15} />
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
    </div >
  )
}

// Need help exploring my work?