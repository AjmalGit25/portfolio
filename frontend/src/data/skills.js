import { SiReact, SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiGit, SiGithub, SiVercel, SiRender, SiNetlify, SiPostman, SiFigma, SiPython, SiPhp, SiDocker, SiRedux, SiMysql, SiNextdotjs, SiRedis, SiFirebase, SiPrisma, SiGooglegemini, SiWebrtc } from "react-icons/si";
import { FaNodeJs, FaLinux, FaJava, FaAws, FaDatabase, FaBrain } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { BsBarChartFill, BsDiagram3Fill, BsOpenai, BsClaude, } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";

const coreStack = {
  frontEnd: [
    {
      title: "React",
      icon: SiReact,
      iconColor: "text-cyan-300",
      glowColor: "rgba(97, 218, 251, 0.125)"
    },
    {
      title: "Tailwind CSS",
      icon: SiTailwindcss,
      iconColor: "text-sky-400",
      glowColor: "rgba(97, 218, 251, 0.125)"
    },
  ],

  backEnd: [
    {
      title: "Node.js",
      icon: FaNodeJs,
      iconColor: "text-green-500",
      glowColor: "rgba(97, 218, 90, 0.125)"
    },
    {
      title: "Express",
      icon: SiExpress,
      iconColor: "text-white",
      glowColor: "rgba(197, 218, 251, 0.125)"
    },
  ],

  databases: [
    {
      title: "MongoDB",
      icon: SiMongodb,
      iconColor: "text-green-400",
      glowColor: "rgba(77, 218, 51, 0.125)"
    },
    {
      title: "MySQL",
      icon: SiMysql,
      iconColor: "text-sky-600",
      glowColor: "rgba(63, 152, 255, 0.125)"
    },
    {
      title: "Oracle",
      icon: GrOracle,
      iconColor: "text-orange-600",
      glowColor: "rgba(237, 28, 51, 0.125)"
    },
  ],

  languages: [
    {
      title: "JavaScript",
      icon: SiJavascript,
      iconColor: "text-yellow-500",
      glowColor: "rgba(157, 118, 11, 0.325)"
    },
    {
      title: "TypeScript",
      icon: SiTypescript,
      iconColor: "text-sky-500",
      glowColor: "rgba(10, 100, 200, 0.325)"
    },
    {
      title: "C++",
      icon: SiCplusplus,
      iconColor: "text-indigo-400",
      glowColor: "rgba(137, 118, 251, 0.225)"
    }
  ],
};

const cloudAndDevOps = [
  {
    title: "Git",
    icon: SiGit,
    iconColor: "text-orange-600",
    glowColor: "rgba(237, 28, 51, 0.225)"
  },
  {
    title: "Github",
    icon: SiGithub,
    iconColor: "text-white",
    glowColor: "rgba(237, 228, 251, 0.125)"
  },
  {
    title: "Vercel",
    icon: SiVercel,
    iconColor: "text-white",
    glowColor: "rgba(237, 228, 251, 0.225)"
  },
  {
    title: "Render",
    icon: SiRender,
    iconColor: "text-white",
    glowColor: "rgba(237, 228, 251, 0.225)"
  },
  {
    title: "Netlify",
    icon: SiNetlify,
    iconColor: "text-teal-500",
    glowColor: "rgba(23, 228, 221, 0.225)"
  },
];

const coreTools = [
  {
    title: "VSCode",
    icon: VscVscode,
    iconColor: "text-sky-500",
    glowColor: "rgba(57, 122, 251, 0.225)"
  },
  {
    title: "Postman",
    icon: SiPostman,
    iconColor: "text-orange-500",
    glowColor: "rgba(237, 78, 51, 0.325)"
  },
  {
    title: "Figma",
    icon: SiFigma,
    iconColor: "text-orange-800",
    glowColor: "rgba(220, 22, 55, 0.225)"
  },
];

const familiarSkills = [
  {
    title: "Java",
    icon: FaJava,
    iconColor: "text-red-500",
    glowColor: "rgba(255, 122, 151, 0.225)"
  },
  {
    title: "Python",
    icon: SiPython,
    iconColor: "text-sky-600",
    glowColor: "rgba(57, 78, 211, 0.325)"
  },
  {
    title: "Php",
    icon: SiPhp,
    iconColor: "text-indigo-500",
    glowColor: "rgba(225, 52, 85, 0.225)"
  },
  {
    title: "Linux",
    icon: FaLinux,
    iconColor: "text-gay-900",
    glowColor: "rgba(0, 0, 0, 0.225)"
  },
  {
    title: "PowerBI",
    icon: BsBarChartFill,
    iconColor: "text-yellow-500",
    glowColor: "rgba(107, 108, 11, 0.225)"
  },
];

const exploringSkills = [
  {
    title: "Next.js",
    icon: SiNextdotjs,
    iconColor: "text-white",
    glowColor: "rgba(220, 222, 221, 0.225)"
  },
  {
    title: "OpenAI",
    icon: BsOpenai,
    iconColor: "text-white",
    glowColor: "rgba(220, 222, 221, 0.225)"
  },
  {
    title: "Claude",
    icon: BsClaude,
    iconColor: "text-amber-600",
    glowColor: "rgba(250, 100, 100, 0.225)"
  },
  {
    title: "Google Gemini",
    icon: SiGooglegemini,
    iconColor: "text-blue-600",
    glowColor: "rgba(20, 10, 200, 0.225)"
  },
  {
    title: "PostgreSQL",
    icon: BiLogoPostgresql,
    iconColor: "text-sky-600",
    glowColor: "rgba(80, 100, 250, 0.225)"
  },
  {
    title: "Prisma",
    icon: SiPrisma,
    iconColor: "text-purple-600",
    glowColor: "rgba(250, 120, 240, 0.225)"
  },
  {
    title: "Vector DB",
    icon: FaBrain,
    iconColor: "text-orange-500",
    glowColor: "rgba(250, 100, 110, 0.225)"
  },
  {
    title: "RAG",
    icon: FaDatabase,
    iconColor: "text-emerald-500",
    glowColor: "rgba(50, 220, 20, 0.225)"
  },
  {
    title: "WebRTC",
    icon: SiWebrtc,
    iconColor: "text-amber-100",
    glowColor: "rgba(225, 222, 215, 0.225)"
  },
  {
    title: "AWS",
    icon: FaAws,
    iconColor: "text-amber-500",
    glowColor: "rgba(200, 200, 28, 0.225)"
  },
]

export {
  coreStack,
  cloudAndDevOps,
  coreTools,
  familiarSkills,
  exploringSkills
}