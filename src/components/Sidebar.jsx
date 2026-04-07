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
    <aside>
      <div className="flex flex-col items-center justify-center gap-y-2 border border-blue-500 w-50 h-170 rounded-lg p-2 m-5">

        <div className="mb-30">
          <h1 className='flex items-center gap-2 font-bold text-4xl text-white mb-4'>
            <HiMenuAlt2 />
            Menu
          </h1>

          <ul className="flex flex-col gap-y-4">
            <Link to={"/"} className="text-white px-4 py-1 rounded-sm flex items-center gap-2 hover:bg-blue-900"><BiHome />Home</Link>
            <Link to={"/about"} className="text-white px-4 py-1 rounded-lg flex items-center gap-2 hover:bg-blue-900"><RiContactsLine />About</Link>
            <Link to={"/experience"} className="text-white px-4 py-1 rounded-lg flex items-center gap-2 hover:bg-blue-900"><MdWorkOutline />Experience</Link>
            <Link to={"/education"} className="text-white px-4 py-1 rounded-lg flex items-center gap-2 hover:bg-blue-900"><PiBookOpenTextBold />Education</Link>
            <Link to={"/projects"} className="text-white px-4 py-1 rounded-lg flex items-center gap-2 hover:bg-blue-900"><GrProjects />Projects</Link>
            <Link to={"/github"} className="text-white px-4 py-1 rounded-lg flex items-center gap-2 hover:bg-blue-900"><LuGithub />GitHub</Link>
            <Link to={"/achievements"} className="text-white px-4 py-1 rounded-lg flex items-center gap-2 hover:bg-blue-900"><FiAward />Achievements</Link>
            <Link to={"/contact"} className="text-white px-4 py-1 rounded-lg flex items-center gap-2 hover:bg-blue-900"><MdChatBubbleOutline />Contact</Link>
          </ul>
        </div>

        {/* A small line, thin line like lead */}
        <div className="w-full border-b border-blue-500 mb-4"></div>

        {/* Github, LinkedIn, Instagram */}
        <div className="flex gap-4 mb-4 text-lg">
          <Link to={"https://github.com/ajmalhussain92"} target="_blank" className="text-blue-300 flex items-center gap-2 hover:text-blue-100"><LuGithub /></Link>
          <Link to={"https://linkedin.com/in/ajmal-hussain92/"} target="_blank" className="text-blue-300 flex items-center gap-2 hover:text-blue-100"><FiLinkedin /></Link>
          <Link to={"https://instagram.com"} target="_blank" className="text-blue-300 flex items-center gap-2 hover:text-blue-100"><FiInstagram /></Link>
        </div>

      </div>
    </aside>
  )
}

export default Sidebar
