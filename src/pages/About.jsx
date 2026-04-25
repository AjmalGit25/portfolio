import { SiLeetcode } from "react-icons/si";
import { BiRun, BiPlay } from "react-icons/bi";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 p-2">

      {/* Lead Heading */}
      <div className='inline-flex items-center gap-3 text-[7px] sm:text-[11px] uppercase tracking-[0.4em] text-white/60 mt-10'>
        <span className='h-px w-8 bg-blue-500'></span>
        Software Developer Profile
        <span className='h-px w-8 bg-blue-500'></span>
      </div>

      {/* About & Image container */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-10 mt-3">
        {/* Section 1: About Me */}
        <section className="flex-2">
          <div>
            <h1 className='text-5xl sm:text-7xl uppercase font-extrabold text-white mt-5 mb-10'>
              About <span className='text-blue-500'>Me</span>
            </h1>

            <h2 className="text-white text-2xl my-3 font-bold">I'M A
              <span className="text-blue-500"> FULL STACK </span>DEVELOPER
            </h2>

            {/* Paragraph container */}
            <div className="space-y-4 text-base sm:text-lg text-white/80">

              <p>I am a Computer Science Engineering student with a strong interest in Full Stack Web Development and Software Engineering.</p>

              <p>I have hands-on experience in building applications using the MERN stack (MongoDB, Express.js, React, Node.js), along with modern tools like Tailwind CSS.</p>

              <p>Alongside development, I actively improve my problem-solving skills through Data Structures and Algorithms using C++, which helps me write efficient and optimized code.</p>

              <p>I believe in consistency and continuous learning. I regularly build projects, explore new technologies, and deepen my understanding of core computer science concepts.</p>

              <p>My <strong className="text-blue-300">goal</strong> is to become a skilled software developer, contribute to impactful projects, and grow within the tech industry.</p>

            </div>
          </div>

          {/* Technical Expertise */}
          <div className="space-y-4">
            <h3 className="mt-10 text-xl font-bold flex items-center gap-2 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-5 h-5" aria-hidden="true">
                <path d="m16 18 6-6-6-6"></path>
                <path d="m8 6-6 6 6 6"></path>
              </svg>
              Technical Expertise
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
              <li className="flex items-start gap-1">
                <BiPlay className="text-blue-500 mt-1 shrink-0" />
                <strong>Frontend:</strong> React.js, Next.js, JavaScript, Tailwind CSS</li>
              <li className="flex items-start gap-1">
                <BiPlay className="text-blue-500 mt-1 shrink-0" />
                <strong>Backend:</strong> Node.js, Express, MongoDB, MySQL</li>
              <li className="flex items-start gap-1">
                <BiPlay className="text-blue-500 mt-1 shrink-0" />
                <strong>DevOps:</strong> Docker, AWS, CI/CD, Git</li>
              <li className="flex items-start gap-1">
                <BiPlay className="text-blue-500 mt-1 shrink-0" />
                <strong>Tools:</strong> Postman, VS Code, Figma</li>
              <li className="flex items-start gap-1">
                <BiPlay className="text-blue-500 mt-1 shrink-0" />
                <strong>Languages:</strong> C++, JavaScript</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Image */}
        <section className="xl:self-start xl:mt-10 mb-5 flex-1 ">
          <div className='flex items-center justify-center relative'>
            <img
              className='border border-blue-300 rounded-lg overflow-hidden h-100 w-auto object-cover shadow-2xl shadow-blue-300 hover:scale-102 duration-300'
              src="/ajm_dp1.jpeg" alt="Ajmal's pic"
            />

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

      {/* Hr Line */}
      <hr className="my-8 text-blue-500/50 w-full max-w-3xl" />

      <div className="space-y-10 max-w-3xl">

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-white text-2xl font-bold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-blue-500">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 text-white">
            <div>
              <h4 className="font-bold text-xl">What tech stack does Ajmal Hussain specialize in?</h4>
              <p className="text-white/70">Ajmal Hussain specializes in the MERN stack (MongoDB, Express, React, Node.js), Next.js, and scaling web applications with Docker and AWS.</p>
            </div>

            <div>
              <h4 className="font-bold text-xl">Is Ajmal Hussain available for freelance or full-time roles?</h4>
              <p className="text-white/70">Yes, Ajmal Hussain is available for Full Stack Developer roles and freelance software development projects. You can contact him via the <Link to="/contact" className="text-blue-500 font-medium hover:underline">contact</Link> page.</p>
            </div>

            <div>
              <h4 className="font-bold text-xl">Where is Ajmal Hussain based?</h4>
              <p className="text-white/70">Ajmal Hussain is a Software Developer based in Ahmedabad, Gujarat, India, working with clients globally.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leetcode profile Container */}
      <div className="border border-blue-500 bg-linear-to-l from-blue-800 to-blue-950 p-5 rounded-lg mt-10 text-white w-full max-w-3xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

          <div className="relative">
            <div className="border border-blue-500 rounded-full overflow-hidden">
              <img src="/ajm_dp3.jpeg" alt="leet's pic"
                className="h-18 w-18" />
            </div>
            < SiLeetcode className="text-2xl sm:text-3xl text-amber-500 absolute -bottom-1  sm:-bottom-2 right-0 border-4 border-blue-950 bg-blue-950 rounded-full" />
          </div>

          <div className="flex-2">
            <h1 className="text-4xl font-bold">LeetCode <span className="text-amber-500">Profile</span></h1>
            <p className="text-white/80">AjmalAlgo • Global Rank: <span className="text-amber-500">539,776</span></p>
          </div>

          <div className="inline-flex items-center gap-2 border border-blue-500 bg-blue-500/30 p-2 text-amber-500 font-medium rounded-full w-37">
            <BiRun />
            <span>Active Solver</span>
          </div>
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">

          {/* Total */}
          <div className="border border-blue-500/40 bg-blue-700/20 rounded-lg p-3 md:p-4 lg:p-5 hover:border-blue-500/80 transition-all duration-300 group">
            <div className="inline-flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-blue-500 rounded-full"></div>
              <span className="text-[0.6rem] md:text-xs text-white/70 uppercase md:tracking-[0.4em] font-medium">Total</span>
            </div>
            <div className="text-lg md:text-2xl lg:text-2xl font-extrabold text-white mb-1">100</div>
            <div className="text-[0.65rem] md:text-xs text-blue-500">Problems</div>
          </div>

          {/* Easy */}
          <div className="border border-white/10 bg-blue-800/10 rounded-lg p-3 md:p-4 lg:p-5 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 group">
            <div className="inline-flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-green-500 rounded-full"></div>
              <span className="text-[0.6rem] md:text-xs text-white/70 uppercase md:tracking-[0.4em] font-medium">Easy</span>
            </div>
            <div className="text-lg md:text-2xl lg:text-2xl font-extrabold text-white mb-1">75</div>
            <div className="text-[0.65rem] md:text-xs text-white/60">Solved</div>
          </div>

          {/* Medium */}
          <div className="border border-white/10 bg-blue-800/10 rounded-lg p-3 md:p-4 lg:p-5 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300 group">
            <div className="inline-flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-amber-500 rounded-full"></div>
              <span className="text-[0.6rem] md:text-xs text-white/70 uppercase md:tracking-[0.4em] font-medium">Medium</span>
            </div>
            <div className="text-lg md:text-2xl lg:text-2xl font-extrabold text-white mb-1">25</div>
            <div className="text-[0.65rem] md:text-xs text-white/60">Solved</div>
          </div>

          {/* Hard */}
          <div className="border border-white/10 bg-blue-800/10 rounded-lg p-3 md:p-4 lg:p-5 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 group">
            <div className="inline-flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-red-500 rounded-full"></div>
              <span className="text-[0.6rem] md:text-xs text-white/70 uppercase md:tracking-[0.4em] font-medium">Hard</span>
            </div>
            <div className="text-lg md:text-2xl lg:text-2xl font-extrabold text-white mb-1">0</div>
            <div className="text-[0.65rem] md:text-xs text-white/60">Solved</div>
          </div>

        </div>

        {/* Hr Line */}
        <hr className="my-10 text-blue-500/50" />

        <div className="space-y-4">
          <h4 className="font-bold text-xl md:text-left text-center">Connect With Me</h4>
          <div className="flex md:items-start md:justify-start items-center justify-center flex-wrap gap-3 text-white/80">

            <a href="https://github.com/AjmalGit25" target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-lg hover:border-blue-500/80 hover:bg-blue-500/20 transition-all duration-300 group">
              <FaGithub className="group-hover:text-blue-500 duration-300 transition-colors" />
              <span className="group-hover:text-blue-500 duration-300 transition-colors" >GitHub</span>
            </a>

            <a href="https://leetcode.com/u/AjmalAlgo" target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-lg hover:border-blue-500/80 hover:bg-blue-500/20 transition-all duration-300 group">
              <SiLeetcode className="group-hover:text-blue-500 duration-300 transition-colors" />
              <span className="group-hover:text-blue-500 duration-300 transition-colors" >Leetcode</span>
            </a>

            <a href="https://twitter.com" target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-lg hover:border-blue-500/80 hover:bg-blue-500/20 transition-all duration-300 group">
              <FaTwitter className="group-hover:text-blue-500 duration-300 transition-colors" />
              <span className="group-hover:text-blue-500 duration-300 transition-colors" >Twitter</span>
            </a>

            <a href="https://linkedin.com/in/ajmal-hussain92" target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-lg hover:border-blue-500/80 hover:bg-blue-500/20 transition-all duration-300 group">
              <FaLinkedin className="group-hover:text-blue-500 duration-300 transition-colors" />
              <span className="group-hover:text-blue-500 duration-300 transition-colors" >LinkedIn</span>
            </a>

            <a href="https://instagram.com" target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-lg hover:border-blue-500/80 hover:bg-blue-500/20 transition-all duration-300 group">
              <AiFillInstagram className="group-hover:text-blue-500 duration-300 transition-colors" />
              <span className="group-hover:text-blue-500 duration-300 transition-colors">Instagram</span>
            </a>

          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
