import { Outlet } from "react-router-dom";
import Sidebar from "./pages/Sidebar";

function App() {
  // Use App.jsx as Layout   ✅ BEST PRACTICE
  return (
    <div className='bg-linear-to-l from-blue-800 to-blue-950 min-h-screen min-w-screen'>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
