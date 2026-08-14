import { GoPerson } from "react-icons/go";
import { FaBuilding } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { FaRegSquareCheck } from "react-icons/fa6";
import { MdOutlineWorkHistory } from "react-icons/md";
import experiences from "../data/experiences.js";

function Experience() {
  return (
    <div className="max-w-7xl sm:ml-20 md:ml-20 lg:ml-50  p-4 md:p-6">

      {/* Dash */}
      <div
        className='inline-flex mt-10'>
        <span className='border-2 border-blue-300 h-0 w-20 rounded-full'></span>
      </div>

      {/* Experience heading */}
      <h1 className='text-5xl sm:text-7xl font-extrabold tracking-tight text-white mt-2 mb-5'>Experience</h1>

      <p className="max-w-3xl text-white/60 mb-6 fade-left">Here's an overview of my professional journey and hands-on experience in full-stack development and AI integration, documenting how Ajmal Hussain contributions expand the Ajmal Hussain portfolio, LeetCode by Ajmal Hussain storytelling, and Ajmal Hussain practices.</p>


      {/* Experience Cards Container */}
      <div className="max-w-5xl mt-10 grid gap-8 fade-up">

        {/* Experience Card */}
        {experiences.map((experience) => (
          <div key={experience.id} className="relative pl-10 md:pl-12 transition-transform duration-300 ease-out hover:-translate-y-1">

            {/* Left side - vertical line and logo */}
            <div className="absolute left-3 md:left-4 top-0 bottom-0"></div>
            <div className="absolute left-0 md:left-1 top-1.5 h-6 w-6 rounded-full bg-blue-500/30 border border-blue-500/30 flex items-center justify-center shadow-[0_0_0_4px_rgba(0,185,255,0.15)]">
              <GoPerson className="text-blue-400" />
            </div>

            {/* Right main container */}
            <div className="bg-linear-to-r from-blue-900 to-blue-950 rounded-xl border border-blue-500/70 p-5 md:p-6">
              <div className="flex items-start justify-between gap-3">
                {/* left */}
                <div className="space-y-1">
                  <h3 className="text-sm md:text-2xl text-white font-bold flex items-center gap-1.5">
                    <FaBuilding size={22} />
                    <span>{experience.company}</span>
                  </h3>
                  <div className="text-[0.7em] md:text-sm text-white/50 flex items-center gap-1.5">
                    <FiCalendar />
                    <span>{experience.duration}</span>
                  </div>
                  <p className="mt-1 text-white/80 italic font-semibold text-sm">{experience.role}</p>
                </div>

                {/* right */}
                <span className="text-[11px] px-3 py-1 rounded-full border border-blue-500/50 text-white/80 bg-blue-900/50 backdrop-blur">{experience.type}</span>
              </div>

              {/* Text container */}
              <div className="text-sm text-white/80 mt-4 space-y-4">
                <p>{experience.description}</p>

                <ul className="space-y-2">
                  {experience.outcomes.map((outcome, idx) => (
                    <div className="flex items-center gap-2">
                      <FaRegSquareCheck className="text-blue-500 shrink-0" />
                      <li key={idx} className="">{outcome}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>



      {/* Recognition */}
      <div className="flex items-center gap-4 text-white/40 mt-15 w-fit cursor-default group">
        {/* logo */}
        < div className="shrink-0 border rounded-full w-10 h-10 flex items-center justify-center group-hover:text-blue-500 group-hover:border-blue-500/70 transition-colors duration-300" >
          <MdOutlineWorkHistory className="text-lg" />
        </div >
        {/* Paragraph */}
        <div className="uppercase flex flex-col tracking-widest">
          <span className="text-sm font-bold text-white/60">References</span>
          <span className="text-xs">Available upon request</span>
        </div >
      </div >
    </div>
  );
}

export default Experience
