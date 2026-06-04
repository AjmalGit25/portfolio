import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import App from './App.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Experience from './pages/Experience.jsx';
import Education from './pages/Education.jsx';
import Projects from './pages/Projects.jsx';
import Github from './pages/Github.jsx';
import Achievements from './pages/Achievements.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills /> },
      { path: "experience", element: <Experience /> },
      { path: "education", element: <Education /> },
      { path: "projects", element: <Projects /> },
      { path: "github", element: <Github /> },
      { path: "achievements", element: <Achievements /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }                // Handles unknown routes inside React
    ]
  },
]);


// Setup Router in main.jsx         // ✅ Modern Way (Recommended Today)
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);