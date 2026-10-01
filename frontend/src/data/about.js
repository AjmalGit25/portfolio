import { SiLeetcode, SiUnstop, SiW3Schools, SiHackerrank, SiDiscord, SiWhatsapp, SiGeeksforgeeks } from "react-icons/si";
import { BiRun, BiPlay } from "react-icons/bi";
import { FaGithub, FaTwitter, FaLaptopCode, FaMouse, FaGlobe, FaEye, FaReddit } from "react-icons/fa";
import { FaLinkedin, FaCode } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

// Leetcode UI data
const leetCodeUIs = [
  {
    title: "Total",
    indicatorColor: "bg-blue-500",
    valueKey: "solvedProblem",
    borderColor: "border-blue-500/40",
    borderHoverColor: "hover:border-blue-500/80",
    bgColor: "bg-blue-700/20",
    bgHoverColor: "hover:bg-blue-700/30",
    status: "Problems",
  },
  {
    title: "Easy",
    indicatorColor: "bg-green-500",
    valueKey: "easySolved",
    borderColor: "border-white/10",
    borderHoverColor: "hover:border-green-500/50",
    bgColor: "bg-blue-800/10",
    bgHoverColor: "hover:bg-green-500/10",
    status: "Solved",
  },
  {
    title: "Medium",
    indicatorColor: "bg-amber-500",
    valueKey: "mediumSolved",
    borderColor: "border-white/10",
    borderHoverColor: "hover:border-yellow-500/50",
    bgColor: "bg-blue-800/10",
    bgHoverColor: "hover:bg-yellow-500/10",
    status: "Solved",
  },
  {
    title: "Hard",
    indicatorColor: "bg-red-500",
    valueKey: "hardSolved",
    borderColor: "border-white/10",
    borderHoverColor: "hover:border-red-500/50",
    bgColor: "bg-blue-800/10",
    bgHoverColor: "hover:bg-red-500/10",
    status: "Solved",
  },
];


// Coding Platforms
const codingPlatforms = [
  {
    title: "GitHub",
    icon: FaGithub,
    url: "https://github.com/AjmalGit25",
    bgColor: "bg-slate-950"
  },
  {
    title: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/AjmalAlgo",
    bgColor: "bg-orange-500"
  },
  {
    title: "GeeksforGeeks",
    icon: SiGeeksforgeeks,
    url: "https://www.geeksforgeeks.org/profile/ajmal786",
    bgColor: "bg-green-700"
  },
  {
    title: "unstop",
    icon: SiUnstop,
    url: "https://unstop.com/u/mdhus70693",
    bgColor: "bg-blue-500"
  },
  {
    title: "W3Schools",
    icon: SiW3Schools,
    url: "https://www.w3profile.com/AjmalW3",
    bgColor: "bg-green-500"
  },
  {
    title: "HackerRank",
    icon: SiHackerrank,
    url: "https://www.hackerrank.com/profile/ajmalashrafi2016",
    bgColor: "bg-emerald-600"
  },
];

// Social Platforms
const socialPlatforms = [
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/ajmal-hussain92",
  },
  {
    title: "Instagram",
    icon: AiFillInstagram,
    url: "https://www.instagram.com/asyncajmal",
  },
  {
    title: "Discord",
    icon: SiDiscord,
    url: "https://discord.com/users/1341100335086833725",
  },
  {
    title: "Reddit",
    icon: FaReddit,
    url: "https://www.reddit.com/user/ajmal62/",
  }
];

export {
  leetCodeUIs,
  codingPlatforms,
  socialPlatforms
};