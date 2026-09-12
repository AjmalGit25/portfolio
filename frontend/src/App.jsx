import { useState, useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import { RiMenuUnfoldLine, RiMenuFoldLine, RiCloseLargeFill } from "react-icons/ri";
import axios from "axios";
import BACKEND_URL from "../config/api.js";
import AIChatbot from "./components/AIChatbot/AIChatbot.jsx";
import Intro from "./components/Intro/Intro.jsx";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const [showIntro, setShowIntro] = useState(false);
  const [introExit, setIntroExit] = useState(false);


  // ================== Intro Page Showing mechanism ===================

  // Set Session Storage to show the intro page only once per session
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowIntro(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  // Handle Intro Exit Animation
  useEffect(() => {
    if (!showIntro) return;

    const timer = setTimeout(() => {
      setIntroExit(true);

      setTimeout(() => {
        setShowIntro(false);
      }, 1000); // same as duration-1000
    }, 2000);

    return () => clearTimeout(timer);
  }, [showIntro]);

  // ================= Count Unique Visitors mechanism ==================

  // Check for referral or UTM source in the URL
  const source = searchParams.get("ref") || searchParams.get("utm_source")
  console.log("Referral or UTM Source:", source);

  // Generate Unique Visitor Id
  const generateVisitorId = () => {
    if (crypto.randomUUID) {
      return crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(36).substring(2)}-${Math.random().toString(36).substring(2)}`;
  };

  // Set Visitor Id & Make the API call to Express Backend
  useEffect(() => {
    let visitorId = localStorage.getItem("visitorId");

    if (!visitorId) {
      visitorId = generateVisitorId();
      localStorage.setItem("visitorId", visitorId);
    }
    console.log("Backend url: ", BACKEND_URL);
    axios.post(`${BACKEND_URL}/api/v1/visitors`, { visitorId, source });
  }, []);

  return (
    <>
      {/* Intro Page */}
      {showIntro && (
        <Intro exit={introExit} />
      )}

      {/* Portfolio */}
      <div className="min-h-screen bg-linear-to-l from-blue-800 to-blue-950 relative">
        <div className="flex">

          {/* Menu Toggle Button for Mobile devices */}
          <button
            onClick={() => setMobileOpen(prev => !prev)}
            className="fixed -left-2 top-3 z-50 sm:hidden bg-blue-500 text-white border border-blue-300 py-2 px-2 pl-4 rounded-md inline-flex items-center gap-2">
            {mobileOpen ? <RiMenuFoldLine /> : <RiMenuUnfoldLine />}
            <span className="h-3 w-3 bg-blue-300 rounded-full animate-ping"></span>
            <span className="h-2 w-2 bg-blue-700 -ml-4.5 rounded-full"></span>
            <span className="h-px w-5 bg-blue-700 -ml-2"></span>
            <span className="text-sm">menu</span>
          </button>

          {/* Sidebar for Desktop */}
          <Sidebar
            isMobileOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
          />

          {/* Render child pages */}
          <div className="flex-1">
            <Outlet />
          </div>
        </div>

        {/* AIChatbot */}
        <AIChatbot />
      </div>
    </>
  )
}

export default App;
