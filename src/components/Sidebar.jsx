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

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-160 border border-blue-500 p-2 m-5 rounded-lg bg-transparent backdrop-blur-lg hidden sm:block">

      <div className="flex flex-col items-center gap-y-2">

        <div className="mb-25 mt-2">
          <h1 className='flex items-center gap-2 font-bold text-4xl text-white mb-4'>
            <HiMenuAlt2 />
            <span className="hidden lg:block">Menu</span>
          </h1>

          <ul className="flex flex-col gap-y-3">

            <Link to={"/"}
              className="text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200">
                <BiHome />
                <span className="hidden lg:block">Home</span>
            </Link>

            <Link to={"/about"}
              className="text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200">
                <RiContactsLine />
                <span className="hidden lg:block">About</span>
            </Link>
            <Link to={"/experience"}
              className="text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200">
                <MdWorkOutline />
                <span className="hidden lg:block">Experience</span>
            </Link>
            <Link to={"/education"}
              className="text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200">
                <PiBookOpenTextBold />
                <span className="hidden lg:block">Education</span>
            </Link>
            <Link to={"/projects"}
              className="text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200">
                <GrProjects />
                <span className="hidden lg:block">Projects</span>
            </Link>
            <Link to={"/github"}
              className="text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200">
                <LuGithub />
                <span className="hidden lg:block">GitHub</span>
            </Link>
            <Link to={"/achievements"}
              className="text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200">
                <FiAward />
                <span className="hidden lg:block">Achievements</span>
            </Link>
            <Link to={"/contact"}
              className="text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200">
                <MdChatBubbleOutline />
                <span className="hidden lg:block">Contact</span>
            </Link>
          </ul>
        </div>

        {/* A small line, thin line like lead */}
        <div className="w-full border-b border-blue-500 mb-3"></div>

        {/* Github, LinkedIn, Instagram */}
        <div className="flex justify-center gap-4 max-lg:flex-col max-lg:px-4">
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
    </aside>
  )
}

export default Sidebar
