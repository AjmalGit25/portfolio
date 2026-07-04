import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { PiMedal, PiMedalFill } from "react-icons/pi";
import { FaMedal } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FiExternalLink } from "react-icons/fi";

import { useState, useEffect } from "react";

import achievements from "../data/achievements.js";


function Achievements() {
  const [selected, setSelected] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
  }, [selected]);

  return (
    <div className="max-w-7xl sm:ml-20 md:ml-20 lg:ml-50  p-4 md:p-6">
      {/* Dash */}
      <div
        className='inline-flex mt-10'>
        <span className='border-2 border-blue-300 h-0 w-20 rounded-full'></span>
      </div>

      {/* Education heading */}
      <h1 className='text-5xl sm:text-7xl font-extrabold tracking-tight text-white mt-2 mb-5'>Achievements</h1>

      <p className="max-w-3xl text-white/60 mb-10">A curated collection of professional certifications and academic honors demonstrating technical mastery and a commitment to continuous growth. </p>

      {/* Cards container */}
      <div className="max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10">

          {/* Each Card Rendering */}
          {achievements.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className="relative overflow-hidden rounded-xl border border-blue-500/30 cursor-pointer aspect-[1/1.7] md:aspect-square group hover:shadow-lg hover:-translate-y-2 transition-all duration-300">

              {/* Noisy and Gradient style Background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-gray-900 to-gray-950"></div>
                <div className="absolute inset-0 bg-noise opacity-10"></div>
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px" }}>
                </div>
              </div>

              {/* Contents */}
              <div className="relative h-full flex flex-col items-center justify-center text-center p-3 gap-4">
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="h-14 w-14 bg-linear-to-l from-blue-500 to-blue-400 rounded-xl flex items-center justify-center">
                    <LuGraduationCap className="text-2xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight line-clamp-2 px-2">{item.title}</h3>
                  <p className="text-sm md:text-sm text-white/70 font-medium text-ellipsis line-clamp-1">{item.platform}</p>
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

              {/* Hover Effects - Crawler Up to Down */}
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
            className="fixed inset-0 z-20 flex items-center justify-center bg-black/80 backdrop-blur-lg overflow-hidden p-2 border-white"
            onClick={() => setSelected(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-blue-950/50 rounded-xl w-lg md:w-xl lg:w-2xl xl:w-4xl h-[70vh] md:h-[80vh] overflow-hidden border border-blue-500/50 relative"
            >
              <div className="h-full overflow-y-auto">

                {/* Close Button */}
                <button
                  className="absolute right-6 top-6 z-10 p-2.5 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-all backdrop-blur-md border border-blue-500/50"
                  onClick={() => setSelected(null)}
                >
                  <RxCross1 className="text-blue-400" />
                </button>

                {/* Image */}
                <div className="w-full bg-neutral-900 flex items-center justify-center overflow-hidden">
                  <img className="object-contain w-full aspect-4/3" src={selected.image} alt={selected.title} />
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
                    className="group flex items-center gap-4 justify-center text-black font-extrabold uppercase tracking-wider p-5 bg-blue-400 rounded-xl hover:bg-white shadow-lg hover:shadow-white/30 transition-all duration-100 delay-100 md:w-fit">
                    <span>Verify Certificate</span>
                    <FiExternalLink className="group-hover:translate-x-0.5 duration-200 transition-transform" />
                  </a>
                </div>
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
        </div>
        {/* Paragraph */}
        <div className="uppercase flex flex-col tracking-widest">
          <span className="text-sm font-bold text-white/60">Recognition</span>
          <span className="text-xs">Verified digital credentials available</span>
        </div>
      </div>

    </div>
  );
}

export default Achievements;