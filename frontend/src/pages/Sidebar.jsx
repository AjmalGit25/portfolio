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

import { useEffect, useState } from "react";
import { useTheme, themes } from "../ThemeContext";
import { IoColorPaletteOutline } from "react-icons/io5";

function ThemePicker({ onPick }) {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="flex flex-col gap-1.5 mt-1">
      {themes.map(t => (
        <button key={t.id} onClick={() => { setTheme(t.id); onPick?.(); }}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors ${
            theme === t.id ? "bg-blue-900 text-white" : "text-white/70 hover:bg-blue-900/50"
          }`}>
          <span className="flex gap-1">
            {t.colors.map(c => (
              <span key={c} style={{ background: c }}
                className="w-3 h-3 rounded-full border border-white/20" />
            ))}
          </span>
          {t.label}
        </button>
      ))}
    </div>
  );
}

function Sidebar({ isMobileOpen, onClose }) {
  const [themeOpen, setThemeOpen] = useState(false);
  const [mobileThemeOpen, setMobileThemeOpen] = useState(false);

  useEffect(() => {
    const val = isMobileOpen ? "hidden" : "unset";
    document.body.style.overflow = val;
    document.documentElement.style.overflow = val;
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  return (
    // Modal | Sidebar Modal for Mobile devices
    <>
      {isMobileOpen && (
        <div onClick={onClose} className="fixed inset-0 z-30 sm:hidden flex flex-col items-center justify-center bg-black/80 backdrop-blur-md">
          <div
            onClick={e => e.stopPropagation()}
            className="flex flex-col items-center gap-2"
          >
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
                  `nav-slide-up text-3xl font-bold px-8 py-2 text-center transition-colors duration-300 ${isActive ? "text-blue-600" : "text-white"
                  }`
                }>
                {label}
              </NavLink>
            ))}

            {/* Change Theme */}
            <div className="mt-4 flex flex-col items-center">
              <button onClick={() => setMobileThemeOpen(p => !p)}
                className="flex items-center gap-2 text-white/70 border border-blue-500/50 px-4 py-2 rounded-lg text-sm hover:bg-blue-900/40 transition-colors">
                <IoColorPaletteOutline />
                Change Theme
              </button>
              {mobileThemeOpen && <ThemePicker onPick={() => { setMobileThemeOpen(false); onClose(); }} />}
            </div>
          </div>
        </div>
      )}

      {/* Sidebar for Laptop, Desktop */}
      <aside className="fixed left-5 top-5 bottom-5 z-30 w-fit hidden sm:block">
        {/* Visible Sidebar */}
        <div className="h-full w-fit rounded-xl bg-transparent backdrop-blur-lg border border-blue-500 p-2 flex flex-col">

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


          {/* Change Theme Button */}
          <div className="pt-3 pb-1 border-t border-blue-400/30">
            <button onClick={() => setThemeOpen(p => !p)}
              className="w-full flex items-center gap-2 justify-center px-3 py-1.5 rounded-md text-sm text-white/70 hover:bg-blue-900/50 transition-colors">
              <IoColorPaletteOutline />
              <span className="hidden lg:block">Change Theme</span>
            </button>
            {themeOpen && <ThemePicker onPick={() => setThemeOpen(false)} />}
          </div>

          {/* Github, LinkedIn, Leetcode */}
          <div className="mb-2 pt-3 border-t border-blue-400/70">
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