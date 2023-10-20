import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  download,
  imgedit,
  threejs,
  fitness,
} from "../assets";

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Web Developer intern",
    company_name: "Starial Private Limited",
    icon: download,
    iconBg: "#383E56",
    date: "March 2023 - June 2023",
    points: [
      "Handle the Backend of the website.",
      "Participated in back-end development tasks with server-side technologies.",
      "Creating Responsive Design of the website using MERN stack developement.",
      "Creating API'S and Connect to the frontend.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Identified and fixed bugs, errors, and technical issues encountered on websites.",
    ],
  },
];

const projects = [
  {
    name: "Image Editor",
    description:
      "Designed and developed a user-friendly image editor using HTML , CSS and Javascript with a focus on simplicity and intuitive functionality. In this user can increase-decrease brightness,saturation, inversion and grayscale properties and cropping, resizing, rotating, and applying filters.Integrated image loading and saving functionality to allow users to import and export their edited images.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: imgedit,
    source_code_link: "https://github.com/Mayurgujrati/Image-Editor",
    live_link:
      "https://64ae3cc43e41d103337a9d07--spontaneous-tulumba-5ce27b.netlify.app/",
  },
  {
    name: "Fitness Freak",
    description:
      "Designed and developed a fitness freak website using MERN (MongoDB, Express.js, React.js, Node.js) stack. Using External Rapid API Fetch ExerciseDB and Youtube Search API'S to display fitness 3d visualize data.Saves 30% time of Fitness Freak People to Search in Browser.It Contains BMI calculator,Calories Calculator ,Youtube Video recommendations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link:
      "https://github.com/Mayurgujrati/Fitness-Freak-MGFitnesss",
    live_link: "https://mgfitnesss.pages.dev/",
  },
  {
    name: "BMI Calculator",
    description: "Calculate BMI(Body, mass , index) in very correct way",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: imgedit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
