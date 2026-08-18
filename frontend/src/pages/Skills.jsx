import { SiReact, SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiGit, SiGithub, SiVercel, SiRender, SiPostman, SiFigma, SiPython, SiPhp, SiDocker, SiRedux, SiMysql, SiNextdotjs, SiRedis, SiFirebase } from "react-icons/si";
import { FaNodeJs, FaLinux, FaJava, FaAws } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { BsBarChartFill, BsDiagram3Fill } from "react-icons/bs";
import Footer from "../components/Footer.jsx";
import { useEffect } from "react";

function Skills() {
  // Scroll Reveal Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".card-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl sm:ml-20 md:ml-20 lg:ml-50  p-4 md:p-6">
      <div className="mt-15 sm:mt-5">
        {/* Dash */}
        <div
          className='hidden sm:inline-flex'>
          <span className='border-2 border-blue-300 h-0 w-20 rounded-full'></span>
        </div>

        {/* Skills heading */}
        <h1 className='text-5xl sm:text-7xl font-extrabold tracking-tight text-white mt-2 mb-15'>Skills</h1>
      </div>

      {/* Stacks Container */}
      <div className="space-y-4 max-w-5xl">
        {/* Core Stack */}
        <div className="inline-flex items-center gap-2">
          <div className='h-1 w-8 bg-linear-to-l from-blue-700 to-blue-300 rounded-full'></div>
          <h3 className="text-white font-bold text-2xl">Core Stack</h3>
        </div>

        <div className="space-y-6">
          {/* FRONTEND */}
          <div className="flex items-center gap-3 justify-center text-[11px] sm:text-[15px] fade-left">
            <span className="h-px w-8 bg-blue-500"></span>
            <h3 className="text-blue-300 tracking-[0.3em]">FRONTEND</h3>
            <span className="h-px w-8 bg-blue-500"></span>
          </div>
          <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 card-up">

            {/* React */}
            <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(97, 218, 251, 0.125) 0%, transparent 70%)" }}></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                <SiReact className="h-10 w-10 text-cyan-300 group-hover:scale-110 duration-200" />
                <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">React</span>
              </div>
            </div>

            {/* Tailwind */}
            <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(97, 218, 251, 0.125) 0%, transparent 70%)" }}></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                <SiTailwindcss className="h-10 w-10 text-sky-400 group-hover:scale-110 duration-200" />
                <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Tailwind</span>
              </div>
            </div>
          </section>

          {/* BACKEND */}
          <div className="mt-10 flex items-center gap-3 justify-center text-[11px] sm:text-[15px] fade-left">
            <span className="h-px w-8 bg-blue-500"></span>
            <h3 className="text-blue-300 tracking-[0.3em]">BACKEND</h3>
            <span className="h-px w-8 bg-blue-500"></span>
          </div>
          <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 card-up">

            {/* Nodejs */}
            <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(97, 218, 90, 0.125) 0%, transparent 70%)" }}></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                <FaNodeJs className="h-10 w-10 text-green-500 group-hover:scale-110 duration-200" />
                <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Node.js</span>
              </div>
            </div>

            {/* Express */}
            <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(197, 218, 251, 0.125) 0%, transparent 70%)" }}></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                <SiExpress className="h-10 w-10 text-white group-hover:scale-110 duration-200" />
                <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Express</span>
              </div>
            </div>
          </section>

          {/* DATABASES */}
          <div className="mt-10 flex items-center gap-3 justify-center text-[11px] sm:text-[15px] fade-left">
            <span className="h-px w-8 bg-blue-500"></span>
            <h3 className="text-blue-300 tracking-[0.3em]">DATABASES</h3>
            <span className="h-px w-8 bg-blue-500"></span>
          </div>
          <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 card-up">

            {/* MongoDB */}
            <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(77, 218, 51, 0.125) 0%, transparent 70%)" }}></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                <SiMongodb className="h-10 w-10 text-green-400 group-hover:scale-110 duration-200" />
                <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">MongoDB</span>
              </div>
            </div>

            {/* Oracle */}
            <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(237, 28, 51, 0.125) 0%, transparent 70%)" }}></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                <GrOracle className="h-10 w-10 text-orange-600 group-hover:scale-110 duration-200" />
                <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Oracle</span>
              </div>
            </div>

            {/* MySQL */}
            <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(63, 152, 255, 0.125) 0%, transparent 70%)" }}></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                <SiMysql className="h-10 w-10 text-sky-600 group-hover:scale-110 duration-200" />
                <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">MySQL</span>
              </div>
            </div>
          </section>

          {/* LANGUAGES */}
          <div className="mt-10 flex items-center gap-3 justify-center text-[11px] sm:text-[15px] fade-left">
            <span className="h-px w-8 bg-blue-500"></span>
            <h3 className="text-blue-300 tracking-[0.3em]">LANGUAGES</h3>
            <span className="h-px w-8 bg-blue-500"></span>
          </div>
          <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 card-up">

            {/* JavaScript */}
            <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(157, 118, 11, 0.325) 0%, transparent 70%)" }}></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                <SiJavascript className="h-10 w-10 text-yellow-500 group-hover:scale-110 duration-200" />
                <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">JavaScript</span>
              </div>
            </div>

            {/* TypeScript */}
            <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(10, 100, 200, 0.325) 0%, transparent 70%)" }}></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                <SiTypescript className="h-10 w-10 text-sky-500 group-hover:scale-110 duration-200" />
                <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">TypeScript</span>
              </div>
            </div>

            {/* C++ */}
            <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(137, 118, 251, 0.125) 0%, transparent 70%)" }}></div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                <SiCplusplus className="h-10 w-10 text-indigo-400 group-hover:scale-110 duration-200" />
                <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">C++</span>
              </div>
            </div>
          </section>

        </div>

        {/* Core Tools */}
        <div className="inline-flex items-center gap-2 mt-6">
          <div className='h-1 w-8 bg-linear-to-l from-blue-700 to-blue-300 rounded-full'></div>
          <h3 className="text-white font-bold text-2xl">Core Tools</h3>
        </div>

        <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 card-up">

          {/* Git */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(237, 28, 51, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <SiGit className="h-10 w-10 text-orange-600 group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Git</span>
            </div>
          </div>

          {/* GitHub */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(237, 228, 251, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <SiGithub className="h-10 w-10 text-white group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">GitHub</span>
            </div>
          </div>

          {/* Vercel */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(237, 228, 251, 0.225) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <SiVercel className="h-10 w-10 text-white group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Vercel</span>
            </div>
          </div>

          {/* Render */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(237, 228, 251, 0.225) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <SiRender className="h-10 w-10 text-white group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Render</span>
            </div>
          </div>

          {/* Postman */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(237, 78, 51, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <SiPostman className="h-10 w-10 text-orange-500 group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Postman</span>
            </div>
          </div>

          {/* Figma */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(255, 122, 255, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <SiFigma className="h-10 w-10 text-violet-500 group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Figma</span>
            </div>
          </div>

          {/* VS Code */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(57, 122, 251, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <VscVscode className="h-10 w-10 text-sky-500 group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">VS Code</span>
            </div>
          </div>
        </section>

        {/* Supporting / Familiar */}
        <div className="inline-flex items-center gap-2 mt-6">
          <div className='h-1 w-8 bg-linear-to-l from-blue-700 to-blue-300 rounded-full'></div>
          <h3 className="text-white font-bold text-2xl">Familiar</h3>
        </div>

        <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 card-up">

          {/* Java */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(255, 122, 151, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <FaJava className="h-10 w-10 text-red-500 group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Java</span>
            </div>
          </div>

          {/* Python */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(157, 78, 11, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <SiPython className="h-10 w-10 text-yellow-600 group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Python</span>
            </div>
          </div>

          {/* php */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(255, 122, 255, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <SiPhp className="h-10 w-10 text-violet-500 group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">PHP</span>
            </div>
          </div>

          {/* Linux */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <FaLinux className="h-10 w-10 text-black group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Linux</span>
            </div>
          </div>

          {/* PowerBI */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(157, 78, 11, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <BsBarChartFill className="h-10 w-10 text-yellow-500 group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">PowerBI</span>
            </div>
          </div>

        </section>


        {/* Exploring */}
        <div className="inline-flex items-center gap-2 mt-6">
          <div className='h-1 w-8 bg-linear-to-l from-blue-700 to-blue-300 rounded-full'></div>
          <h3 className="text-white font-bold text-2xl">Exploring</h3>
        </div>

        <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 card-up">
          {/* Docker */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(97, 218, 251, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <SiDocker className="h-10 w-10 text-cyan-300 group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Docker</span>
            </div>
          </div>

          {/* System Design */}
          {/* <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(57, 255, 55, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <BsDiagram3Fill className="h-10 w-10 text-green-400 group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">System Design</span>
            </div>
          </div> */}

          {/* Redux */}
          {/* <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(255, 122, 255, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <SiRedux className="h-10 w-10 text-violet-500 group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Redux</span>
            </div>
          </div> */}

          {/* Next.js */}
          <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(220, 222, 221, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <SiNextdotjs className="h-10 w-10 text-white group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Next.js</span>
            </div>
          </div>

          {/* Redis */}
          {/* <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(255, 28, 28, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <SiRedis className="h-10 w-10 text-red-500 group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Redis</span>
            </div>
          </div> */}

          {/* Firebase */}
          {/* <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(200, 200, 28, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <SiFirebase className="h-10 w-10 text-yellow-500 group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">Firebase</span>
            </div>
          </div> */}

          {/* AWS */}
          {/* <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20">
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" style={{ background: "radial-gradient(circle, rgba(200, 200, 28, 0.125) 0%, transparent 70%)" }}></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <FaAws className="h-10 w-10 text-amber-500 group-hover:scale-110 duration-200" />
              <span className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">AWS</span>
            </div>
          </div> */}

        </section>
      </div>

      {/* Footer Text */}
      <Footer />

    </div>
  );
}

export default Skills;
