export const generateResponse = (input) => {
  const query = input.toLowerCase();

  if (
    query.includes("skill") ||
    query.includes("technology") ||
    query.includes("stack")
  ) {
    return `Ajmal's primary stack includes React, Node.js, Express, MongoDB, TypeScript, Next.js, PostgreSQL and Prisma.`;
  }

  if (
    query.includes("project") ||
    query.includes("projects")
  ) {
    return `Ajmal has worked on projects including LOOP, a customer feedback intelligence SaaS, and EASYLAYZEE, a MERN-stack e-commerce application.`;
  }

  if (
    query.includes("education") ||
    query.includes("degree")
  ) {
    return `Ajmal is a final-year B.Sc IT student at Rai University, Ahmedabad.`;
  }

  if (
    query.includes("certificate") ||
    query.includes("certification")
  ) {
    return `Ajmal has certifications in DSA with C++, Node.js, SQL, Generative AI, Power BI, Figma UI/UX and more.`;
  }

  if (
    query.includes("experience") ||
    query.includes("work")
  ) {
    return `Ajmal has experience in full-stack development, with a focus on building scalable web applications using modern technologies.`;
  }

  if (
    query.includes("github")
  ) {
    return `You can explore Ajmal's development work through his GitHub projects.`;
  }

  return `I'm Ajmal's portfolio assistant. You can ask me about his skills, projects, education, certifications, internships, or experience.`;
};


// Intents based =======================================

// const intents = [
//   {
//     keywords: ["skill", "skills", "technology", "technologies", "stack"],
//     response:
//       "Ajmal's primary stack includes React, Node.js, Express, MongoDB, TypeScript, Next.js, PostgreSQL and Prisma."
//   },
//   {
//     keywords: ["project", "projects", "built", "build"],
//     response:
//       "Ajmal has worked on projects including LOOP and EASYLAYZEE."
//   },
//   {
//     keywords: ["education", "degree", "university", "college"],
//     response:
//       "Ajmal is a final-year B.Sc IT student at Rai University."
//   }
// ];

// const matched = intents.keywords.some(keyword =>
//   query.includes(keyword)
// );

// const generateResponse = (input) => {
//   const query = input.toLowerCase();

//   const intent = intents.find(intent =>
//     intent.keywords.some(keyword =>
//       query.includes(keyword)
//     )
//   );

//   return intent
//     ? intent.response
//     : "I'm Ajmal's portfolio assistant. Ask me about his skills, projects, education, or certifications.";
// };