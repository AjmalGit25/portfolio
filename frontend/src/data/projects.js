import portfolio_b from "../assets/projects/portfolio/Profile and Blue Theme.png";
import portfolio_g from "../assets/projects/portfolio/Profile and Green Theme.png";

import easylayzee1 from "../assets/projects/easylayzee/easylayzee1.jpeg";
import easylayzee2 from "../assets/projects/easylayzee/easylayzee2.jpeg";
import easylayzee3 from "../assets/projects/easylayzee/easylayzee3.jpeg";

import skillharbor1 from "../assets/projects/skillharbor/skillharbor1.jpeg";
import skillharbor2 from "../assets/projects/skillharbor/skillharbor2.jpeg";
import skillharbor3 from "../assets/projects/skillharbor/skillharbor3.jpeg";

import smartdoc1 from "../assets/projects/smartdoc/smartdoc1.jpeg";
import smartdoc2 from "../assets/projects/smartdoc/smartdoc2.jpeg";
import smartdoc3 from "../assets/projects/smartdoc/smartdoc3.jpeg";

import loop1 from "../assets/projects/loop/loop1.jpg";
import loop2 from "../assets/projects/loop/loop2.jpg";
import loop3 from "../assets/projects/loop/loop3.jpg";

const projects = [
  {
    id: 4,
    title: "Project LOOP — AI Customer Feedback Intelligence Platform",

    description:
      "Project LOOP is an AI-powered customer feedback intelligence platform that enables businesses to collect, organize, and analyze customer feedback from multiple channels in one centralized system. Leveraging advanced AI capabilities, it automatically classifies sentiment, identifies recurring themes, detects emerging trends, and generates actionable insights to help organizations understand customer needs more effectively.\n\nBuilt as a secure, multi-tenant SaaS application, the platform features role-based access control, interactive analytics dashboards, AI-powered question answering, and automated Voice-of-Customer reports. Project LOOP empowers product, support, and leadership teams to make faster, data-driven decisions by transforming raw customer feedback into meaningful business intelligence.",

    images: [loop1, loop2, loop3],

    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Claude AI",
      "NextAuth",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Zod",
      "Recharts",
      "Vercel"
    ],

    liveUrl: "https://loop-azure-two.vercel.app/",
    githubUrl: "https://github.com/AjmalGit25/LOOP",

    highlights: [
      "AI-powered customer feedback classification and analysis",
      "Multi-tenant SaaS architecture with role-based access control",
      "Semantic feedback search and AI-powered question answering",
      "Automated Voice-of-Customer reports and trend insights"
    ],

    date: "2026",
    type: "AI-Powered Full-Stack SaaS Application",
    status: "Completed",

    features: [
      "Multi-tenant workspace and organization management",
      "User authentication and role-based access control",
      "Customer feedback collection and centralized management",
      "AI-powered sentiment classification",
      "Automatic feedback theme clustering",
      "Trend analysis and emerging issue detection",
      "Interactive analytics and feedback dashboards",
      "Semantic search using embeddings",
      "AI-powered question answering with grounded feedback retrieval",
      "Automated Voice-of-Customer report generation",
      "Feedback ingestion and data processing pipeline",
      "Responsive interface built with React and Tailwind CSS"
    ],

    challengesAndSolutions:
      "One of the main challenges was transforming large amounts of unstructured customer feedback into useful and reliable insights. I addressed this by building an AI-powered processing pipeline for sentiment classification, theme identification, trend detection, and semantic retrieval. Another challenge was ensuring that AI-generated answers remained grounded in the actual feedback data, which was handled through embedding-based retrieval before generating responses. I also implemented multi-tenant data isolation and role-based access control to ensure that users could securely access only the data belonging to their organization.",

    technicalArchitecture:
      "Project LOOP follows a full-stack SaaS architecture with React and Vite on the frontend and Node.js with Express.js on the backend. MongoDB is used for persistent storage of organizations, users, feedback, themes, analytics, and generated reports. JWT-based authentication and role-based authorization secure the application and maintain tenant-level data isolation. The AI pipeline processes incoming feedback for sentiment, theme, and trend analysis, while embeddings enable semantic retrieval for the AI question-answering system. Automated Voice-of-Customer reports are generated from pre-computed analytics and AI-generated narratives. The frontend is deployed on Vercel and the backend is hosted on Render."
  },
  {
    id: 2,
    title: "EasyLayzee",

    description:
      "EasyLayzee is a full-stack MERN e-commerce application for browsing and purchasing snack products. It features dedicated user and admin experiences, secure authentication, product management, shopping cart, order processing, and a responsive interface, providing a complete end-to-end online shopping experience.",

    images: [easylayzee1, easylayzee2, easylayzee3],

    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "REST API",
      "Axios",
      "Multer",
      "Cloudinary",
      "Swiper",
      "Render",
      "Vercel"
    ],

    liveUrl: "https://easylayzee.vercel.app",
    githubUrl: "https://github.com/AjmalGit25/EASYLAYZEE",

    highlights: [
      "Complete MERN stack architecture",
      "Separate user and admin dashboards",
      "Secure JWT cookie-based authentication",
      "Responsive e-commerce experience"
    ],

    date: "2026",
    type: "Full-Stack MERN Application",
    status: "Actively Developed",

    features: [
      "Role-based user and admin authentication",
      "JWT authentication with secure HttpOnly cookies",
      "Order placement and order history",
      "Admin product, order, and user management",
      "Interactive product carousel using Swiper",
      "Real-time toast notifications for user feedback",
      "RESTful API integration using Axios"
    ],

    challengesAndSolutions:
      "Developing separate user and admin workflows while maintaining a clean project structure was one of the primary challenges. I implemented dedicated React Context providers for authentication and state management, adopted secure JWT authentication with HttpOnly cookies, and designed reusable components to reduce duplication. Building responsive layouts, handling asynchronous API requests, and synchronizing frontend state with backend data helped strengthen my understanding of full-stack application development and scalable React architecture.",

    technicalArchitecture:
      "Built using the MERN stack with React and Vite for the frontend, Express.js and Node.js for the backend, and MongoDB for data persistence. The application follows a RESTful API architecture and uses JWT-based authentication stored in HttpOnly cookies for enhanced security. Tailwind CSS provides a responsive, utility-first UI, while Axios manages API communication. Images are stored using Cloudinary, with the frontend deployed on Vercel and the backend deployed on Render."
  },
  {
    id: 3,
    title: "SkillHarbor",

    description:
      "SkillHarbor is a full-stack MERN course marketplace where users can explore, purchase, and access online courses, while administrators can create, update, and manage course content through a dedicated admin interface.",

    images: [skillharbor1, skillharbor2, skillharbor3],

    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "LocalStorage",
      "Axios",
      "Multer",
      "Cloudinary",
      "Stripe",
      "Swiper",
      "Render",
      "Vercel"
    ],

    liveUrl: "https://skill-harbor-psi.vercel.app",
    githubUrl: "https://github.com/AjmalGit25/SkillHarbor.git",

    highlights: [
      "Complete MERN course marketplace",
      "Separate user and admin workflows",
      "Course management dashboard",
      "Integrated online payment workflow"
    ],

    date: "2026",
    type: "Full-Stack MERN Application",
    status: "Completed",

    features: [
      "User registration and authentication",
      "JWT authentication using LocalStorage",
      "Browse and purchase online courses",
      "Stripe payment gateway integration",
      "Admin dashboard for course management",
      "Create, update, and delete courses",
      "Responsive UI with Tailwind CSS",
      "Interactive course carousel using Swiper"
    ],

    challengesAndSolutions:
      "One of the primary challenges was implementing authentication and role-based access for both users and administrators without using React Context. I managed authentication state using JWT tokens stored in LocalStorage and protected frontend routes based on user roles. Building CRUD operations for course management, integrating Stripe payments, and coordinating frontend and backend communication helped strengthen my understanding of full-stack application development.",

    technicalArchitecture:
      "Built with the MERN stack using React and Vite for the frontend, Express.js and Node.js for the backend, and MongoDB for persistent data storage. JWT-based authentication is implemented using LocalStorage, while Tailwind CSS provides a responsive user interface. Stripe handles secure payment processing, with the frontend deployed on Vercel and the backend hosted on Render."
  },
  {
    id: 1,
    title: "My Personal Portfolio",
    description:
      "A modern, Full Stack MERN Portfolio built with React, Vite, Node.js/Express, MongoDB and Tailwind CSS to showcase my projects, technical skills, certifications, achievements, coding progress, and contact information. Designed with a strong focus on clean UI, performance, accessibility, and SEO.",

    images: [portfolio_b, portfolio_g],

    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "Zod",
      "REST API",
      "GitHub API",
      "LLM API",
      "Google Gemini API",
      "gemini-3.5-flash",
      "React Markdown",
      "ipinfo",
      "Resend",
      "Vercel",
      "SEO",
      "Google Search Console",
    ],

    liveUrl: "https://ajmal-hussain.vercel.app",
    githubUrl: "https://github.com/AjmalGit25/portfolio.git",

    highlights: [
      "Fully Responsive UI Design",
      "Full Stack Portfolio with MERN",
      "Real-time GitHub & LeetCode statistics data",
      "Blue and Emerald UI Themes",
      "AI Chatbot",
    ],

    date: "2026",
    type: "Personal Portfolio",
    status: "Actively Maintained",

    features: [
      "Fully responsive design across all devices",
      "AI powered Chatbot with Google Gemini",
      "Blue 🔵 and Emerald 🟢 vibrant themes",
      "Animations — Scroll-reveal, Enterance, Counter",
    ],

    challengesAndSolutions:
      "Maintaining responsiveness across different screen sizes was one of the major challenges, which I addressed using Tailwind CSS utility classes and responsive design practices. Tracking unique visitors was another challenge, so I implemented device-based unique IDs and stored visitor records in MongoDB. Currently, improving chatbot response speed remains an ongoing focus, with RAG implementation being explored to improve response efficiency and relevance.",

    technicalArchitecture:
      "Built as a full-stack MERN application with React and Vite on the frontend and Node.js, Express.js, and MongoDB on the backend. The application follows a component-based architecture with reusable UI components, client-side routing, responsive Tailwind CSS styling, and custom CSS for theme management & animations. The backend provides REST APIs for features such as visitor analytics, contact functionality, and the AI-powered chatbot, with MongoDB used for persistent data storage. The chatbot integrates an LLM API for intelligent responses, while additional services support visitor metadata, email notifications, and analytics. The application is deployed using Vercel for the frontend and Render for backend services, with SEO enhancements including optimized metadata, sitemap generation, and Google Search Console integration."
  }
];

export default projects;