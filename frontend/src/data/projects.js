import easylayzee1 from "../assets/projects/easylayzee/easylayzee1.jpeg";
import easylayzee2 from "../assets/projects/easylayzee/easylayzee2.jpeg";
import easylayzee3 from "../assets/projects/easylayzee/easylayzee3.jpeg";

import portfolio_b from "../assets/projects/portfolio/Profile and Blue Theme.png";
import portfolio_g from "../assets/projects/portfolio/Profile and Green Theme.png";

import skillharbor1 from "../assets/projects/skillharbor/skillharbor1.jpeg";
import skillharbor2 from "../assets/projects/skillharbor/skillharbor2.jpeg";
import skillharbor3 from "../assets/projects/skillharbor/skillharbor3.jpeg";

import smartdoc1 from "../assets/projects/smartdoc/smartdoc1.jpeg";
import smartdoc2 from "../assets/projects/smartdoc/smartdoc2.jpeg";
import smartdoc3 from "../assets/projects/smartdoc/smartdoc3.jpeg";
import smartdoc4 from "../assets/projects/smartdoc/smartdoc4.jpeg";
import smartdoc5 from "../assets/projects/smartdoc/smartdoc5.jpeg";
import smartdoc6 from "../assets/projects/smartdoc/smartdoc6.jpeg";
import smartdoc7 from "../assets/projects/smartdoc/smartdoc7.jpeg";
import smartdoc8 from "../assets/projects/smartdoc/smartdoc8.jpeg";

import smartpark1 from "../assets/projects/smartpark/smartpark1.jpeg";
import smartpark2 from "../assets/projects/smartpark/smartpark2.jpeg";
import smartpark3 from "../assets/projects/smartpark/smartpark3.jpeg";
import smartpark4 from "../assets/projects/smartpark/smartpark4.jpeg";

const projects = [
  {
    id: 1,
    title: "My Personal Portfolio",
    description:
      "A modern, fully responsive developer portfolio built with React, Vite, and Tailwind CSS to showcase my projects, technical skills, certifications, achievements, coding progress, and contact information. Designed with a strong focus on clean UI, performance, accessibility, and SEO.",

    images: [portfolio_b, portfolio_g],

    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
      "Vercel",
      "SEO",
      "Google Search Console",
      "GitHub API"
    ],

    liveUrl: "https://ajmal-hussain.vercel.app",
    githubUrl: "https://github.com/AjmalGit25/portfolio.git",

    highlights: [
      "Modern responsive UI with Tailwind CSS",
      "Dynamic GitHub & LeetCode statistics integration",
      "Blue and Green themes switching",
      "SEO-friendly deployment on Vercel"
    ],

    date: "2026",
    type: "Personal Portfolio",
    status: "Actively Maintained",

    features: [
      "Fully responsive design across all devices",
      "Built-in blue and emerald themes switching",
      "Interactive project showcase with image gallery",
      "GitHub API integration for live repository statistics",
      "Automatic LeetCode problem count updates",
      "Certificate showcase with verification link",
      "SEO optimization with sitemap and metadata",
      "Smooth animations and modern UI components"
    ],

    challengesAndSolutions:
      "Building reusable UI components while maintaining responsiveness across different screen sizes was one of the biggest challenges. I solved issues related to responsive navigation, modal behavior, and state management by creating reusable React components and refining layouts with Tailwind CSS. I also integrated the GitHub API to display live repository data and optimized the application using lazy loading and code splitting for faster page loads.",

    technicalArchitecture:
      "Built as a frontend-only single-page application using React and Vite, with Tailwind CSS for utility-first styling. The portfolio uses component-based architecture and client-side navigation and custom CSS enables runtime theme switching. The portfolio is deployed on Vercel. SEO enhancements include optimized metadata, sitemap generation, and Google Search Console integration to improve discoverability."
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
      "Product catalog with category filtering and search",
      "Shopping cart and checkout workflow",
      "Order placement and order history",
      "Admin product, order, and user management",
      "Image upload and management with Cloudinary",
      "Responsive UI built with Tailwind CSS",
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
    id: 4,
    title: "SmartDoc",

    description:
      "SmartDoc is a full-stack MERN healthcare appointment management system designed to streamline doctor-patient interactions. It enables patients to book appointments efficiently while providing doctors with intelligent scheduling and queue management to reduce waiting times and improve healthcare operations.",

    images: [
      smartdoc1,
      smartdoc2,
      smartdoc3,
      smartdoc4,
      smartdoc5,
      smartdoc6,
      smartdoc7,
      smartdoc8
    ],

    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "REST API",
      "Axios"
    ],

    liveUrl: "#",
    githubUrl: "https://github.com/AjmalGit25/SmartDoc.git",

    highlights: [
      "Intelligent appointment scheduling",
      "Doctor-patient queue management",
      "Built during Craftathon Hackathon",
      "Complete MERN stack architecture"
    ],

    date: "2026",
    type: "Full-Stack MERN Application",
    status: "Hackathon Project",

    features: [
      "Patient registration and authentication",
      "Doctor authentication and dashboard",
      "Online appointment booking",
      "Smart queue management system",
      "Appointment scheduling and tracking",
      "Doctor availability management",
      "Responsive UI with Tailwind CSS",
      "RESTful API integration with Axios"
    ],

    challengesAndSolutions:
      "Designing an efficient appointment workflow while minimizing patient waiting time was the primary challenge. I structured the application around separate doctor and patient experiences, implemented appointment scheduling and queue management logic, and built reusable React components to keep the interface clean and responsive. Developing both the frontend and backend during a hackathon strengthened my understanding of rapid full-stack development, RESTful API integration, and scalable application architecture.",

    technicalArchitecture:
      "Built using the MERN stack with React and Vite for the frontend, Express.js and Node.js for the backend, and MongoDB for persistent data storage. The application follows a RESTful API architecture for managing authentication, appointments, doctors, and patients. Tailwind CSS provides a responsive, utility-first interface, while Axios handles communication between the frontend and backend."
  },
  {
    id: 5,
    title: "Smart Parking Solution",

    description:
      "A full-stack MERN application for hassle-free, smart vehicle parking management. Users can browse real-time parking slot availability, book slots, check out with auto-calculated fees, and manage their bookings — while admins get a full dashboard with revenue stats and booking oversight.",

    images: [smartpark1, smartpark2, smartpark3, smartpark4],

    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Axios"
    ],

    liveUrl: "#",
    githubUrl: "https://github.com/AjmalGit25/smart-parking-solution.git",

    highlights: [
      "Dashboard to populate 20 slots across 2 floors",
      "Visual floor-by-floor parking map",
      "VibeCriminals Hackathon project"
    ],

    date: "2026",
    type: "Full-Stack Application",
    status: "Hackathon",

    features: [
      "Visual floor-by-floor parking map with live slot status (available / occupied / reserved)",
      "One-click booking with vehicle number registration",
      "Automatic hourly fee calculation on checkout ($50/hour, minimum 1 hour)",
      "Role-based access: regular users manage their own bookings; admins oversee everything",
      "Secure JWT authentication with bcrypt password hashing"
    ],

    challengesAndSolutions:
      "Urban parking is chaotic. Drivers waste time circling lots looking for free spaces, there's no visibility into availability, and manual management is error-prone. This system solves that with a digital, real-time slot management platform accessible from any browser.",

    technicalArchitecture:
      "Built with the MERN stack using React and Vite for the frontend, Express.js and Node.js for the backend, and MongoDB for persistent data storage. Secure JWT authentication with bcrypt password hashing, JWTs expire after 7 days, while Tailwind CSS provides a responsive user interface."
  },
];

export default projects;