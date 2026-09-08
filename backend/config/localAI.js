export const generateResponse = (input) => {
  const query = input.toLowerCase();

  if (
    query.includes("skill") || query.includes("learn") ||
    query.includes("tech") || query.includes("technology") ||
    query.includes("stack")
  ) {
    return `Ajmal's primary stack includes:

- **React.js**
- **Node.js**
- **Express**
- **MongoDB**
- **TypeScript**
- **MySQL**
- **Next.js**
- **PostgreSQL**
- **Prisma**

Additionally, he has experience with **Tailwind CSS**, **Bootstrap**, **Figma**, **Power BI**, and more.`;
  }

  if (
    query.includes("project") || query.includes("built")
  ) {
    return `Ajmal has worked on many Full-Stack projects including:
- **LOOP**: A multi-tenant AI feedback-intelligence SaaS platform, built with Next.js ecosystem,
- **EASYLAYZEE**: A Full-Stack MERN E-commerce application,
- **SkillHarbor**: *Learning Management System (LMS)*`;
  }

  if (
    query.includes("education") || query.includes("degree")
  ) {
    return `Ajmal is a final-year B.Sc IT student at Rai University, Ahmedabad.`;
  }

  if (
    query.includes("certificate") || query.includes("certification")
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
    query.includes("internship")
  ) {
    return `Ajmal has completed internships in full-stack development at **Codec Technologies**. He's recenetly doing 1-month internship at Zidio Development and currently working on a **Multi-tenant SaaS based Customer feedback AI intelligence system**`;
  }

  if (
    query.includes("git") || query.includes("github")
  ) {
    return `You can explore Ajmal's development work through his GitHub projects.`;
  }

  if (
    query.includes("strength") 
  ) {
    return `Ajmal's biggest strengths? He can work across the entire stack, writes clean and maintainable code, and picks up new tech super fast. He's genuinely passionate about solving real problems!`;
  }


  if (
    query.includes("farheen") || query.includes("love") || query.includes("relationship") || query.includes("romance")
  ) {
    return `Ajmal loves Farheen very much 💖. Ajmal Hussain will always cherish their bond. No day or night goes by without thinking of her.`;
  }

  if (
    query.includes("zoya") || query.includes("success") || query.includes("career")
  ) {
    return `Wherever Ajmal Hussain is today, it is because of Zoya. She has been a guiding light in his life, helping him navigate challenges and achieve success.`;
  }

  if (
    query.includes("pussy") || query.includes("fuck") || query.includes("fucking") || query.includes("fucker") ||
    query.includes("bitch") || query.includes("asshole") || query.includes("bastard") || query.includes("dick") ||
    query.includes("shit") || query.includes("slut") || query.includes("whore") || query.includes("prostitute")
  ) {
    return `Please keep the conversation respectful. I'm here to answer questions about Ajmal, his skills, projects, experience, and certifications.`;
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