import { SiLeetcode, SiUnstop, SiW3Schools, SiHackerrank, SiDiscord, SiWhatsapp, SiGeeksforgeeks } from "react-icons/si";
import { BiRun, BiPlay } from "react-icons/bi";
import { FaGithub, FaTwitter, FaLaptopCode, FaMouse, FaGlobe, FaEye } from "react-icons/fa";
import { FaLinkedin, FaCode } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../../config/api.js";

function About() {
  // Page starts from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [leetcode, setLeetcode] = useState(null);
  const [leetcodeLoading, setLeetcodeLoading] = useState(true);
  const [selected, setSelected] = useState(false);
  const [closing, setClosing] = useState(false);
  const [visitorLoading, setVisitorLoading] = useState(true);
  const [visitorCount, setVisitorCount] = useState(1);

  // Leetcode Solved questions fetch
  useEffect(() => {
    const fetchLeetcode = async () => {
      try {
        const response = await fetch(
          "https://alfa-leetcode-api.onrender.com/AjmalAlgo/solved"
        );

        const data = await response.json();
        setLeetcode(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLeetcodeLoading(false);
      }
    }

    fetchLeetcode();
  }, []);

  // Fetch Visitors count
  useEffect(() => {
    const fetchVisitor = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/visitors`);
        setVisitorCount(response.data.uniqueVisitors);
      } catch (error) {
        console.log("Fetch failed: ", error);
      }finally{
        setVisitorLoading(false);
      }
    }

    fetchVisitor();
  }, []);

  // Prevent the background page's scrolling (during Modal open)
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 p-4 md:p-6 overflow-x-hidden">

      {/* Lead Heading */}
      <div className='inline-flex items-center gap-3 text-[7px] sm:text-[11px] uppercase tracking-[0.4em] text-white/60 mt-15 sm:mt-5'>
        <span className='h-px w-8 bg-blue-500'></span>
        Software Developer Profile
        <span className='h-px w-8 bg-blue-500'></span>
      </div>

      {/* About & Image container */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-10 mt-6">
        {/* Section 1: About Me */}
        <section className="flex-2">
          <h1 className='text-5xl sm:text-7xl uppercase font-extrabold text-white'>
            About <span className='text-blue-500'>Me</span>
          </h1>

          <div className="fade-right">
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
          <div className="space-y-4 fade-left">
            <h3 className="mt-10 text-xl font-bold flex items-center gap-2 text-blue-500">
              <FaCode />
              <span>Technical Expertise</span>
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
        <section className="xl:self-start xl:mt-10 mb-5 flex-1 fade-up">
          <div className='flex items-center justify-center border border-blue-300 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0px_0px_25px_rgba(50,100,255,1)] duration-300 transition-shadow max-w-80 relative'>
            <img
              draggable={false} onContextMenu={(e) => e.preventDefault()}
              className='w-full h-auto object-contain bg-blue-700'
              src="/profiles/about_dp.png" alt="Ajmal's Picture"
            />

            {/* Tag on Pic - Visitors Count */}
            <div className="absolute bottom-0 rounded-b-xl w-full">
              <div className="h-full flex text-white bg-linear-to-r from-blue-950 to-blue-700 ">

                {/* Left */}
                <div className="flex-2 flex items-center gap-2 p-2">
                  <div className="bg-white/10 p-1.5 w-fit rounded-full">
                    <FaEye className="text-blue-400" size={15} />
                  </div>
                  <span className="text-sm text-white/80 uppercase font-light tracking-wider">
                    Portfolio visitors
                  </span>
                </div>

                {/* Divider */}
                <span className="w-px bg-blue-300/50"></span>

                {/* Right */}
                <div className="flex-1 flex items-center justify-evenly gap-2 p-2">
                  {visitorLoading ? (
                    <div className="h-5 w-5 border-2 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
                  ) : (
                    <span className="font-bold text-xl">{visitorCount}</span>
                  )}
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Hr Line */}
      <hr className="my-8 text-blue-500/50 w-full max-w-5xl" />

      <div className="space-y-10 max-w-5xl">

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

      {/* LeetCode profile Container */}
      <div className="border border-blue-500 bg-linear-to-l from-blue-800 to-blue-950 p-5 rounded-xl mt-10 text-white max-w-5xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

          <div className="relative">
            <div className="border border-blue-500 rounded-full overflow-hidden">
              <img src="/profiles/leet_dp.png" alt="leet's pic"
                className="h-18 w-18" />
            </div>
            < SiLeetcode className="text-2xl sm:text-3xl text-amber-500 absolute -bottom-1  sm:-bottom-2 right-0 border-4 border-blue-950 bg-blue-950 rounded-full" />
          </div>

          <div className="flex-2">
            <h1 className="text-4xl font-bold">LeetCode <span className="text-amber-500">Profile</span></h1>
            <p className="text-white/80">AjmalAlgo • Rank: <span className="text-amber-500">876,709</span></p>
          </div>

          <div onClick={() => setSelected(true)} className="inline-flex items-center gap-2 border border-blue-500 bg-blue-500/30 p-1.5 px-3 text-amber-500 font-medium rounded-full w-fit cursor-pointer">
            <img src="./Leet_200.gif" alt="Badge_200" className="w-auto h-5" />
            <span>Active Solver</span>
          </div>
        </div>

        {/* Count Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">

          {/* Total */}
          <div className="border border-blue-500/40 bg-blue-700/20 rounded-xl p-3 md:p-4 lg:p-5 hover:border-blue-500/80 transition-all duration-300 group">
            <div className="inline-flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-blue-500 rounded-full"></div>
              <span className="text-[0.6rem] md:text-xs text-white/70 uppercase md:tracking-[0.4em] font-medium">Total</span>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center text-white mb-1 h-8">
                {leetcodeLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-xs font-normal">Loading...</span>
                  </div>
                ) : (
                  <span className="text-lg md:text-xl lg:text-2xl font-extrabold">
                    {leetcode?.solvedProblem}
                  </span>
                )}
              </div>
              <div className="text-[0.65rem] md:text-xs text-blue-500">Problems</div>
            </div>
          </div>

          {/* Easy */}
          <div className="border border-white/10 bg-blue-800/10 rounded-xl p-3 md:p-4 lg:p-5 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 group">
            <div className="inline-flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-green-500 rounded-full"></div>
              <span className="text-[0.6rem] md:text-xs text-white/70 uppercase md:tracking-[0.4em] font-medium">Easy</span>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center text-white mb-1 h-8">
                {leetcodeLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-xs font-normal">Loading...</span>
                  </div>
                ) : (
                  <span className="text-lg md:text-xl lg:text-2xl font-extrabold">
                    {leetcode?.easySolved}
                  </span>
                )}
              </div>
              <div className="text-[0.65rem] md:text-xs text-white/60">Solved</div>
            </div>
          </div>

          {/* Medium */}
          <div className="border border-white/10 bg-blue-800/10 rounded-xl p-3 md:p-4 lg:p-5 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300 group">
            <div className="inline-flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-amber-500 rounded-full"></div>
              <span className="text-[0.6rem] md:text-xs text-white/70 uppercase md:tracking-[0.4em] font-medium">Medium</span>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center text-white mb-1 h-8">
                {leetcodeLoading ? (
                  <div className="flex items-center gap-2 h-5">
                    <div className="h-3 w-3 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-xs font-normal">Loading...</span>
                  </div>
                ) : (
                  <span className="text-lg md:text-xl lg:text-2xl font-extrabold">
                    {leetcode?.mediumSolved}
                  </span>
                )}
              </div>
              <div className="text-[0.65rem] md:text-xs text-white/60">Solved</div>
            </div>
          </div>

          {/* Hard */}
          <div className="border border-white/10 bg-blue-800/10 rounded-xl p-3 md:p-4 lg:p-5 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 group">
            <div className="inline-flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-red-500 rounded-full"></div>
              <span className="text-[0.6rem] md:text-xs text-white/70 uppercase md:tracking-[0.4em] font-medium">Hard</span>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center text-white mb-1 h-8">
                {leetcodeLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-xs font-normal">Loading...</span>
                  </div>
                ) : (
                  <span className="text-lg md:text-xl lg:text-2xl font-extrabold">
                    {leetcode?.hardSolved}
                  </span>
                )}
              </div>
              <div className="text-[0.65rem] md:text-xs text-white/60">Solved</div>
            </div>
          </div>

        </div>

        {/* Hr Line */}
        <hr className="my-10 text-blue-500/50" />

        <div className="space-y-4">
          <h4 className="font-bold text-xl md:text-left flex items-center justify-center gap-2">
            <span><FaMouse /></span>
            <span>Tech Platforms</span>
          </h4>

          {/* Professional Coding Platform Links */}
          <div className="flex md:items-start md:justify-start items-center justify-center flex-wrap gap-3 text-white">
            {/* -----------Sample----------- */}
            {/* <a href="https://github.com/AjmalGit25" target="_blank"
            className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-lg hover:border-blue-500/80 hover:bg-blue-500/20 transition-all duration-300 group">
            <FaGithub className="group-hover:text-blue-500 duration-300 transition-colors" />
            <span className="group-hover:text-blue-500 duration-300 transition-colors" >GitHub</span>
          </a> */}

            <a href="https://github.com/AjmalGit25" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black hover:bg-black/60">
              <FaGithub />
              <span className="font-semibold">GitHub</span>
            </a>

            <a href="https://leetcode.com/u/AjmalAlgo" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-500/80 transition-colors duration-200">
              <SiLeetcode />
              <span className="font-semibold">LeetCode</span>
            </a>

            <a href="https://www.geeksforgeeks.org/profile/ajmal786" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-700/80 transition-colors duration-200">
              <SiGeeksforgeeks />
              <span className="font-semibold">GeeksforGeeks</span>
            </a>

            <a href="https://unstop.com/u/mdhus70693" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-500/80 transition-colors duration-200">
              <SiUnstop />
              <span className="font-semibold">unstop</span>
            </a>

            <a href="https://www.w3profile.com/AjmalW3" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500 hover:bg-green-500/80 transition-colors duration-200">
              <SiW3Schools />
              <span className="font-semibold">W3Schools</span>
            </a>

            <a href="https://www.hackerrank.com/profile/ajmalashrafi2016" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-600/80 transition-colors duration-200">
              <SiHackerrank />
              <span className="font-semibold">HackerRank</span>
            </a>

          </div>

          {/* Hr Line */}
          <hr className="my-10 text-blue-500/50" />

          <h4 className="font-bold text-xl md:text-left flex items-center justify-center gap-2">
            <span><FaGlobe /></span>
            <span>Connect With Me</span>
          </h4>

          {/* Social/Contact Platform Links */}
          <div className="flex md:items-start md:justify-start items-center justify-center flex-wrap gap-3 text-white/80">
            <a href="https://linkedin.com/in/ajmal-hussain92" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-lg hover:border-blue-500/80 hover:bg-blue-500/20 transition-all duration-300 group">
              <FaLinkedin className="group-hover:text-blue-500 duration-300 transition-colors" />
              <span className="group-hover:text-blue-500 duration-300 transition-colors" >LinkedIn</span>
            </a>

            <a href="https://www.instagram.com/asyncajmal" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-lg hover:border-blue-500/80 hover:bg-blue-500/20 transition-all duration-300 group">
              <AiFillInstagram className="group-hover:text-blue-500 duration-300 transition-colors" />
              <span className="group-hover:text-blue-500 duration-300 transition-colors">Instagram</span>
            </a>

            <a href="https://discord.com/users/1341100335086833725" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-lg hover:border-blue-500/80 hover:bg-blue-500/20 transition-all duration-300 group">
              <SiDiscord className="group-hover:text-blue-500 duration-300 transition-colors" />
              <span className="group-hover:text-blue-500 duration-300 transition-colors">Discord</span>
            </a>

            <a href="https://wa.me/919955578303?text=Hi%20Ajmal!%20I%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I'd%20love%20to%20connect%20regarding%20an%20opportunity/collaboration.%20Looking%20forward%20to%20hearing%20from%20you!" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-lg hover:border-blue-500/80 hover:bg-blue-500/20 transition-all duration-300 group">
              <SiWhatsapp className="group-hover:text-blue-500 duration-300 transition-colors" />
              <span className="group-hover:text-blue-500 duration-300 transition-colors">WhatsApp</span>
            </a>

          </div>
        </div>
      </div>

      {/* Footer Text */}
      <Footer />

      {/* Leetcode Badge Modal */}
      {selected && (
        <div
          onAnimationEnd={() => {
            if (closing) {
              setSelected(false);
              setClosing(false);
            }
          }}
          onClick={() => setClosing(true)}
          className={`fixed inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-sm h-screen ${closing ? "fade-zoomOut" : "fade-zoomIn"}`}
        >
          <img src="./Leet_200.gif" alt="Badge_200" className="w-auto h-50 md:h-80" onClick={(e) => e.stopPropagation()} />
          <span className="absolute bottom-40 text-amber-300 text-xs sm:text-base">
            SOLVING PROBLEMS 200+ DAYS IN 2026
          </span>
          <h3 className="absolute top-40 font-medium text-xl">
            <span className="text-orange-500">LeetCode</span>
            <span className="text-green-500 animate-ping"> • </span>
            <span className="text-blue-500">AjmalAlgo</span>
          </h3>
        </div>
      )}

    </div>
  );
}

export default About;
