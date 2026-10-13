import { useState, useEffect } from "react";
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
  const [closing, setClosing] = useState(false);

  // Reset closing state when a new item is selected
  useEffect(() => {
    if (selected) setClosing(false);
  }, [selected]);

  const handleClose = () => {
    setClosing(true);
  };

  // Image Carousel Component
  function ImageCarousel({ images, title }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (images.length <= 1) return;

      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <div className="relative">
        {/* Images */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} ${index + 1}`}
                className="w-full shrink-0 object-contain aspect-5/3"
              />
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 bg-blue-950">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`text-lg transition-colors duration-300 cursor-pointer ${current === index
                ? "text-blue-500"
                : "text-white/30"
                }`}
            >
              ●
            </button>
          ))}
        </div>

        {/* Left / Right buttons */}
        <button
          className="absolute top-1/2 left-1 text-white/80 backdrop-blur-md brightness-150 p-2 border border-blue-500/30 hover:border-blue-500/80 rounded-full -translate-y-1/2 cursor-pointer"
          onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}><FaChevronLeft size={10} color="grey" />
        </button>
        <button
          className="absolute top-1/2 right-1 text-white/80 backdrop-blur-md brightness-150 p-2 border border-blue-500/30 hover:border-blue-500/80 rounded-full -translate-y-1/2 cursor-pointer"
          onClick={() => setCurrent((prev) => (prev + 1) % images.length)}><FaChevronRight size={10} color="grey" />
        </button>

        {/* Total Image counts */}
        <div className="absolute bottom-0.5 right-5 px-4 py-0.5 text-xs font-medium text-gray-300 border border-blue-400/40 rounded-full bg-linear-to-b from-blue-500 via-blue-800 to-blue-950">
          {current + 1} / {project.images.length}
        </div>
      </div>
    );
  }

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
  }, [selected]);

  return (
    <div className="max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 p-4 md:p-6">

      <div className='absolute inset-0 overflow-hidden px-4 md:px-6 pointer-events-none z-0'>
        <div
          className='absolute -top-30 left-10 md:left-72 w-96 h-96 bg-linear-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse'
          style={{ transform: "translate(-1.48942px, 6.10778px) translateY(0px)", transition: "transform 0.3s ease-out", animationDelay: "0s" }}
        ></div>
        <div
          className='absolute top-1/2 -right-40 w-96 h-96 bg-linear-to-bl from-purple-500/30 to-pink-500/20 rounded-full blur-3xl animate-pulse'
          style={{ transform: "translate(0.893649px, -3.66467px) translateY(0px)", transition: "transform 0.3s ease-out", animationDelay: "1s" }}
        ></div>
        <div
          className='absolute bottom-0 left-1/2 w-96 h-96 bg-linear-to-t from-teal-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "2s" }}
        ></div>
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px]'></div>
      </div>

      {/* Selected Project (Modal) ===================================== */}
      {selected ? (
        <div
          className={`${closing ? "fade-zoomOut" : "fade-zoomIn"} pt-15 sm:pt-0`}
          onAnimationEnd={() => {
            if (closing) {
              setSelected(null);
              setClosing(false);
            }
          }}
        >
          <ScrollToTop />
          {/* Go Back */}
          <div
            className="w-fit text-blue-200 flex items-center gap-2 cursor-pointer bg-linear-to-r from-blue-900 to-blue-950 border border-blue-500/20 rounded-full px-3 py-1.5 shadow-md hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(100,100,200,0.25)] transition-colors duration-200 group mb-6 sticky top-15 sm:top-6 z-5"
            onClick={() => { handleClose(); }}
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Projects</span>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-10">
            {/* Left column */}
            <div className="text-white space-y-8">

              {/* Image Preview */}
              <div className="overflow-hidden w-full bg-neutral-900 border border-blue-500/60 rounded-xl">
                <ImageCarousel images={project.images} title={project.title} />
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
                <p className="text-white/80 whitespace-pre-line">{project.description}</p>
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
            <div className="text-white space-y-6 lg:sticky lg:top-15 lg:self-start">
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
                <div className="flex flex-col gap-4 text-sm font-medium text-white/80">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl} target="_blank"
                      className="border border-blue-600/50 bg-blue-700 rounded-xl py-3 flex items-center justify-center gap-2 group hover:bg-white transition-colors duration-300"
                    >
                      <FiExternalLink className="group-hover:text-blue-600" />
                      <span className=" group-hover:text-blue-600">Live Demo</span>
                    </a>
                  )}

                  <a
                    href={project.githubUrl} target="_blank"
                    className="border border-blue-600/50 bg-linear-to-b to-blue-700 from-blue-950 rounded-xl py-3 flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-950 hover:border-blue-600 hover:text-white transition-colors duration-300">
                    <FaGithub />
                    <span className="">Source Code</span>
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
          <div className="mt-15 sm:mt-5">
            {/* Dash */}
            <div
              className='hidden sm:inline-flex'>
              <span className='border-2 border-blue-300 h-0 w-20 rounded-full'></span>
            </div>

            {/* Projects heading */}
            <h1 className='text-5xl sm:text-7xl font-extrabold tracking-tight text-white mt-2 mb-5'>Projects</h1>
          </div>

          <p className="max-w-3xl text-white/60 mb-10 fade-left">
            Explore my projects focused on developing responsive, scalable, and high-performance full-stack web applications with the MERN stack, emphasizing clean UI, secure backend architecture, and seamless user experiences.
          </p>

          {/* Project's grid */}
          <div
            className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10'
          >
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => { setSelected(true); setProject(project) }}
                className="border border-blue-500/40 hover:border-blue-500 rounded-2xl bg-linear-to-b from-blue-950 to-blue-900 p-1 overflow-hidden group transition-colors duration-500 cursor-pointer card-up"
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
        </div>
      )}
    </div>
  );
}

export default Projects;
