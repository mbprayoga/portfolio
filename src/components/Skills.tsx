import { useState, useRef } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

import yolo from "@/assets/yolo.png";
import hailo from "@/assets/hailo.png";

const skills = [
  {
    name: "Javascript",
    category: "Web Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Typescript",
    category: "Web Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    category: "Web Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Express.js",
    category: "Web Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "Next.js",
    category: "Web Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React.js",
    category: "Web Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Vite.js",
    category: "Web Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "PostgreSQL",
    category: "Web Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    category: "Web Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "MongoDB",
    category: "Web Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Docker",
    category: "Web Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    category: "Cloud Computing",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "GCP",
    category: "Cloud Computing",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Cloudflare",
    category: "Cloud Computing",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
  },
  {
    name: "Python",
    category: "Machine Learning",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "TensorFlow",
    category: "Machine Learning",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "OpenCV",
    category: "Machine Learning",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
  },
  { name: "YOLO", category: "Machine Learning", icon: yolo },
  { name: "Hailo", category: "Machine Learning", icon: hailo },
];

const categories = {
  "Web Development": {
    description:
      "Creating responsive websites and web applications with modern frameworks.",
  },
  "Cloud Computing": {
    description:
      "Building scalable and reliable systems using cloud platforms and services.",
  },
  "Machine Learning": {
    description:
      "Applying data-driven models to enhance applications with intelligent features.",
  },
} as const;

type CategoryKey = keyof typeof categories;

export const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  useFadeIn(skillsRef);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="relative max-w-screen bg-bg flex"
    >
      <div className="container py-12 flex flex-col">
        <h2 className="relative text-5xl md:text-6xl mb-12 text-fg font-medium fade-content inline-block text-left">
          Skills & Tech Stack
          <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-fg-muted rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.3)]"></span>
        </h2>

        <div className="relative flex gap-x-12">
          <div className="w-[45%] flex flex-col h-64 gap-8 text-left transition">
            {(Object.keys(categories) as CategoryKey[]).map((category) => (
              <div
                key={category}
                className="relative flex flex-col cursor-pointer"
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <h3
                  className={`text-2xl font-semibold ml-2 ${
                    activeCategory === category ? "text-primary" : "text-fg"
                  }`}
                >
                  {category}
                </h3>
                <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-fg-muted rounded-full"></span>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeCategory === category
                      ? "max-h-40 opacity-100 mt-4"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <p className="text-xl text-fg-muted ml-2">
                    {categories[category].description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-fg-muted rounded-full w-[0.5px] shadow-[0_2px_6px_rgba(0,0,0,0.3)]"></div>

          <div className="w-[55%] flex flex-wrap gap-6 justify-center">
            {skills.map((skill) => {
              const isActive =
                activeCategory && skill.category === activeCategory;

              return (
                <div
                  key={skill.name}
                  className={`flex items-center justify-center h-12 w-12 rounded-3xl bg-bg-dark transition hover:grayscale-0 hover:scale-110 hover:shadow-md hover:shadow-highlight/40 ${
                    isActive
                      ? "grayscale-0 scale-110 shadow-md shadow-highlight/40"
                      : "grayscale"
                  }`}
                >
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
