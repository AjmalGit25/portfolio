import Typewriter from "../components/Typewriter";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 p-2'>

      {/* Lead Heading */}
      <div
        className='inline-flex items-center gap-3 text-[7px] sm:text-[11px] uppercase tracking-[0.4em] text-white/60 mt-10'>
        <span className='h-px w-8 bg-blue-500'></span>
        Software Developer • Full Stack
        <span className='h-px w-8 bg-blue-500'></span>
      </div>

      {/* Name & Image container */}
      <div className='flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-15 mt-3'>
        {/* Section 1: Name */}
        <section className='space-y-6 flex-2'>

          <h1 className='text-4xl sm:text-5xl xl:text-7xl font-black leading-[0.85] mt-6'>
            <span className='text-white'>Md Ajmal Hussain</span>
            <br />
            <span className='text-blue-500'>Software Developer</span>
            <br />
            <span className='text-white'>Building Scalable</span>
            <br />
            <span className='text-blue-500'>Web Applications</span>
          </h1>

          <p className='text-base sm:text-lg text-white/80 mt-10'>
            Hi, I'm Ajmal Hussain, a Full Stack Software Developer in Ahmedabad, India, with modern technologies — React, Node.js, and MongoDB. I enjoy building real-world web applications and solving complex problems using clean and efficient code.
          </p>

          {/* Auto-typing effect */}
          <Typewriter />

          {/* Hire & Projects*/}
          <div className="inline-flex text-[.7em] md:text-sm items-center gap-5 text-center uppercase tracking-[.3em] mt-5">
            <Link to="/contact">
              <span className="text bg-blue-300 py-2 px-4 rounded-full hover:bg-blue-400 transition-colors duration-200">Hire Me &rarr;</span>
            </Link>

            <Link to="/projects">
              ✨ <span className="text-white/60 hover:text-white transition-colors duration-200">View Projects</span>
            </Link>
          </div>

          {/* Tech Stack */}
          <p className="mt-6 max-w-xl text-[11px] uppercase tracking-[0.3em] text-white/50">
            React • Next.js • Node.js • Express • MongoDB • TypeScript • AWS • Docker • Problem Solving
          </p>

        </section>

        {/* Section 2: Image */}
        <section className='lg:self-start mt-10 flex-1'>
          <div className='flex items-center justify-center relative'>
            <img
              className='border border-blue-300 rounded-lg overflow-hidden h-100 w-auto object-cover shadow-2xl shadow-blue-300 hover:scale-102 duration-300'
              src="/ajm_dp1.jpeg" alt="Ajmal's pic" />

            {/* Tag on Pic */}
            <div className="absolute flex gap-3 p-2 px-3 border rounded-lg bg-transparent backdrop-blur-sm border-blue-300 bottom-5">
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
