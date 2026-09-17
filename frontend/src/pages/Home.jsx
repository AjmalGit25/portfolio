import Typewriter from "../components/Typewriter.jsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { FaCode } from "react-icons/fa6";

function Home() {
  const words = ["modern", "responsive", "scalable", "reliable", "secure"];

  return (
    <div className='max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 p-4 md:p-6'>

      {/* Lead Heading */}
      <div
        className='inline-flex items-center gap-3 text-[7px] sm:text-[11px] uppercase tracking-[0.4em] text-white/60 mt-15 sm:mt-5'>
        <span className='h-px w-8 bg-blue-500'></span>
        Software Developer • Full Stack
        <span className='h-px w-8 bg-blue-500'></span>
      </div>

      {/* Name & Image container */}
      <div className='flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-15 my-6'>
        {/* Section 1: Name */}
        <section className='space-y-6 flex-2'>

          <h1 className='text-4xl sm:text-5xl md:text-7xl font-black leading-[0.85] fade-left'>
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

          {/* Dynamic Contents -------- Auto Typing --------- */}
          <div className="text-white font-bold text-xl">
            <h3 className="flex items-center gap-1">We build
              {/* Auto-typing effect */}
              <Typewriter
                words={words}
                speed={100}
                className="text-blue-500"
              />
              websites
            </h3>
          </div>

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
        <section className='xl:self-start mt-10 flex-1 fade-up'>
          <div className='flex items-center justify-center bg-linear-to-tl from-blue-500 via-blue-950 to-blue-700 border border-blue-300 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0px_0px_25px_rgba(50,100,255,1)] duration-300 transition-shadow aspect-4/5 relative'>
            <img
              draggable={false} onContextMenu={(e) => e.preventDefault()}
              className='w-full max-w-xl h-auto object-cover'
              src="/profiles/home_dp_sep.png" alt="Ajmal's Pic" />

            {/* Tag on Pic */}
            <div className="absolute bottom-5 inset-x-5 flex items-center gap-3 p-4 border border-blue-500/30 rounded-xl bg-black/40 backdrop-blur-md overflow-hidden">
              {/* Left side : Icon */}
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                <div className="absolute inset-0 rounded-xl bg-blue-500/10 blur-md" />
                <FaCode
                  size={20}
                  className="relative text-blue-500"
                />
              </div>
              {/* Right side */}
              <div className="flex flex-col flex-1 w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white font-medium tracking-wide">Full Stack Developer</span>
                  <div className="flex items-center gap-1.5">
                    <span className="shrink-0 h-1.5 w-1.5 bg-green-500 rounded-full shadow-[0_0_8px_#34d399]"></span>
                    <span className="text-[10px] text-green-400">Available</span>
                  </div>
                </div>
                <div className="overflow-hidden flex flex-col gap-1.5">
                  {/* Subtitle */}
                  <span className="text-[12px] text-white/60">Building scalable & modern web experiences</span>
                  {/* Technologies */}
                  <span className="text-[10px] text-white/50 whitespace-nowrap animate-marquee">
                    React.js • Next.js • Node.js • Express • MongoDB • PostgreSQL • Prisma • JavaScript • REST APIs • LLM APIs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
