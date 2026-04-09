import { BiHome } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiContactsLine } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import { PiBookOpenTextBold } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { LuGithub } from "react-icons/lu";
import { FiAward } from "react-icons/fi";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { HiCode } from "react-icons/hi";

import { NavLink, Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="fixed left-5 top-5 bottom-5 z-20 w-fit hidden sm:block">

      {/* Visible Sidebar */}
      <div className="h-full w-fit rounded-lg bg-transparent backdrop-blur-lg border border-blue-500 p-2 flex flex-col min-">

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
                  `relative flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 ${
                    isActive ? "bg-blue-900 text-white" : "text-white/80 hover:bg-blue-900"
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


        {/* Github, LinkedIn, Instagram */}
        <div className="mt-auto mb-2 pt-4 border-t border-blue-400/70">
          <div className="flex items-center justify-center gap-4 max-lg:flex-col max-lg:px-3 py-2">
            <Link to={"https://github.com/ajmalhussain92"} target="_blank" className="text-blue-300 hover:text-blue-100">
              <LuGithub />
            </Link>
            <Link to={"https://linkedin.com/in/ajmal-hussain92/"} target="_blank" className="text-blue-300 hover:text-blue-100">
              <FiLinkedin />
            </Link>
            <Link to={"https://instagram.com"} target="_blank"
              className="text-blue-300 hover:text-blue-100">
              <FiInstagram />
            </Link>
          </div>
        </div>

      </div>
    </aside>
  );
}

export default Sidebar
