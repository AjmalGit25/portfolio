import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="text-[10px] md:text-xs tracking-widest md:tracking-wider mt-15">

      <div className="w-full h-px bg-linear-to-l to-blue-950 via-blue-600 from-blue-900 mb-3"></div>

      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-blue-300 font-medium">Designed & Developed by Md Ajmal Hussain
          <span className="text-[8px] ml-1">❤️</span>
        </p>

        <div className="inline-flex items-center gap-3">
          <span className="h-px w-10 bg-linear-to-l from-blue-500 to-transparent"></span>
          <p className="text-blue-300/80">&copy; {new Date().getFullYear()} All rights reserved</p>
          <span className="h-px w-10 bg-linear-to-r from-blue-500 to-transparent"></span>
        </div>
      </div>
    </div>
  )
}
