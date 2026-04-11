import { GoPerson } from "react-icons/go";
import { FaBuilding } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { SiTicktick } from "react-icons/si";
import { MdOutlineWorkHistory } from "react-icons/md";

function Experience() {
  return (
    <div className="max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 px-2">

      {/* Dash */}
      <div
        className='inline-flex mt-10'>
        <span className='border-2 border-blue-300 h-0 w-20 rounded-full'></span>
      </div>

      {/* Experience heading */}
      <h1 className='text-5xl sm:text-7xl font-extrabold tracking-tight text-white mt-2 mb-5'>Experience</h1>

      <p className="max-w-3xl text-white/60 mb-6">Here's an overview of my professional journey and hands-on experience in full-stack development and AI integration, documenting how Ajmal Hussain contributions expand the Ajmal Hussain portfolio, LeetCode by Ajmal Hussain storytelling, and Ajmal Hussain practices.</p>


      {/* Experience Container */}
      <div className="max-w-5xl mt-10 grid gap-8">

        {/* Experience 1 */}
        <div className="relative pl-10 md:pl-12 transition-transform duration-300 ease-out hover:-translate-y-1">

          {/* Left side - vertical line and logo */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0"></div>
          <div className="absolute left-0 md:left-1 top-1.5 h-6 w-6 rounded-full bg-blue-500/30 border border-blue-500/30 flex items-center justify-center shadow-[0_0_0_4px_rgba(0,185,255,0.15)]">
            <GoPerson className="text-blue-400" />
          </div>

          {/* Right main container */}
          <div className="bg-linear-to-r from-blue-700 to-blue-950 rounded-lg border border-blue-500/70 p-5 md:p-6">
            <div className="flex items-start justify-between gap-3">
              {/* left */}
              <div>
                <h3 className="text-sm md:text-2xl text-white font-bold flex items-center gap-1.5">
                  <FaBuilding />
                  <span>EduSkills Academy</span></h3>
                <div className="text-[0.7em] md:text-sm text-white/50 flex items-center gap-1.5">
                  <FiCalendar />
                  <span>April 2025 - June 2025</span>
                </div>
                <p className="mt-1 text-white/70 italic text-sm">Full Stack Developer Intern</p>
              </div>

              {/* right */}
              <span className="text-[11px] px-3 py-1 rounded-full border border-blue-500/50 text-white/80 bg-blue-900/50 backdrop-blur">Intenship</span>
            </div>

            {/* Text container */}
            <div className="text-sm text-white/80 mt-4 space-y-4">
              <p>Worked as a Full Stack Web Developer intern, contributing to my first Full Stack Website development using React, Express, and MongoDB. </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-2.5">
                  <SiTicktick className="text-green-500 shrink-0 mt-1" />
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, deleniti temporibus assumenda quo fuga amet pariatur officiis! Ex dolorem blanditiis modi tenetur quas recusandae molestiae, ea ipsum quod, rerum totam?</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <SiTicktick className="text-green-500 shrink-0 mt-1" />
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, deleniti temporibus assumenda quo fuga amet pariatur officiis! Ex dolorem blanditiis modi tenetur quas recusandae molestiae, ea ipsum quod, rerum totam?</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <SiTicktick className="text-green-500 shrink-0 mt-1" />
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, deleniti temporibus assumenda quo fuga amet pariatur officiis! Ex dolorem blanditiis modi tenetur quas recusandae molestiae, ea ipsum quod, rerum totam?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="relative pl-10 md:pl-12 transition-transform duration-300 ease-out hover:-translate-y-1">

          {/* Left side - vertical line and logo */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0"></div>
          <div className="absolute left-0 md:left-1 top-1.5 h-6 w-6 rounded-full bg-blue-500/30 border border-blue-500/30 flex items-center justify-center shadow-[0_0_0_4px_rgba(0,185,255,0.15)]">
            <GoPerson className="text-blue-400" />
          </div>

          {/* Right main container */}
          <div className="bg-linear-to-r from-blue-700 to-blue-950 rounded-lg border border-blue-500/70 p-5 md:p-6">
            <div className="flex items-start justify-between gap-3">
              {/* left */}
              <div>
                <h3 className="text-sm md:text-2xl text-white font-bold flex items-center gap-1.5">
                  <FaBuilding />
                  <span>CodVeda Technology</span></h3>
                <div className="text-[0.7em] md:text-sm text-white/50 flex items-center gap-1.5">
                  <FiCalendar />
                  <span>December 2025 - January 2026</span>
                </div>
                <p className="mt-1 text-white/70 italic text-sm">C/C++ Developer Intern</p>
              </div>

              {/* right */}
              <span className="text-[11px] px-3 py-1 rounded-full border border-blue-500/50 text-white/80 bg-blue-900/50 backdrop-blur">Intenship</span>
            </div>

            {/* Text container */}
            <div className="text-sm text-white/80 mt-4 space-y-4">
              <p>Gained practical coding experience. Worked on multiple basic, intermediate, and advanced level projects. What I accomplished during the internship are the following: </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-2.5">
                  <SiTicktick className="text-green-500 shrink-0 mt-1" />
                  <span>Mini-game development 🎮</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <SiTicktick className="text-green-500 shrink-0 mt-1" />
                  <span>Basic Calculator 🧮</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <SiTicktick className="text-green-500 shrink-0 mt-1" />
                  <span>Simple Student Management System 🧑‍🎓</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <SiTicktick className="text-green-500 shrink-0 mt-1" />
                  <span>Basic Data Structure Implementation (Stacks & Queues using Arrays & Lists) 🗃️</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <SiTicktick className="text-green-500 shrink-0 mt-1" />
                  <span>Sorting & Searching Algorithms (deep-dive into its time complexity) 📈</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <SiTicktick className="text-green-500 shrink-0 mt-1" />
                  <span>Simple File System Simulation 📁</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* References */}
      <div className="mt-6 text-white/60 flex items-center gap-2">
        <MdOutlineWorkHistory />
        <span>References available upon request</span>
      </div>
    </div>
  );
}

export default Experience
