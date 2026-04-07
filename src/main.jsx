import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

import App from './App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Github from './components/Github.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import NotFound from './components/NotFound.jsx';

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
      { path: "*", element: <NotFound /> }
    ]
  },
]);


// Setup Router in main.jsx         // ✅ Modern Way (Recommended Today)
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);