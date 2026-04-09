import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className='bg-linear-to-l from-blue-800 to-blue-950 min-h-screen min-w-screen'>
      <div className="flex">

        {/* Sidebar Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(prev => !prev)}
          className="fixed left-5 top-5 z-50 sm:hidden bg-blue-500 text-white p-2 rounded-md">
          {mobileOpen ? <RiMenuFoldLine /> : <RiMenuUnfoldLine />}
        </button>

        <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App;
