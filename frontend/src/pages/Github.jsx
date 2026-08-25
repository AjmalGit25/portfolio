import { GrLocation } from "react-icons/gr";
import { LuPhone, LuGlobe } from "react-icons/lu";
import { FiCalendar, FiExternalLink, FiUsers, FiUserPlus } from "react-icons/fi";
import { FaGithub, FaTwitter, FaInstagram, FaRegStar } from "react-icons/fa";
import { GoRepo } from "react-icons/go";
import Footer from "../components/Footer.jsx";
import githubRepo from "../data/githubRepo.js";

import { useEffect, useState } from "react";

function Github() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/AjmalGit25"
        );

        const data = await response.json();

        // Store in state if needed
        setUser(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const gitHubInfo = [
    {
      name: "Followers",
      icon: FiUsers,
      iconColor: "text-blue-500",
      count: 53,
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/50"
    },
    {
      name: "Following",
      icon: FiUserPlus,
      iconColor: "text-purple-400",
      count: 56,
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/50"
    },
    {
      name: "Public Repos",
      icon: GoRepo,
      iconColor: "text-teal-500",
      count: 16,
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/50"
    },
    {
      name: "Stars",
      icon: FaRegStar,
      iconColor: "text-amber-500",
      count: 4,
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/50"
    }
  ];


  return (
    <div className="max-w-7xl sm:ml-20 md:ml-20 lg:ml-50 p-4 md:p-6">
      <div className="mt-15 sm:mt-5">
        {/* Dash */}
        <div
          className='hidden sm:inline-flex'>
          <span className='border-2 border-blue-300 h-0 w-20 rounded-full'></span>
        </div>

        {/* GitHub heading */}
        <h3 className='text-5xl sm:text-7xl font-extrabold tracking-tight text-white mt-2 mb-5'>GitHub</h3>
      </div>

      <p className='max-w-3xl text-white/60 mb-10 fade-left'>
        Just a glimpse of my work and contributions on GitHub, showcasing my coding skills and projects.
      </p>

      {/* Mini Profile Banner (Image, Name, Github's Link) */}
      <div className='bg-blue-950/20 shadow-[0_0_12px_rgba(50,120,250,0.8)] border border-blue-500/70 text-white p-4 md:p-5 rounded-xl mt-8 max-w-5xl fade-zoomIn'>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Github Profile Picture */}
            <img src="/profiles/github_dp.jpeg" alt="Github's Profile Picture"
              className='w-20 h-20 rounded-full object-contain border border-blue-500/50 self-center' />

            {/* Name-Info container */}
            <div className="space-y-3">
              {/* Name */}
              <div className='flex items-center gap-3'>
                <h3 className='text-lg sm:text-2xl font-bold uppercase'>Md Ajmal Hussain</h3>
                <span className='text-sm sm:text-base text-white/60'>@AjmalGit25</span>
              </div>

              {/* Info (left side) */}
              <div className="text-[13px] text-white/60 flex flex-wrap gap-5 md:justify-between">
                <div className="flex items-center gap-1">
                  <GrLocation />
                  <span>Ahmedabad, Gujarat</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiCalendar />
                  <span>Joined March 29, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiUsers />
                  <div className="flex items-center gap-1">
                    {loading ? <><div className="h-3 w-3 rounded-full border border-white border-t-transparent animate-spin"></div></> : <strong className="text-white/80">{user.followers}</strong>}
                    <span>Followers</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Button (right side, link) */}
          <a href="https://github.com/AjmalGit25" target="_blank"
            className="flex items-center justify-center gap-2 p-2 bg-white text-black rounded-lg whitespace-nowrap hover:bg-white/90">
            <FaGithub />
            <span className="font-semibold">Visit Profile</span>
          </a>
        </div>
      </div>

      {/* Basic Information */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-5xl mt-10 nav-slide-up">
        {gitHubInfo.map((item) => (
          <div
            key={item.name}
            className={`flex flex-col gap-1 p-4 border ${item.borderColor} ${item.bgColor} rounded-xl`}>
            <div className="flex items-center gap-1 text-sm">
              <item.icon size={15} className={`${item.iconColor}`} />
              <span className="text-white/80">{item.name}</span>
            </div>
            <span className="text-white font-bold text-2xl">{item.count}</span>
          </div>
        ))}
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
      <div className="space-y-5">
        <div className="inline-flex items-center gap-2 mt-10">
          <div className='h-1 w-8 bg-linear-to-l from-blue-700 to-blue-300 rounded-full'></div>
          <h3 className="text-white text-xl md:text-3xl font-bold">Top Repositories</h3>
        </div>
        <p className="text-white/80 text-sm sm:text-base">Showing Top 6 public repositories</p>
      </div>

      {/* GitHub Top Repo container */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
        {githubRepo.map((repo) => (
          <article className="relative group bg-linear-to-r from-blue-900 to-blue-950 shadow-black shadow-sm hover:shadow-md hover:shadow-black/50 p-5 rounded-xl border border-blue-500/50 hover:-translate-y-1.5 hover:border-blue-500/80 transition-transform duration-300 delay-300"
            key={repo.id}>
            <div className="flex flex-col flex-wrap justify-between gap-5 h-full">
              {/* Upper part - Repo Name and Description */}
              <div>
                <h3 className="text-white/80 text-lg font-bold line-clamp-1 pr-8 group-hover:text-white">{repo.title}</h3>
                <p className="text-white/60 text-sm mt-1 line-clamp-3">{repo.description || "No description available"}</p>
              </div>

              {/* Lower part - Languages and Stars */}
              <div>
                <div className="flex flex-wrap gap-2 text-[10px] font-semibold">
                  <div className="bg-blue-500/20 border border-blue-500/50 px-2 py-1 rounded-lg flex items-center justify-center gap-1">
                    <span className="text-white">{repo.languages || 'N/A'}</span>
                  </div>
                  <div className="bg-blue-500/20 border border-blue-500/50 px-2 py-1 rounded-lg flex items-center justify-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">{repo.stars}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Repo Link (absolute | top-6, right-6) */}
            <div className="absolute top-6 right-6">
              <a href={repo.url} target="_blank" rel="noopener noreferrer"
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
