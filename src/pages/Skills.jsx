import { RiMenuUnfoldLine } from "react-icons/ri";
import { SiReact, SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiCplusplus } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";

function Skills() {
  return (
    <div className="max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 px-2">
      {/* Menu Toggle */}
      <button className="fixed w-15 sm:hidden bg-blue-500 text-white p-2 rounded-md">
        <RiMenuUnfoldLine />
      </button>

      {/* Dash */}
      <div
        className='inline-flex mt-10'>
        <span className='border-2 border-blue-300 h-0 w-20 rounded-full'></span>
      </div>

      {/* Skills heading */}
      <h1 className='text-5xl sm:text-7xl font-extrabold tracking-tight text-white mt-2 mb-15'>Skills</h1>

      <div className="space-y-4">

        {/* Core Stack */}
        <div className="inline-flex items-center gap-2">
          <div className='h-1 w-8 bg-linear-to-l from-blue-700 to-blue-300 rounded-full'></div>
          <h3 className="text-white font-bold text-2xl">Core Stack</h3>
        </div>

        <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">

          {/* React */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(97, 218, 251, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <SiReact className="h-10 w-10 text-cyan-300" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">React</span>
            </div>
          </div>

          {/* Nodejs */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(97, 218, 90, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <FaNodeJs className="h-10 w-10 text-green-500" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Node.js</span>
            </div>
          </div>

          {/* MongoDB */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(77, 218, 51, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <SiMongodb className="h-10 w-10 text-green-400" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">MongoDB</span>
            </div>
          </div>

          {/* Express */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(197, 218, 251, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <SiExpress className="h-10 w-10 text-white" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Express</span>
            </div>
          </div>

          {/* JavaScript */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(157, 78, 11, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <SiJavascript className="h-10 w-10 text-yellow-500" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">JavaScript</span>
            </div>
          </div>

          {/* Tailwind */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(97, 218, 251, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <SiTailwindcss className="h-10 w-10 text-sky-400" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Tailwind CSS</span>
            </div>
          </div>

          {/* C++ */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(137, 118, 251, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <SiCplusplus className="h-10 w-10 text-indigo-400" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">C++</span>
            </div>
          </div>

          {/* Oracle */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(237, 28, 51, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <GrOracle className="h-10 w-10 text-orange-600" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Oracle</span>
            </div>
          </div>
        </section>

        {/* Tools */}
        <div className="inline-flex items-center gap-2 mt-6">
          <div className='h-1 w-8 bg-linear-to-l from-blue-700 to-blue-300 rounded-full'></div>
          <h3 className="text-white font-bold text-2xl">Tools</h3>
        </div>
        <section>

        </section>

        {/* Exploring */}
        <div className="inline-flex items-center gap-2">
          <div className='h-1 w-8 bg-linear-to-l from-blue-700 to-blue-300 rounded-full'></div>
          <h3 className="text-white font-bold text-2xl">Exploring</h3>
        </div>
        <section></section>
      </div>

    </div>
  )
}

export default Skills;
