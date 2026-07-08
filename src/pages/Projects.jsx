import { useState } from "react";
import Footer from "../components/Footer.jsx";
import projects from '../data/projects.js';
import {
  FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight, FaRegClock, FaUserCog, FaGithub
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { LuUserCog } from "react-icons/lu";
import { RiCalendarLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop.jsx";

function Projects() {
  const [selected, setSelected] = useState(null);
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage(prev =>
      (prev + 1) % project.images.length
    );
  };

  const previousImage = () => {
    setSelectedImage(prev =>
      (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 p-4 md:p-6">

      {/* Selected Page ===================================================== */}
      {selected ? (
        <div
          className="pt-15 sm:pt-5 mb-6"
        >
          <ScrollToTop />
          {/* Go Back */}
          <div
            className="w-fit text-blue-200 flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors duration-200 group mb-6"
            onClick={() => setSelected(null)}
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Projects</span>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-10">
            {/* Left column */}
            <div className="text-white space-y-8">

              {/* Image Preview */}
              <div className="w-full aspect-7/4 bg-neutral-900 border border-blue-500/60 rounded-xl relative">
                <img
                  src={project.images[selectedImage]}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />

                {/* Left / Right buttons */}
                <button
                  className="absolute top-1/2 left-1 text-white/80 backdrop-blur-md brightness-150 p-2 border border-blue-500/30 hover:border-blue-500/80 rounded-full -translate-y-1/2 cursor-pointer"
                  onClick={previousImage}><FaChevronLeft size={10} color="grey" />
                </button>
                <button
                  className="absolute top-1/2 right-1 text-white/80 backdrop-blur-md brightness-150 p-2 border border-blue-500/30 hover:border-blue-500/80 rounded-full -translate-y-1/2 cursor-pointer"
                  onClick={nextImage}><FaChevronRight size={10} color="grey" />
                </button>

                {/* Total Image counts */}
                <div className="absolute bottom-4 right-4 text-white/80 text-xs backdrop-blur-md brightness-150 px-3 py-2 rounded-full bg-black">
                  {selectedImage + 1} / {project.images.length}
                </div>
              </div>

              {/* Title */}
              <div className="text-white">
                <h1 className="text-3xl md:text-5xl font-black">{project.title}</h1>
              </div>

              {/* Date, Type, Status */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1">
                  <RiCalendarLine size={12} className="text-blue-500" />
                  <span className="text-xs text-white/80">{project.date}</span>
                </div>

                <div className="flex items-center gap-1">
                  <FaUserCog size={12} className="text-blue-500" />
                  <span className="text-xs text-white/80">{project.type}</span>
                </div>

                <div className="flex items-center gap-1">
                  <FaRegClock size={12} className="text-blue-500" />
                  <span className="text-xs text-white/80">{project.status}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold">Project Overview</h3>
                <p className="text-white/80">{project.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold">Key Features</h3>
                <ul className="text-white/80 grid grid-cols-1 md:grid-cols-2 gap-2 pl-6">
                  {project.features.map((feature, index) => (
                    <li className="flex items-center gap-2">
                      <span className='h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0'></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold">Challenges & Solutions</h3>
                <p className="text-white/80">{project.challengesAndSolutions}</p>
              </div>

              {/* Technical Architecture */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold">Technical Architecture</h3>
                <p className="text-white/80">{project.technicalArchitecture}</p>
              </div>
            </div>

            {/* Right column */}
            <div className="text-white space-y-6">
              {/* Technologies (Tags) */}
              <div className="border border-blue-500/60 bg-blue-950/50 rounded-xl p-5">
                <h3 className="text-lg md:text-2xl font-bold mb-6">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      className="text-white/80 border border-blue-600/50 bg-blue-600/30 rounded-lg px-3 py-1.5 text-xs"
                      key={index}>{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="border border-blue-500/60 bg-blue-950/50 rounded-xl p-5">
                <h3 className="text-lg md:text-2xl font-bold mb-6">Project Links</h3>
                <div className="flex flex-col gap-4">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl} target="_blank"
                      className="border border-blue-600/50 bg-blue-700 rounded-xl py-3 flex items-center justify-center gap-2 group hover:bg-white  transition-colors duration-200"
                    >
                      <FiExternalLink className="group-hover:text-blue-600"/>
                      <span className="text-lg font-medium text-white/80 group-hover:text-blue-600">Live Demo</span>
                    </a>
                  )}

                  <a
                    href={project.githubUrl} target="_blank"
                    className="border border-blue-600/50 bg-linear-to-b to-blue-700 from-blue-950 rounded-xl py-3 flex items-center justify-center gap-2 hover:from-blue-800 hover:to-blue-950 hover:border-blue-600 transition-colors duration-300">
                    <FaGithub />
                    <span className="text-lg font-medium text-white/80">Source Code</span>
                  </a>
                </div>
              </div>

              {/* Highlights */}
              <div className="border border-blue-500/60 bg-blue-950/50 rounded-xl p-5">
                <h3 className="text-lg md:text-2xl font-bold mb-6">Key Highlights</h3>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="text-white/80 italic text-[11px] sm:text-sm"
                    >
                      <span className="mr-2 text-blue-500">#</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      ) : (
        <div className="space-y-2">

          {/* Dash */}
          <div
            className='inline-flex mt-10'>
            <span className='border-2 border-blue-300 h-0 w-20 rounded-full'></span>
          </div>

          {/* Projects heading */}
          <h1 className='text-5xl sm:text-7xl font-extrabold tracking-tight text-white mt-2 mb-5'>Projects</h1>

          <p className="max-w-3xl text-white/60 mb-10">Explore my projects focused on developing responsive, scalable, and high-performance full-stack web applications with the MERN stack, emphasizing clean UI, secure backend architecture, and seamless user experiences.</p>

          {/* Project's container */}
          <div
            className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10'
          >
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => { setSelected(true); setProject(project) }}
                className="border border-blue-500/40 hover:border-blue-500 rounded-2xl bg-linear-to-b from-blue-950 to-blue-900 p-1 overflow-hidden group transition-colors duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="w-full aspect-4/2.5 bg-linear-to-l from-blue-700 to-blue-800 rounded-t-xl overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="object-contain group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Details */}
                <div className="p-4 text-sm space-y-5">
                  {/* Title */}
                  <div className="text-white/90 text-lg font-bold group-hover:text-blue-500 transition-colors duration-300">
                    <h1>{project.title}</h1>
                  </div>

                  {/* Description */}
                  <div className="text-white/60 line-clamp-3">
                    <p>{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="text-white/60 text-[11px] font-medium flex flex-wrap gap-3">

                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="border border-blue-600/40 bg-blue-600/20 rounded-lg px-3 py-1.5"
                      >{tag}
                      </span>
                    ))}

                    {project.tags.length > 3 && (
                      <span className="border border-blue-500 bg-blue-600/30 rounded-lg px-3 py-1.5">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* HR */}
                  <div className="w-full border-t border-blue-500/50"></div>

                  {/* Case Study */}
                  <div className="text-blue-500 flex items-center gap-2">
                    <h3 className="uppercase font-bold tracking-wider">View Case Study</h3>
                    <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Text =================================================== */}
          <Footer />
        </div>
      )}

    </div>
  );
}

export default Projects;
