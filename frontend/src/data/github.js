import { FiUsers, FiUserPlus } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { GoRepo } from "react-icons/go";

const githubRepo = [
  {
    id: 1,
    title: "AjmalGit25",
    description:
      "Welcome to my GitHub profile repository! Because this repository has the same name as my GitHub username, GitHub automatically displays it as my profile homepage. This repository serves as a central hub for showcasing my projects, contributions, and coding journey. Here, you'll find a collection of my work, including personal projects, and any other relevant code that reflects my skills and interests. Feel free to explore the different folders and files to get a better understanding of my coding abilities and the technologies I work with. I hope you find this repository informative and engaging!",
    languages: "unknown",
    stars: 0,
    url: "https://github.com/AjmalGit25/AjmalGit25",
  },
  {
    id: 2,
    title: "EasyLayzee",
    description:
      "A full-stack MERN e-commerce web application designed for browsing and purchasing snack products such as wafers and chips.",
    languages: "JavaScript",
    stars: 0,
    url: "https://github.com/AjmalGit25/EasyLayzee",
  },
  {
    id: 3,
    title: "LOOP",
    description:
      "A multi-tenant AI feedback-intelligence SaaS platform that transforms customer feedback into actionable insights.",
    languages: "TypeScript",
    stars: 0,
    url: "https://github.com/AjmalGit25/LOOP",
  },
  {
    id: 4,
    title: "C-C-Plus-Internship-CodVeda",
    description:
      "My Internship journey with CodVeda technology. Gained hands-on experience completing C++ projects, including game development, student-management system, and more.",
    languages: "C++",
    stars: 1,
    url: "https://github.com/AjmalGit25/C-C-Plus-Internship-CodVeda",
  },
  {
    id: 5,
    title: "SmartDoc",
    description:
      "To develop an intelligent appointment management system that optimizes scheduling, reduces patient waiting time, and improves overall operational efficiency in healthcare facilities.",
    languages: "JavaScript",
    stars: 1,
    url: "https://github.com/AjmalGit25/SmartDoc",
  },
  {
    id: 6,
    title: "SkillHarbor",
    description:
      "A MERN-based Full-stack course selling and buying application. It is a modern full-stack e-learning platform, where instructors sell knowledge and learners build skills. It is a MERN Stack project featuring with JWT authentication, course management, role-based access, payments, and responsive UI.",
    languages: "JavaScript",
    stars: 0,
    url: "https://github.com/AjmalGit25/SkillHarbor",
  },
];

const gitHubInfo = [
    {
      name: "Followers",
      icon: FiUsers,
      iconColor: "text-blue-500",
      count: 60,
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/50"
    },
    {
      name: "Following",
      icon: FiUserPlus,
      iconColor: "text-purple-400",
      count: 55,
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/50"
    },
    {
      name: "Public Repos",
      icon: GoRepo,
      iconColor: "text-teal-500",
      count: 18,
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

export { githubRepo, gitHubInfo };