import { RiMenuUnfoldLine } from "react-icons/ri";
import Typewriter from "../components/Typewriter";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='max-w-7xl sm:ml-20 md:ml-20 lg:ml-50'>

      {/* Menu Toggle */}
      <button className="sm:hidden bg-blue-500 text-white p-2 rounded-md">
        <RiMenuUnfoldLine />
      </button>

      <main className='flex flex-col md:flex-row items-center justify-center gap-15 mt-5'>

        {/* Section 1: Name */}
        <section className='flex-2 w-full space-y-6'>
          {/* Lead Heading */}
          <div
            className='inline-flex items-center gap-3 text-[7px] sm:text-[11px] uppercase tracking-[0.4em] text-white/60'>
            <span className='h-px w-8 bg-blue-500'></span>
            Software Developer • Full Stack
            <span className='h-px w-8 bg-blue-500'></span>
          </div>

          <h1 className='text-4xl font-black leading-[0.85] sm:text-5xl xl:text-7xl mt-6'>
            <span className='text-white'>Md Ajmal Hussain</span>
            <br />
            <span className='text-blue-500'>Software Developer</span>
            <br />
            <span className='text-white'>Building Scalable</span>
            <br />
            <span className='text-blue-500'>Web Applications</span>
          </h1>

          <p className='text-lg text-gray-300 mt-10'>
            I am a Full Stack Software Developer in Ahmedabad, India, with modern technologies — React, Node.js, and MongoDB. I enjoy building real-world web applications and solving complex problems using clean and efficient code.
          </p>

          {/* Auto-typing effect */}
          <Typewriter />

          {/* Hire & Projects*/}
          <div className="inline-flex text-[.7em] md:text-sm items-center gap-5 text-center uppercase tracking-[.3em] mt-5">
            <Link>
              <span className="text  bg-blue-300 py-2 px-4 rounded-full hover:bg-blue-400 transition-colors duration-200">Hire Me &rarr;</span>
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
        <section className='flex-1'>
          <div className='flex items-center justify-center'>
            <img
              className='border border-blue-300 rounded-2xl overflow-hidden h-100 w-auto object-cover shadow-2xl shadow-blue-300'
              src="https://res.cloudinary.com/dcuziuhqp/image/upload/v1775594936/ChatGPT_Image_Dec_26_2025_04_58_37_AM_h3ngz6.png" alt="Ajmal's pic" />
          </div>
        </section>

      </main>
    </div>
  )
}

export default Home
