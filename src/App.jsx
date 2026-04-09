import { Outlet } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import { RiMenuUnfoldLine } from "react-icons/ri";

function App() {
  // Use App.jsx as Layout   ✅ BEST PRACTICE
  return (
    <div className='bg-linear-to-l from-blue-800 to-blue-950 min-h-screen min-w-screen'>
      <div className="flex">

        {/* Sidebar Menu Toggle */}
        <button className="fixed left-5 top-5 z-20 sm:hidden bg-blue-500 text-white p-2 rounded-md">
          <RiMenuUnfoldLine />
        </button>

        <Sidebar />
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App;
