import { useEffect, useState, useRef } from 'react';
import "./AIChatbot.css";
import { RiMenuUnfoldLine, RiMenuFoldLine, RiCloseLargeFill, RiGeminiFill } from "react-icons/ri";
import BACKEND_URL from "../../../config/api.js";
import axios from "axios";
import OneTimeTypewriter from "../OneTimeTypewriter.jsx";

export default function AIChatbot() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const [chatLoading, setChatLoading] = useState(false);


  // Extra state for handling modal closing animation
  const [closing, setClosing] = useState(false);

  // To handle the closing of the modal with animation
  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      setChatOpen(false);
      setClosing(false);
    }, 300); // same duration as animation
  };


  // Chat message storage (AI + User messages)
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content:
        "Hey there! I'm **Ajmal**'s AI assistant. Ask me anything about his skills, projects, or experience!",
    },
  ]);

  useEffect(() => {
    const t1 = setTimeout(() => setButtonVisible(true), 500);
    const t2 = setTimeout(() => setTooltipVisible(true), 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Hide tooltip after 10 seconds
  setTimeout(() => {
    setTooltipVisible(false);
  }, 10000);


  // Chat Message Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Append the User's message
    const userMessage = {
      id: Date.now(),
      role: "user",
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");


    // Append the AI response message
    let aiResponse;

    try {
      setChatLoading(true);
      const response = await axios.post(`${BACKEND_URL}/api/v1/ai/chat`, { message: input });
      aiResponse = response.data.response;
    } catch (error) {
      console.log("Something went wrong during AI Response!", error);
      aiResponse = error.response?.data?.message ||
        "My AI assistant is temporarily unavailable. Please try again later. 😊";
    } finally {
      setChatLoading(false);
    }

    // Add AI response to chat
    const aiMessage = {
      id: Date.now() + 1,
      role: "assistant",
      content: aiResponse
    };
    setMessages(prev => [...prev, aiMessage]);

  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div>
      {/* Floating Tooltip */}
      {tooltipVisible && !chatOpen && (
        <div className="fixed bottom-20 right-4 ai-chatbot-tooltip">
          <div className="relative bg-blue-900 text-white text-[12px] px-2 py-2 pr-5 rounded-md shadow-md border border-blue-500/50">
            <button
              onClick={() => setTooltipVisible(false)}
              className="absolute top-0 right-0  rounded-full w-4 h-4 flex items-center justify-center text-[8px] text-white/80 hover:text-white cursor-pointer"
            >✕
            </button>
            <div className='flex items-center gap-1'>
              <span>Hey! Ajmal's AI Chat assistant</span> <RiGeminiFill /> <span>is here</span>
            </div>
            {/* Triangle arrow pointing down */}
            <div className="absolute -bottom-[6px] right-6 w-3 h-3 bg-blue-900 border-r border-b border-blue-500/50 rotate-45"></div>
          </div>
        </div>
      )}

      {/* Chatbot Button */}
      {buttonVisible && (
        <div
          onClick={() => setChatOpen(true)}
          className={`fixed bottom-4 right-4 bg-blue-800 ${chatOpen ? 'w-11 h-11' : 'w-13 h-13'} rounded-full p-1 cursor-pointer hover:scale-105 transition-all duration-300 delay-200 ai-chatbot-button`}
        >
          {chatOpen ? (
            <div
              onClick={handleClose}
              className='w-full h-full flex items-center justify-center text-white'>
              <RiCloseLargeFill size={15} />
            </div>
          ) : (
            <div className='w-full h-full flex items-center justify-center border border-blue-400 rounded-full overflow-hidden'>
              <img
                src="/myFavicon.png" alt="Favicon"
                className='w-full h-auto object-cover'
              />
            </div>
          )}
        </div>
      )}

      {/* Chatbot Window */}
      {chatOpen && (
        <div

          className={`fixed bottom-20 right-4 w-xs sm:w-md border border-blue-300 rounded-xl overflow-hidden ${closing ? 'zoomOut' : 'zoomIn'}`}>
          {/* upper */}
          <div className='flex items-center gap-2 bg-linear-to-t from-blue-900 to-blue-950 border-b border-blue-300 p-3'>
            <img src="./myFavicon.png" alt="AjmalAI"
              className='h-10 w-10 object-contain border border-blue-300/50 bg-blue-500/50 rounded-full ' />

            <div className='flex items-center justify-between gap-2 w-full'>
              <div className='flex flex-col gap-0.5'>
                <span className="text-white font-medium text-sm">Ajmal's AI Assistant</span>
                {/* Chat typing */}
                {chatLoading ? (
                  <span className='text-green-500 text-[11px]'>Typing...</span>
                ) : (
                  <span className="text-white/50 text-[11px]">Ask me anything about Ajmal</span>
                )}
              </div>

              {/* Online Status */}
              <div className='flex items-center gap-1 border border-green-500/30 bg-green-500/20 px-2 py-0.5 rounded-full'>
                <span className='h-1 w-1 shrink-0 rounded-full bg-green-500'></span>
                <span className='text-green-500 text-[8px] uppercase tracking-wide font-medium'>Online</span>
              </div>
            </div>
          </div>

          {/* middle : Chat Messages */}
          <div className="text-white text-sm bg-blue-950 min-h-60 max-h-100 overflow-y-auto p-3 space-y-4">
            {messages.map((message) => (
              // AI message
              message.role === "assistant" ? (
                <div key={message.id} className="flex justify-start">
                  <div className='p-2 rounded-b-lg rounded-tr-lg w-60 bg-linear-to-b from-sky-900 to-sky-950 border border-blue-300/50 shadow-[0_3px_5px_rgba(0,0,0,.5)] relative'>
                    <div className='absolute top-0.5 -left-1 bg-sky-900 border border-blue-300/50 border-t-transparent border-r-transparent w-2 h-2 rotate-45'></div>
                    <OneTimeTypewriter
                      text={message.content} speed={10} messageId={message.id}
                      className="text-white text-shadow-2xs text-shadow-black"
                    />
                  </div>
                </div>
              ) : (
                // User message
                <div key={message.id} className='flex justify-end'>
                  <div className='p-2 rounded-t-lg rounded-bl-lg w-60 bg-linear-to-b from-blue-900 to-blue-950 border border-blue-300/50 shadow-[0_3px_5px_rgba(0,0,0,.5)]'>
                    <span>{message.content}</span>
                  </div>
                </div>
              )
            ))}

            {/* Invisible element at the bottom */}
            <div ref={messagesEndRef} />
          </div>

          {/* bottom */}
          <div className='bg-linear-to-b from-blue-900 to-blue-950 border-t border-blue-300 p-3'>
            <form
              onSubmit={handleSubmit}
              className='flex items-center justify-between gap-2'
            >
              <input type="text" placeholder='Ask about Ajmal...'
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className='
                flex-1 min-w-0
                bg-blue-950/60
                text-white
                placeholder:text-white/40
                border border-blue-300/40
                rounded-lg
                px-3 py-2
                outline-none
                transition-all duration-200
                focus:border-blue-400'
              />
              <button
                disabled={chatLoading}
                type="submit"
                className={`shrink-0 bg-blue-500 text-white font-medium rounded-lg px-4 py-2 ${chatLoading ? 'cursor-not-allowed bg-blue-500/50' : 'hover:bg-blue-500/90 cursor-pointer'}`}>
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div >
  )
}