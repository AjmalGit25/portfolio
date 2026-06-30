import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="text-blue-200 text-[10px] font-thin tracking-wider mt-10">
      {/* HR Divider */}
      {/* <hr></hr> */}
      <div className="w-full h-px bg-blue-500/50 mb-3"></div>

      <div className="flex flex-col items-center justify-center gap-2">
        <p>&copy; 2026 Md Ajmal Hussain. All rights reserved.</p>
        <p>Designed & Developed by Md Ajmal Hussain <span className="text-[8px]">❤️</span></p>
        
        <div className="flex items-center gap-2 font-medium">
          <Link 
          to={"https://github.com/AjmalGit25"}
          className="hover:text-white transition-colors duration-200">GitHub</Link>
          <span className="h-1 w-1 bg-blue-500 rounded-full"></span>
          <Link 
          to={"https://linkedin.com/in/ajmal-hussain92"}
          className="hover:text-white transition-colors duration-200">LinkedIn</Link>
          <span className="h-1 w-1 bg-blue-500 rounded-full"></span>
          <Link 
          to={"mailto:reach.ajmal.dev@gmail.com"}
          className="hover:text-white transition-colors duration-200">Email</Link>
        </div>
      </div>

    </div>
  )
}
