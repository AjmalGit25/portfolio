import { GrLocation } from "react-icons/gr";
import { LuPhone, LuGlobe } from "react-icons/lu";
import { FiCalendar } from "react-icons/fi";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function Github() {
  return (
    <div className="max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 p-2">
      {/* Intro Heading */}
      <div className='mex-w-5xl mt-10 space-y-5'>
        <h3 className='text-5xl sm:text-7xl font-extrabold tracking-tight text-white mt-2'>GitHub</h3>
        <p className='text-white/80 text-sm sm:text-lg'>Live account overview for Ajmal Hussain with public profile details and repositories.</p>
      </div>

      {/* Mini Profile */}
      <div className='border border-blue-500/70 text-white p-3 md:p-5 rounded-lg mt-8 max-w-5xl'>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* DP */}
            <img src="/Github's DP.jpg" alt="Github's DP" className='w-20 h-20 rounded-full object-contain' />

            {/* Name-Info container */}
            <div className="space-y-3">
              {/* Name */}
              <div className='flex items-center gap-3'>
                <h3 className='text-lg sm:text-2xl font-bold'>Ajmal Hussain</h3>
                <span className='text-white/60'>@AjmalGit23</span>
              </div>

              {/* Info */}
              <div className="text-[15px] text-white/60 flex flex-wrap gap-3 md:gap-5">
                <div className="flex items-center gap-1">
                  < GrLocation />
                  <span>Ahmedabad, Gujarat</span>
                </div>
                <a href="https://ajmal-hussain.vercel.app" target="blank" className="flex items-center gap-1 hover:text-white">
                  <LuGlobe />
                  <span>Website</span>
                </a >
                <div className="flex items-center gap-1">
                  <FiCalendar />
                  <span>Joined March 29, 2023</span>
                </div>
              </div>
            </div>

          </div>

          {/* Link */}
          <a href="https://github.com/AjmalGit23" target="_blank"
            className="flex items-center justify-center gap-2 p-2 bg-white text-black rounded-lg">
            <FaGithub />
            <span>Visit Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Github;
