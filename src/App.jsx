import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  // Use App.jsx as Layout   ✅ BEST PRACTICE
  return (
    <div className='bg-linear-to-l from-blue-900 to-blue-950 min-h-screen'>
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
