import { BiHome } from "react-icons/bi";
import { HiMenuAlt2, HiCode } from "react-icons/hi";
import { RiContactsLine } from "react-icons/ri";
import { MdWorkOutline, MdChatBubbleOutline } from "react-icons/md";
import { PiBookOpenTextBold } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { LuGithub } from "react-icons/lu";
import { FiAward, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

import { NavLink, Link } from "react-router-dom";

function Sidebar({ isMobileOpen, onClose }) {
  return (
    // Mobile Menu Overlay for Mobile devices
    <>
      {isMobileOpen && (
        <div onClick={onClose} className="fixed inset-0 z-30 sm:hidden flex flex-col items-center justify-center bg-blue-950/50 backdrop-blur-md">
          <div onClick={e => e.stopPropagation()} className="flex flex-col items-center gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/skills", label: "Skills" },
              { to: "/experience", label: "Experience" },
              { to: "/education", label: "Education" },
              { to: "/projects", label: "Projects" },
              { to: "/github", label: "GitHub" },
              { to: "/achievements", label: "Achievements" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }, i) => (
              <NavLink key={to} to={to} end={to === "/"} onClick={onClose}
                style={{ animationDelay: `${i * 0.1}s` }}
                className={({ isActive }) =>
                  `nav-slide-up text-2xl font-bold px-8 py-2 text-center transition-colors duration-300 ${isActive ? "text-blue-500" : "text-white"
                  }`
                }>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Persistent Sidebar for Desktop */}
      <aside className="fixed left-5 top-5 bottom-5 z-30 w-fit hidden sm:block">
        {/* Visible Sidebar */}
        <div className="h-full w-fit rounded-lg bg-transparent backdrop-blur-lg border border-blue-500 p-2 flex flex-col">

          {/* Menu */}
          <div className="flex items-center gap-4 mb-6 max-lg:justify-center max-lg:mt-3">
            <h1 className='flex items-center gap-2 font-bold text-4xl text-white mt-2 mb-4'>
              <HiMenuAlt2 />
              <span className="hidden lg:block">Menu</span>
            </h1>
          </div>

          {/* Vertical scroller */}
          <div className="flex-1 overflow-y-auto pr-2 -mr-2 w-fit">
            <ul className="text-white/80 flex flex-col gap-y-3">

              {[{ to: "/", icon: <BiHome />, label: "Home" },
              { to: "/about", icon: <RiContactsLine />, label: "About" },
              { to: "/skills", icon: <HiCode />, label: "Skills" },
              { to: "/experience", icon: <MdWorkOutline />, label: "Experience" },
              { to: "/education", icon: <PiBookOpenTextBold />, label: "Education" },
              { to: "/projects", icon: <GrProjects />, label: "Projects" },
              { to: "/github", icon: <LuGithub />, label: "GitHub" },
              { to: "/achievements", icon: <FiAward />, label: "Achievements" },
              { to: "/contact", icon: <MdChatBubbleOutline />, label: "Contact" },
              ].map(({ to, icon, label }) => (
                <NavLink key={to} to={to} end={to === "/"}
                  className={({ isActive }) =>
                    `relative flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? "bg-blue-900 text-white" : "text-white/80 hover:bg-blue-900"
                    }`
                  }>
                  {({ isActive }) => (
                    <>
                      {icon}
                      <span className="hidden lg:block">{label}</span>
                      {isActive && (
                        <span className="absolute right-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </ul>
          </div>


          {/* Github, LinkedIn, Leetcode */}
          <div className="mt-auto mb-2 pt-4 border-t border-blue-400/70">
            <div className="flex items-center justify-center gap-6 max-lg:flex-col max-lg:px-3 py-2">
              <a href="https://github.com/AjmalGit25" target="_blank" className="text-blue-300 hover:text-blue-100">
                <LuGithub />
              </a>
              <a href="https://linkedin.com/in/ajmal-hussain92/" target="_blank" className="text-blue-300 hover:text-blue-100">
                <FiLinkedin />
              </a>
              <a href="https://leetcode.com/u/AjmalAlgo" target="_blank" className="text-blue-300 hover:text-blue-100">
                <SiLeetcode />
              </a>
            </div>
          </div>

        </div>
      </aside>
    </>
  );
}

export default Sidebar;