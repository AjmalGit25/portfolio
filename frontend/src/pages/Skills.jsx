import { SiReact, SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiGit, SiGithub, SiVercel, SiRender, SiPostman, SiFigma, SiPython, SiPhp, SiDocker, SiRedux, SiMysql, SiNextdotjs, SiRedis, SiFirebase, SiPrisma, SiGooglegemini, SiWebrtc } from "react-icons/si";
import { FaNodeJs, FaLinux, FaJava, FaAws, FaDatabase, FaBrain } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { BsBarChartFill, BsDiagram3Fill, BsOpenai, BsClaude, } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";
import Footer from "../components/Footer.jsx";
import { useEffect } from "react";

import { coreStack, cloudAndDevOps, coreTools, familiarSkills, exploringSkills } from "../data/skills.js";

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

  const skillClass = "group relative overflow-hidden rounded-lg bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-500 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300/20";

  const skillRadialClass = "pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md";

  const skillTextClass = "text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors";

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
        {/* ------------- Core Stack ------------- */}
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

            {coreStack.frontEnd.map((skill, idx) => {
              const Icon = skill.icon;

              return (
                <div className={`${skillClass}`}>
                  <div className={`${skillRadialClass}`} style={{ background: `radial-gradient(circle, ${skill.glowColor} 0%, transparent 70%)` }}>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                    <Icon className={`h-10 w-10 ${skill.iconColor} group-hover:scale-110 duration-200`} />
                    <span className={`${skillTextClass}`}>{skill.title}</span>
                  </div>
                </div>
              );
            })}
          </section>

          {/* BACKEND */}
          <div className="mt-10 flex items-center gap-3 justify-center text-[11px] sm:text-[15px] fade-left">
            <span className="h-px w-8 bg-blue-500"></span>
            <h3 className="text-blue-300 tracking-[0.3em]">BACKEND</h3>
            <span className="h-px w-8 bg-blue-500"></span>
          </div>
          <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 card-up">

            {coreStack.backEnd.map((skill, idx) => {
              const Icon = skill.icon;

              return (
                <div className={`${skillClass}`}>
                  <div className={`${skillRadialClass}`} style={{ background: `radial-gradient(circle, ${skill.glowColor} 0%, transparent 70%)` }}>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                    <Icon className={`h-10 w-10 ${skill.iconColor} group-hover:scale-110 duration-200`} />
                    <span className={`${skillTextClass}`}>{skill.title}</span>
                  </div>
                </div>
              );
            })}
          </section>

          {/* DATABASES */}
          <div className="mt-10 flex items-center gap-3 justify-center text-[11px] sm:text-[15px] fade-left">
            <span className="h-px w-8 bg-blue-500"></span>
            <h3 className="text-blue-300 tracking-[0.3em]">DATABASES</h3>
            <span className="h-px w-8 bg-blue-500"></span>
          </div>
          <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 card-up">

            {coreStack.databases.map((skill, idx) => {
              const Icon = skill.icon;

              return (
                <div className={`${skillClass}`}>
                  <div className={`${skillRadialClass}`} style={{ background: `radial-gradient(circle, ${skill.glowColor} 0%, transparent 70%)` }}>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                    <Icon className={`h-10 w-10 ${skill.iconColor} group-hover:scale-110 duration-200`} />
                    <span className={`${skillTextClass}`}>{skill.title}</span>
                  </div>
                </div>
              );
            })}
          </section>

          {/* LANGUAGES */}
          <div className="mt-10 flex items-center gap-3 justify-center text-[11px] sm:text-[15px] fade-left">
            <span className="h-px w-8 bg-blue-500"></span>
            <h3 className="text-blue-300 tracking-[0.3em]">LANGUAGES</h3>
            <span className="h-px w-8 bg-blue-500"></span>
          </div>
          <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 card-up">
            {coreStack.languages.map((skill, idx) => {
              const Icon = skill.icon;

              return (
                <div className={`${skillClass}`}>
                  <div className={`${skillRadialClass}`} style={{ background: `radial-gradient(circle, ${skill.glowColor} 0%, transparent 70%)` }}>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                    <Icon className={`h-10 w-10 ${skill.iconColor} group-hover:scale-110 duration-200`} />
                    <span className={`${skillTextClass}`}>{skill.title}</span>
                  </div>
                </div>
              );
            })}
          </section>
        </div>

        {/* ------------- Cloud and DevOps ------------- */}
        <div className="inline-flex items-center gap-2 mt-6">
          <div className='h-1 w-8 bg-linear-to-l from-blue-700 to-blue-300 rounded-full'></div>
          <h3 className="text-white font-bold text-2xl">Cloud and DevOps</h3>
        </div>

        <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 card-up">
          {cloudAndDevOps.map((skill, idx) => {
            const Icon = skill.icon;

            return (
              <div className={`${skillClass}`}>
                <div className={`${skillRadialClass}`} style={{ background: `radial-gradient(circle, ${skill.glowColor} 0%, transparent 70%)` }}>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                  <Icon className={`h-10 w-10 ${skill.iconColor} group-hover:scale-110 duration-200`} />
                  <span className={`${skillTextClass}`}>{skill.title}</span>
                </div>
              </div>
            );
          })}
        </section>

        {/* ------------- Core Tools ------------- */}
        <div className="inline-flex items-center gap-2 mt-6">
          <div className='h-1 w-8 bg-linear-to-l from-blue-700 to-blue-300 rounded-full'></div>
          <h3 className="text-white font-bold text-2xl">Core Tools</h3>
        </div>

        <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 card-up">
          {coreTools.map((skill, idx) => {
            const Icon = skill.icon;

            return (
              <div className={`${skillClass}`}>
                <div className={`${skillRadialClass}`} style={{ background: `radial-gradient(circle, ${skill.glowColor} 0%, transparent 70%)` }}>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                  <Icon className={`h-10 w-10 ${skill.iconColor} group-hover:scale-110 duration-200`} />
                  <span className={`${skillTextClass}`}>{skill.title}</span>
                </div>
              </div>
            );
          })}
        </section>

        {/* ------------- Supporting / Familiar ------------- */}
        <div className="inline-flex items-center gap-2 mt-6">
          <div className='h-1 w-8 bg-linear-to-l from-blue-700 to-blue-300 rounded-full'></div>
          <h3 className="text-white font-bold text-2xl">Familiar</h3>
        </div>

        <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 card-up">
          {familiarSkills.map((skill, idx) => {
            const Icon = skill.icon;

            return (
              <div className={`${skillClass}`}>
                <div className={`${skillRadialClass}`} style={{ background: `radial-gradient(circle, ${skill.glowColor} 0%, transparent 70%)` }}>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                  <Icon className={`h-10 w-10 ${skill.iconColor} group-hover:scale-110 duration-200`} />
                  <span className={`${skillTextClass}`}>{skill.title}</span>
                </div>
              </div>
            );
          })}
        </section>

        {/* ------------- Exploring ------------- */}
        <div className="inline-flex items-center gap-2 mt-6">
          <div className='h-1 w-8 bg-linear-to-l from-blue-700 to-blue-300 rounded-full'></div>
          <h3 className="text-white font-bold text-2xl">Exploring</h3>
        </div>

        <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 card-up">
          {exploringSkills.map((skill, idx) => {
            const Icon = skill.icon;

            return (
              <div className={`${skillClass}`}>
                <div className={`${skillRadialClass}`} style={{ background: `radial-gradient(circle, ${skill.glowColor} 0%, transparent 70%)` }}>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                  <Icon className={`h-10 w-10 ${skill.iconColor} group-hover:scale-110 duration-200`} />
                  <span className={`${skillTextClass}`}>{skill.title}</span>
                </div>
              </div>
            );
          })}
        </section>
      </div>

      {/* Footer Text */}
      <Footer />

    </div>
  );
}

export default Skills;