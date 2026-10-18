import { SiLeetcode } from "react-icons/si";
import { BiRun, BiPlay } from "react-icons/bi";
import { FaCode, FaEye, FaMouse, FaGlobe, FaRegQuestionCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { PiSmileySadLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../../config/api.js";
import Counter from "../components/Counter.jsx";
import { leetCodeUIs, codingPlatforms, socialPlatforms, technicalExpertise } from "../data/about.js";

function About() {
  // Page starts from the top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [leetcode, setLeetcode] = useState(null);
  const [leetcodeLoading, setLeetcodeLoading] = useState(true);
  const [selected, setSelected] = useState(false);
  const [closing, setClosing] = useState(false);
  const [visitorLoading, setVisitorLoading] = useState(true);
  const [visitorCount, setVisitorCount] = useState(100);

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
        console.log(error);
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
      } finally {
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

          <div className="fade-right mt-10">
            <h2 className="text-white text-2xl my-3 font-bold">I'M A
              <span className="text-blue-500"> FULL STACK </span>DEVELOPER
            </h2>

            {/* Paragraph container */}
            <div className="space-y-4 text-base sm:text-lg text-white/80">
              <p>
                Hi, I'm Ajmal Hussain — a Full Stack MERN Developer specializing in building modern, scalable, and user-friendly web applications using MongoDB, Express.js, React, Node.js.
              </p>

              <p>I focus on writing clean, maintainable code and following best development practices.</p>

              <p>I build full-stack web applications with a focus on clean architecture, maintainable code, performance, and intuitive user experiences.</p>

              <p>My <strong className="text-blue-300">goal</strong> is to become a skilled software developer, contribute to impactful projects, and continuously grow as a professional in the tech industry.</p>
            </div>
          </div>

          {/* Technical Expertise */}
          <div className="space-y-4 fade-left">
            <h3 className="mt-10 text-xl font-bold flex items-center gap-2 text-blue-500">
              <FaCode />
              <span>Technical Expertise</span>
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
              {technicalExpertise.map((expertise, idx) => (
                <li key={idx} className="flex items-start gap-1">
                  <BiPlay className="text-blue-500 mt-1 shrink-0" />
                  <strong>{expertise.title}: </strong>{expertise.contents}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2: Image */}
        <section className="xl:self-start xl:mt-10 mb-5 flex-1 fade-up">
          <div className='flex items-center justify-center bg-linear-to-tl from-blue-500 via-blue-950 to-blue-700 border border-blue-300 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0px_0px_25px_rgba(50,100,255,1)] duration-300 transition-shadow aspect-4/5 relative'>
            <img
              draggable={false} onContextMenu={(e) => e.preventDefault()}
              className='w-full max-w-xl h-auto object-contain'
              src="/profiles/dp2.png" alt="Ajmal's Picture"
            />

            {/* Tag on Pic - Visitors Count */}
            <div className="absolute bottom-3 w-full p-2 px-4">
              <div className="flex items-center rounded-full h-12 border border-blue-300 overflow-hidden">

                {/* Left */}
                <div className="flex-3 flex items-center gap-2 pl-4 bg-linear-to-r from-blue-950 to-blue-700 h-full">
                  <FaEye className="text-blue-500" />
                  <span className="font-mono text-xs sm:text-base tracking-wide text-shadow-[0_1px_2px_rgba(0,0,0,0.8)] text-blue-100">
                    Portfolio visitors
                  </span>
                </div>

                {/* Right */}
                <div className="flex-1 flex items-center justify-between bg-blue-950 h-full pr-5 px-2">
                  {visitorLoading ? (
                    <div className="h-5 w-5 border-2 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
                  ) : (
                    <Counter
                      end={visitorCount}
                      duration={1000}
                      className="text-white text-lg font-mono font-bold"
                    />
                  )}
                  <div className="relative flex items-center">
                    <span className="absolute h-2 w-2 rounded-full bg-blue-500"></span>
                    <span className="absolute h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Hr Line */}
      <hr className="my-8 text-blue-500/50 w-full max-w-4xl" />

      {/* FAQ */}
      <div className="space-y-10 max-w-4xl">
        <div className="space-y-4">
          <h2 className="text-white text-2xl font-bold flex items-center gap-2">
            <FaRegQuestionCircle className="text-blue-500" />
            <span>Frequently Asked Questions (FAQs)</span>
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
      <div className="border border-blue-500 bg-linear-to-l from-blue-800 to-blue-950 p-5 rounded-xl mt-10 text-white max-w-4xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

          <div className="relative">
            <div className="border border-blue-500 rounded-full overflow-hidden">
              <img
                src="https://assets.leetcode.com/users/AjmalAlgo/avatar_1790843321.png" alt="leet's pic"
                draggable={false} onContextMenu={(e) => e.preventDefault()}
                className="h-18 w-18" />
            </div>
            < SiLeetcode className="text-2xl sm:text-3xl text-amber-500 absolute -bottom-1  sm:-bottom-2 right-0 border-4 border-blue-950 bg-blue-950 rounded-full" />
          </div>

          <div className="flex-2">
            <h1 className="text-4xl font-bold">LeetCode <span className="text-amber-500">Profile</span></h1>
            <p className="text-white/80">AjmalAlgo • Rank: <span className="text-amber-500">640,769</span>
            </p>
          </div>

          <div onClick={() => setSelected(true)} className="inline-flex items-center gap-2 border border-blue-500 bg-blue-500/30 p-1.5 px-3 text-amber-500 font-medium rounded-full w-fit cursor-pointer">
            <img src="./Leet_200.gif" alt="Badge_200" className="w-auto h-5" />
            <span>Active Solver</span>
          </div>
        </div>

        {/* Count Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">

          {leetCodeUIs.map((leetCodeUI, idx) => (
            <div
              key={idx}
              className={`border ${leetCodeUI.borderColor} ${leetCodeUI.bgColor} ${leetCodeUI.borderHoverColor} ${leetCodeUI.bgHoverColor} rounded-xl p-3 md:p-4 lg:p-5 transition-all duration-300 group`}
            >
              <div className="inline-flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
                <div className={`h-1.5 w-1.5 md:h-2 md:w-2 ${leetCodeUI.indicatorColor} rounded-full`}></div>
                <span className="text-[0.6rem] md:text-xs text-white/70 uppercase md:tracking-[0.4em] font-medium">{leetCodeUI.title}</span>
              </div>

              <div className="flex flex-col justify-between">
                <div className="flex items-center text-white mb-1 h-8">
                  {leetcodeLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-xs font-normal">Loading...</span>
                    </div>
                  ) : (
                    <span className="text-lg md:text-xl lg:text-2xl font-bold">
                      {leetcode?.[leetCodeUI.valueKey] ?? <PiSmileySadLight />}
                    </span>
                  )}
                </div>
                <div className="text-[0.65rem] md:text-xs text-blue-500">{leetCodeUI.status}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Hr Line */}
        <hr className="my-10 text-blue-500/50" />

        <div className="space-y-4">
          <h4 className="font-bold text-xl md:text-left flex items-center justify-center gap-2 mb-5">
            <FaMouse size="1rem" />
            <span>Tech Platforms</span>
          </h4>

          {/* Professional Coding Platform Links */}
          <div className="flex md:items-start md:justify-start items-center justify-center flex-wrap gap-3 text-white">
            {codingPlatforms.map((codingPlatform, idx) => {
              const Icon = codingPlatform.icon;
              return (
                <a
                  key={idx}
                  href={codingPlatform.url} target="_blank" rel="noopener noreferrer"
                  className={`${codingPlatform.bgColor} px-3 py-1.5 rounded-lg hover:opacity-90`}
                >
                  <div className="flex items-center gap-2 font-medium">
                    <Icon />
                    <span>{codingPlatform.title}</span>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Hr Line */}
          <hr className="my-10 text-blue-500/50" />

          <h4 className="font-bold text-xl md:text-left flex items-center justify-center gap-2 mb-5">
            <FaGlobe size="1rem" />
            <span>Connect With Me</span>
          </h4>

          {/* Social/Contact Platform Links */}
          <div className="flex md:items-start md:justify-start items-center justify-center flex-wrap gap-3 text-white/80">

            {socialPlatforms.map((socialPlatform, idx) => {
              const Icon = socialPlatform.icon;
              return (
                <a href={socialPlatform.url} target="_blank" rel="noopener noreferrer"
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-lg hover:border-blue-500/80 hover:bg-blue-500/20 transition-all duration-300 group">
                  <Icon className="group-hover:text-blue-500 duration-300 transition-colors" />
                  <span className="group-hover:text-blue-500 duration-300 transition-colors" >{socialPlatform.title}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <Footer />

      {/* Leetcode Badge Modal =================== */}
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
          <h3 className="absolute top-40 font-medium text-xl">
            <div className="flex items-center gap-2">
              <SiLeetcode className="text-orange-500" />
              <span className="text-orange-500">LeetCode:</span>
              <span className="text-blue-500">AjmalAlgo</span>
            </div>
          </h3>
          <span className="absolute bottom-40 text-amber-300 text-xs sm:text-base">
            SOLVING PROBLEMS 200+ DAYS IN 2026
          </span>
          <span className="absolute bottom-20 text-blue-300 text-xs sm:text-base border p-1 rounded-full hover:text-blue-500 transition-colors duration-200 cursor-pointer">
            <RxCross1 size={15} />
          </span>
        </div>
      )}
    </div>
  );
}

export default About;