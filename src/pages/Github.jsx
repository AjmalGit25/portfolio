import { GrLocation } from "react-icons/gr";
import { LuPhone, LuGlobe } from "react-icons/lu";
import { FiCalendar, FiExternalLink } from "react-icons/fi";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer.jsx";

import { useEffect, useState } from "react";

function Github() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/AjmalGit25/repos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // Ensure data is an array
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          console.error("GitHub API Error:", data);
          setRepos([]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (!repos) return <p>Loading...</p>;

  return (
    <div className="max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 p-4">
      {/* Dash */}
      <div
        className='inline-flex mt-10'>
        <span className='border-2 border-blue-300 h-0 w-20 rounded-full'></span>
      </div>

      {/* Intro Heading */}
      <div className='mex-w-5xl mt-2 space-y-5'>
        <h3 className='text-5xl sm:text-7xl font-extrabold tracking-tight text-white mt-2'>GitHub</h3>
        <p className='text-white/80 text-sm sm:text-lg'>Live account overview for Ajmal Hussain with public profile details and repositories.</p>
      </div>

      {/* Mini Profile Banner (Image, Name, Github's Link) */}
      <div className='bg-blue-950/20 shadow-sky-500/40 shadow-lg border border-blue-500/70 text-white p-4 md:p-5 rounded-xl mt-8 max-w-5xl'>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Github Profile Picture */}
            <img src="/Github's DP.jpg" alt="Github's Profile Picture"
              className='w-20 h-20 rounded-full object-contain border border-blue-500/50 self-center' />

            {/* Name-Info container */}
            <div className="space-y-3">
              {/* Name */}
              <div className='flex items-center gap-3'>
                <h3 className='text-lg sm:text-2xl font-bold uppercase'>Md Ajmal Hussain</h3>
                <span className='text-sm sm:text-base text-white/60'>@AjmalGit25</span>
              </div>

              {/* Info (left side) */}
              <div className="text-[13px] text-white/60 flex flex-wrap gap-3 md:justify-between">
                <div className="flex items-center gap-1">
                  <GrLocation />
                  <span>Ahmedabad, Gujarat</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiCalendar />
                  <span>Joined March 29, 2025</span>
                </div>
              </div>
            </div>

          </div>

          {/* Button (right side, link) */}
          <a href="https://github.com/AjmalGit25" target="_blank"
            className="flex items-center justify-center gap-2 p-2 bg-white text-black rounded-lg whitespace-nowrap hover:bg-white/90">
            <FaGithub />
            <span>Visit Profile</span>
          </a>
        </div>
      </div>

      {/* GitHub Status Heading (Text) */}
      <div className="inline-flex items-center gap-2 mt-10">
        <div className='h-1 w-8 bg-linear-to-l from-blue-700 to-blue-300 rounded-full'></div>
        <h3 className="text-white text-xl md:text-3xl font-bold">GitHub Status</h3>
      </div>

      {/* GitHub Status | Source: https://github.com/DenverCoder1/github-readme-streak-stats */}
      {/* 
          Themes: default, algolia, dark, radical, merko, github-dark-blue, tokyonight, onedark, cobalt, highcontrast, dracula, ...
          Background-color: hex code without #, css color, or gradient (in the form angle,start_color,...,end_color)
          Border-color: (border) hex code without #, css color, or gradient (in the form angle,start_color,...,end_color)
          Border-radius: (border_radius) number in pixels, Number 0 (sharp corners) to 248 (ellipse), Default is 4.5

      */}
      <div className="mt-5 w-full max-w-5xl">
        <picture>
          <source
            srcSet="https://streak-stats.demolab.com/?user=AjmalGit25&currStreakNum=00ff66&currStreakLabel=00ff66&fire=orange&ring=11aaff&sideLabels=11aaff&sideNums=white&stroke=white&dates=white&theme=cobalt&border_radius=10&border=0066ff&card_width=500" />
          <source
            srcSet="https://github-readme-stats.vercel.app/api?username=AjmalGit25&show_icons=true"
          />
          <img src="https://github-readme-stats.vercel.app/api?username=AjmalGit25&show_icons=true" />
        </picture>
      </div>

      {/* Top Repositories Heading */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 mt-10">
          <div className='h-1 w-8 bg-linear-to-l from-blue-700 to-blue-300 rounded-full'></div>
          <h3 className="text-white text-xl md:text-3xl font-bold">Top Repositories</h3>
        </div>
        <p className="text-white/60 text-sm sm:text-base">Showing public repositories.</p>
      </div>

      {/* GitHub Top Repo container */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
        {repos.map((repo) => (
          <article className="relative group bg-linear-to-r from-blue-900 to-blue-950 shadow-black shadow-sm hover:shadow-md hover:shadow-black/50 p-5 rounded-xl border border-blue-500/50 hover:-translate-y-1.5 hover:border-blue-500/80 transition-transform duration-300 delay-300"
            key={repo.id}>
            <div className="flex flex-col flex-wrap justify-between gap-5 h-full">
              {/* Upper part - Repo Name and Description */}
              <div>
                <h3 className="text-white/80 text-lg font-bold line-clamp-1 pr-8 group-hover:text-white">{repo.name}</h3>
                <p className="text-white/60 text-sm mt-1 line-clamp-3">{repo.description || "No description available"}</p>
              </div>

              {/* Lower part - Languages and Stars */}
              <div>
                <div className="flex flex-wrap gap-2 text-[10px] font-semibold">
                  <div className="bg-blue-500/20 border border-blue-500/50 px-2 py-1 rounded-lg flex items-center justify-center gap-1">
                    <span className="text-white">{repo.language || 'N/A'}</span>
                  </div>
                  <div className="bg-blue-500/20 border border-blue-500/50 px-2 py-1 rounded-lg flex items-center justify-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">{repo.stargazers_count}</span>
                  </div>
                  <div className="bg-blue-500/20 border border-blue-500/50 px-2 py-1 rounded-lg flex items-center justify-center gap-1">
                    <span className="text-white">Last update:</span>
                    <span className="text-yellow-400">{repo.updated_at}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Repo Link (absolute | top-6, right-6) */}
            <div className="absolute top-6 right-6">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
                className="text-blue-500 hover:text-white transition-colors duration-300"><FiExternalLink /></a>
            </div>
          </article>
        ))}
      </div>

      {/* Footer Text */}
      <Footer />

    </div >
  );
}



export default Github;
