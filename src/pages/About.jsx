import { RiMenuUnfoldLine } from "react-icons/ri";

function About() {
  return (
    <div className="sm:ml-20 md:ml-20 lg:ml-50">
      {/* Menu Toggle */}
      <button className="fixed sm:hidden bg-blue-500 text-white p-2 rounded-md">
        <RiMenuUnfoldLine />
      </button>

      {/* Lead Heading */}
      <div className='inline-flex items-center gap-3 uppercase tracking-[0.4em] text-white/60 text-[.5em] sm:text-sm mt-10'>
        <span className='h-px w-8 bg-blue-300'></span>
        Software Developer Profile
        <span className='h-px w-8 bg-blue-300'></span>
      </div>

      <main className="flex flex-col lg:flex-row gap-15">
        {/* Section 1: About Me */}
        <section className="flex-2">
          <div>
            <h1 className='text-5xl uppercase font-bold text-white mt-5 mb-10 sm:text-7xl'>
              About <span className='text-blue-500'>Me</span>
            </h1>

            <h2 className="text-white text-2xl my-3 font-bold">I'M A
              <span className="text-blue-500"> FULL STACK </span>DEVELOPER
            </h2>

            {/* Paragraph container */}
            <div className="space-y-4 text-white/80">
              <p>I have a strong interest in the MERN stack and love working with modern technologies like React, Node.js, and MongoDB. Alongside web development, I'm actively improving my problem-solving skills through Data Structures and Algorithms using C++.</p>

              <p>I believe in continuous learning and consistency. Whether it’s building projects, exploring new tools, or understanding core concepts deeply, I always aim to grow as a developer.</p>

              <p>My <b className="text-blue-500">goal</b> is to become a skilled software developer, contribute to impactful projects, and secure a strong position in the tech industry.</p>
            </div>

            {/* Technical Expertise */}
            <div className="space-y-4">
              <h3 className="mt-10 text-xl font-bold flex items-center gap-2 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code w-5 h-5" aria-hidden="true">
                  <path d="m16 18 6-6-6-6"></path>
                  <path d="m8 6-6 6 6 6"></path>
                </svg>
                Technical Expertise
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
                <li><strong>Frontend:</strong> React.js, Next.js, TypeScript, Tailwind CSS</li>
                <li><strong>Backend:</strong> Node.js, Express, MongoDB, PostgreSQL</li>
                <li><strong>DevOps:</strong> Docker, AWS, CI/CD, Git</li>
                <li><strong>Tools:</strong> Figma, Postman, VS Code</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Section 2: Image */}
        <section className="flex-1">
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

export default About;
