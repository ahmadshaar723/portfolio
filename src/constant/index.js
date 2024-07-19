import project1 from '../assets/resturant.png'
import project2 from '../assets/shop.png'
import project3 from '../assets/admin.png'

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "IT subject teacher",
    company: "CIS.",
    description: `I taught network and OS subjects to TS students and technology and OS subjects to BT3 students at
the CIS Institute.
`,
    technologies: [],
  },
  {
    year: "2024 - Present",
    role: "Microsoft office course teacher",
    company: "CIS.",
    description: `I taught a Microsoft Office course at the CIS Institute in cooperation with the Anera organization.`,
    technologies: [],
  },
  {
    year: "2023 - 2024",
    role: "Online teacher",
    company: "University students",
    description: `I taught a university student a set of subjects such as Paython, Android Studio, Operating System and Network`,
    technologies: [],
  }
 
];

export const PROJECTS = [
  {
    title: "Resturant Website",
    image: project1,
    description:
      "A simple resturant website with features like product listing and shopping cart.",
    link:"https://ahmadshaar723.github.io/restaurant/",
    technologies: ["HTML", "CSS", "React", "Redux","toolkit"],
  },
  {
    title: "E-commerce Website",
    image: project2,
    description:
      "An e-commerce website with features like product listing, shopping cart, and user authentication.",
      link:"https://mern-front-3n5p.onrender.com/",
    technologies: ["HTML", "CSS", "React", "MongoDB","Nodejs","Express","tailwind"],
  },
  {
    title: "Admin Website",
    image: project3,
    description:
      "A admin website can control in e-commerce website like adding product or delete.",
      link:"https://mern1-admin.onrender.com",
    technologies: ["HTML", "CSS", "React", "MongoDB","Nodejs","Express","tailwind"],
  }
  // {
  //   title: "Blogging Platform",
  //   image: 'project4',
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Lebanon, Tripoli, Jabal Al-Baddawe",
  phoneNo: "+961 76 519 688",
  email: "ahmadshaar723@gmail.com",
};