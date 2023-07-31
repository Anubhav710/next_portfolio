import {
  framer,
  next,
  mobile,
  backend,
  creator,
  web,
  ai,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "@/public/images"

export const navLinks = [
  {
    key: 1,
    id: "#about",
    title: "About",
  },
  {
    key: 2,
    id: "#skill",
    title: "skills",
  },
  {
    key: 3,
    id: "#contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: creator,
  },
]

const technologies = [
  {
    name: "CSS 3",
    icon: "/images/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "/images/tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/images/tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "/images/tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "/images/tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/images/tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "/images/tech/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/images/tech/mongodb.png",
  },
  {
    name: "Three JS",
    icon: "/images/tech/threejs.svg",
  },
  {
    name: "git",
    icon: "/images/tech/git.png",
  },
  {
    name: "nextjs",
    icon: "/images/tech/nextjs.svg",
  },
  {
    name: "framer",
    icon: "/images/tech/framermotion.svg",
  },
]

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Next.js",
    icon: next,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [],
  },
  {
    title: "Styles",
    company_name: "Tailwind",
    icon: tailwind,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [],
  },
  {
    title: "Animation",
    company_name: "Framer Motion",
    icon: framer,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [],
  },
  {
    title: "3D Graphics",
    company_name: "Three.js",
    icon: threejs,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [],
  },
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Next-js",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Anubhav710/cars_showcase",
    website_link:
      "https://cars-showcase-qs2v2fvjx-anubhav710.vercel.app/?vercelToolbarCode=vCtK5O8whvFSboy",
  },
  {
    name: "AI-Genius",
    description:
      "Web application that enables users to use various Ai tools like Ai image generation, Ai video generation and Ai code generation etc. It provide effective solutions.",
    tags: [
      {
        name: "Next-js",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "red-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/Anubhav710/ai-saas-project",
    website_link: "https://ai-saas-k94wd9gl9-anubhav710.vercel.app/",
  },
]

export { services, technologies, experiences, testimonials, projects }
