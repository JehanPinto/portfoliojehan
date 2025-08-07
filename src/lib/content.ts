// lib/content.ts

export interface ProjectType {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
}

export interface ContentType {
  hero: {
    name: string
    title: string
    tagline: string
    image: string
  }
  about: {
    description: string
    focus: string
    goal: string
  }
  projects: ProjectType[]
  skills: {
    frontend: string[]
    backend: string[]
    tools: string[]
    soft: string[]
  }
  resume: {
    link: string
  }
  contact: {
    email: string
    linkedin: string
    github: string
    youtube: string
  }
}

const content: ContentType = {
  hero: {
    name: "M Jehan  Pinto",
    title: "Full Stack Developer & Tech Enthusiast",
    tagline: "Transforming ideas into impactful digital experiences ",
    image: "/images/profile.png", // Replace with /images/hero.jpg when you add your photo
  },
  about: {
    description: `I'm a self-driven software engineering student with a passion for building full-stack applications that create real-world impact. 
    I’ve led and contributed to various projects — from mental health platforms to interactive robotics.

    I also have strong experience in team leadership, event organization, and tech facilitation, with a background in martial arts and community service.`,
    focus: "Full-stack development (Next.js, Tailwind, MongoDB), system design, and DevOps basics",
    goal: "Build scalable systems that solve human problems efficiently",
  },
  projects: [
    {
      title: "Mindfull Connect",
      description:
        "A secure online counseling platform with session booking, messaging, and progress tracking.",
      tech: ["Next.js", "MongoDB", "JWT", "Tailwind"],
      github: "https://github.com/kaviska/MindfullConnect.git",
      demo: "https://mindfull-connect.vercel.app/",
    },
    {
      title: "Discovery Driven – Educational Robot",
      description:
        "Interactive robotic car for children under 12 with object and color recognition.",
      tech: ["Arduino", "Sensors", "C++"],
      github: "#",
      demo: "#",
    },
    {
      title: "SkillForge",
      description:
        "Collaborative learning platform using skill bartering and AI mentor suggestions.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/kaviska/MindfullConnect.git",
      demo: "https://skill-forge-three.vercel.app/",
    },
  ],
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "TypeScript"],
    backend: ["Node.js", "Express", "MongoDB", "Firebase", "JWT"],
    tools: ["Git", "Postman", "Vercel", "Netlify", "Figma", "Arduino", "Canva"],
    soft: ["Leadership", "Karate Black Belt", "Team Facilitation", "Public Speaking"],
  },
  resume: {
    link: "#", // Link to downloadable resume
  },
  contact: {
    email: "pintomjh.22@uom.lk",
    linkedin: "https://www.linkedin.com/in/jehan-pinto/",
    github: "https://github.com/JehanPinto",
    youtube: "https://youtube.com/yourchannel",
  },
};

export default content;
