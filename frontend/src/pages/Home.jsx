import Typewriter from "../components/Typewriter.jsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <div className='max-w-7xl sm:ml-20 md:ml-20 lg:ml-50  p-4 md:p-6'>

      {/* Lead Heading */}
      <div
        className='inline-flex items-center gap-3 text-[7px] sm:text-[11px] uppercase tracking-[0.4em] text-white/60 mt-15 sm:mt-5'>
        <span className='h-px w-8 bg-blue-500'></span>
        Software Developer • Full Stack
        <span className='h-px w-8 bg-blue-500'></span>
      </div>

      {/* Name & Image container */}
      <div className='flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-15 mt-6'>
        {/* Section 1: Name */}
        <section className='space-y-6 flex-2'>

          <h1 className='text-4xl sm:text-5xl xl:text-7xl font-black leading-[0.85] fade-left'>
            <span className='text-white'>Md Ajmal Hussain</span>
            <br />
            <span className='text-blue-500'>Software Developer</span>
            <br />
            <span className='text-white'>Building Scalable</span>
            <br />
            <span className='text-blue-500'>Web Applications</span>
          </h1>

          <div className='text-base sm:text-lg text-white/80 mt-10 space-y-4 fade-right'>
            <p>
              I'm Ajmal Hussain — a Full Stack <strong>MERN</strong> Developer focused on building modern, scalable, and reliable complete web applications.
            </p>

            <p>
              I work across the full development stack, from crafting intuitive React interfaces to designing robust Node.js and MongoDB backends, with a strong focus on clean architecture, performance, and maintainability.
            </p>

            <p>
              My work combines thoughtful design with robust backend architecture.
            </p>

          </div>

          {/* Auto-typing effect */}
          <Typewriter />

          {/* Hire & Projects*/}
          <div className="inline-flex text-[.7em] md:text-sm items-center gap-5 text-center uppercase tracking-[.3em] mt-5 fade-down">
            <Link to="/contact">
              <span className="bg-blue-300 py-2 px-4 rounded-full hover:bg-blue-400 transition-colors duration-200">Hire Me &rarr;</span>
            </Link>

            <Link to="/projects">
              ✨ <span className="text-white/60 hover:text-white transition-colors duration-200">View Projects</span>
            </Link>
          </div>

          {/* Tech Stack */}
          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-white/50 fade-down">
            React • Tailwind CSS • Node.js • Express • MongoDB • JavaScript • TypeScript • MySQL • Git & GitHub • SEO • Google Search Console • Problem Solving
          </p>

        </section>

        {/* Section 2: Image */}
        <section className='lg:self-start mt-10 flex-1 fade-up'>
          <div className='flex items-center justify-center bg-linear-to-tl from-blue-500 via-blue-950 to-blue-700 border border-blue-300 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0px_0px_25px_rgba(50,100,255,1)] duration-300 transition-shadow aspect-4/5 relative'>
            <img
              draggable={false} onContextMenu={(e) => e.preventDefault()}
              className='w-full h-auto object-cover'
              src="/profiles/home_dp.png" alt="Ajmal's Pic" />

            {/* Tag on Pic */}
            <div className="absolute flex gap-3 p-2 px-3 border rounded-xl bg-transparent backdrop-blur-sm border-blue-300 bottom-5">
              <div className="flex items-center justify-center p-4 rounded-full bg-blue-300/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                  className="text-white h-5 w-5">
                  <path d="m16 18 6-6-6-6"></path>
                  <path d="m8 6-6 6 6 6"></path>
                </svg>
              </div>

              <div>
                <div className="text-white">Full Stack Developer</div>
                <div className="text-white/50 text-[0.75em]">React • Node.js • JavaScript</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
