import { useState, useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import { RiMenuUnfoldLine, RiMenuFoldLine, RiCloseLargeFill } from "react-icons/ri";
import axios from "axios";
import BACKEND_URL from "../config/api.js";
import AIChatbot from "./components/AIChatbot/AIChatbot.jsx";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const source = searchParams.get("ref") || searchParams.get("utm_source")
  console.log("Referral or UTM Source:", source);

  // Count Unique Visitors mechanism
  const generateVisitorId = () => {
    if (crypto.randomUUID) {
      return crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(36).substring(2)}-${Math.random().toString(36).substring(2)}`;
  };

  useEffect(() => {
    let visitorId = localStorage.getItem("visitorId");

    if (!visitorId) {
      visitorId = generateVisitorId();
      localStorage.setItem("visitorId", visitorId);
    }

    axios.post(`${BACKEND_URL}/api/v1/visitors`, { visitorId, source });
  }, []);

  return (
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
  )
}

export default App;
