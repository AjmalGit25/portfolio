import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { PiMedal, PiMedalFill } from "react-icons/pi";
import { FaMedal } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FiExternalLink } from "react-icons/fi";

import { useState, useEffect } from "react";


function Achievements() {
  const [selected, setSelected] = useState(null);

  // JSON data for achievements
  const achievements = [
    {
      id: 1,
      title: "C++ Certificate",
      platform: "SimpliLearn",
      description: "Certificate for completing Advanced C++ programming course from SimpliLearn SkillUp.",
      year: "2025",
      image: "/cert1.jpeg",
      verifyUrl: "https://simpli-web.app.link/e/zlR6DLdpx2b"
    },
    {
      id: 2,
      title: "DSA with C++",
      platform: "ChaiCode",
      description: "Excellence Certificate for mastering DSA with C++ course from ChaiCode platform.",
      year: "2026",
      image: "/cert2.jpeg",
      verifyUrl: "https://courses.chaicode.com/learn/certificate/11786731-230407"
    },
    {
      id: 3,
      title: "C++ CodVeda Internship",
      platform: "CodVeda",
      description: "Successfully completed the C++ internship program at CodVeda gaining practical coding hands-on experience.",
      year: "2026",
      image: "/cert3.jpeg",
      verifyUrl: "https://courses.codveda.com/courses"
    },
    {
      id: 4,
      title: "Full Stack Internship",
      platform: "EduSkills",
      description: "Successfully completed Full Stack MERN internship program at EduSkills knowing the real-world application.",
      year: "2025",
      image: "/cert4.jpeg",
      verifyUrl: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=f225da8b7ab644a26f9f23d33495d8b0"
    },
    {
      id: 5,
      title: "Figma UI/UX Certificate",
      platform: "Udemy",
      description: "Completed UI/UX Designing course using Figma at Udemy.",
      year: "2026",
      image: "/cert5.jpeg",
      verifyUrl: "https://www.udemy.com/certificate/UC-46cb0def-5b95-47be-9269-b8647293db09/"
    },
    {
      id: 6,
      title: "Power BI Certificate",
      platform: "Rai University",
      description: "Successfully completed the Data Analytics using Power Bi course organized by Rai University.",
      year: "2025",
      image: "/cert6.jpeg",
      verifyUrl: "https://www.raiuniversity.edu/"
    },
    {
      id: 7,
      title: "Effective Communication Certificate",
      platform: "Skill India",
      description: "Certificate of Participation in Effective Communication course offered by NSDC through Skill India Digital.",
      year: "2023",
      image: "/cert7.jpeg",
      verifyUrl: "https://courses.skillindiadigital.gov.in/api/custom_api/view_certificate/705deb3d412745c3b4d3ac2aacb54959"
    },
    {
      id: 8,
      title: "Kali Linux Basics Certificate",
      platform: "SimpliLearn",
      description: "Certificate for completing Kali Linux Basics course from SimpliLearn SkillUp.",
      year: "2025",
      image: "/cert8.jpeg",
      verifyUrl: "https://simpli-web.app.link/e/k3pxOFDAB2b"
    },
    {
      id: 9,
      title: "Generative AI Certificate",
      platform: "SheKunj",
      description: "Successfully completed the Generative AI Course from SheKunj.",
      year: "2025",
      image: "/cert9.jpeg",
      verifyUrl: "https://www.shekunj.com/certificate-detail/14132"
    },
    {
      id: 10,
      title: "SQL (Basic) Certificate",
      platform: "HackerRank",
      description: "Successfully passed the HackerRank skill certification test.",
      year: "2026",
      image: "/cert10.jpeg",
      verifyUrl: "https://www.hackerrank.com/certificates/1e10106502b0"
    },
  ];

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
  }, [selected]);

  return (
    <div className="max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 p-2">
      {/* Dash */}
      <div
        className='inline-flex mt-10'>
        <span className='border-2 border-blue-300 h-0 w-20 rounded-full'></span>
      </div>

      {/* Education heading */}
      <h1 className='text-5xl sm:text-7xl font-extrabold tracking-tight text-white mt-2 mb-5'>Achievements</h1>

      <p className="max-w-3xl text-white/60 mb-15">A curated collection of professional certifications and academic honors demonstrating technical mastery and a commitment to continuous growth. </p>

      {/* Cards container */}
      <div className="max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10">

          {/* Cards Rendering*/}
          {achievements.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className="relative overflow-hidden rounded-xl border border-blue-500/30 cursor-pointer aspect-[1/1.7] md:aspect-square group hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              {/* Absolute positioned background with noise and gradient */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-gray-900 to-gray-950"></div>
                <div className="absolute inset-0 bg-noise opacity-10"></div>
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px" }}>
                </div>
              </div>
              {/* Contents */}
              <div className="relative h-full flex flex-col items-center justify-center text-center p-5 gap-4">
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="h-14 w-14 bg-linear-to-l from-blue-500 to-blue-400 rounded-lg flex items-center justify-center">
                    <LuGraduationCap className="text-2xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight line-clamp-2 px-2">{item.title}</h3>
                  <p className="text-sm md:text-sm text-white/70 font-medium whitespace-nowrap overflow-hidden text-ellipsis px-2">{item.platform}</p>
                  <p className="text-xs text-white/60 line-clamp-2 px-2">{item.description}</p>
                </div>
                {/* Year */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-500 border border-blue-500/50 bg-blue-500/20 rounded-full">
                  <PiMedalFill className="text-blue-500" />
                  <span>{item.year}</span>
                </div>
              </div>

              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)" }}>
              </div>
              <div className="absolute inset-0" style={{ background: "radial-gradient(circle, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.3) 100%)" }}>
              </div>
              {/* Hover Effects */}
              <div
                className="absolute inset-0 bg-linear-to-l from-blue-500 to-blue-400 text-black flex items-center justify-center -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <div className="text-center px-6 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <FaMedal className="text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-black mb-2">{item.title}</h3>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">{item.platform}</p>
                  <p className="text-xs font-medium opacity-60">View Details</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🟪 Modal Overlay */}
        {selected && (
          <div
            className="fixed inset-0 z-20 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 overflow-y-auto scrollbar-hidden"
            onClick={() => setSelected(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-blue-500/10 rounded-lg w-lg md:w-xl lg:w-2xl xl:w-4xl max-h-[90vh] overflow-y-auto border border-blue-500/30 scrollbar-site-themel relative">
              <button className="absolute right-6 top-6 z-10 p-2.5 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-all backdrop-blur-md border border-blue-500/30" onClick={() => setSelected(null)}>
                <RxCross1 className="text-blue-400" />
              </button>

              {/* Image */}
              <div className="relative w-full aspect-16/11 bg-neutral-900 flex items-center justify-center">
                <img className="" src={selected.image} alt={selected.title} />
              </div>

              {/* Texts */}
              <div className="space-y-6 p-5 sm:p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-blue-500 border border-blue-500/50 bg-blue-500/20 rounded-full">
                  <PiMedalFill />
                  <span>{selected.year}</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white">{selected.title}</h2>
                <div className="text-xl text-blue-500 font-bold flex flex-wrap items-center gap-2 mb-10">
                  <LuGraduationCap />
                  <span>{selected.platform}</span>
                </div>
                <p className="text-xs uppercase font-thin text-white/40 tracking-[0.4em]">Credential Insights</p>
                <p className="text-white/60 font-medium italic">{selected.description}</p>
                {/* Verify Certificate */}
                <a
                  href={selected.verifyUrl}
                  target="_blank"
                  className="flex items-center gap-4 justify-center text-black font-extrabold uppercase tracking-wider p-5 bg-blue-400 rounded-lg hover:bg-white shadow-lg hover:shadow-blue-500/30 transition-all duration-100 delay-100 md:w-fit">
                  <span>Verify Certificate</span>
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Recognition */}
      <div className="flex items-center gap-4 text-white/40 mt-15 w-fit cursor-default group">
        {/* logo */}
        < div className="shrink-0 border rounded-full w-10 h-10 flex items-center justify-center group-hover:text-blue-500 group-hover:border-blue-500/70 transition-colors duration-300" >
          <FaMedal className="text-lg" />
        </div >
        {/* Paragraph */}
        <div className="uppercase flex flex-col tracking-widest">
          <span className="text-sm font-bold text-white/60">Recognition</span>
          <span className="text-xs">Verified digital credentials available</span>
        </div >
      </div >
    </div >
  );
}

export default Achievements;