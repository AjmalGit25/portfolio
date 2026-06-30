import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className='bg-linear-to-l from-blue-800 to-blue-950 min-h-screen'>
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
    </div>
  )
}

export default App;
