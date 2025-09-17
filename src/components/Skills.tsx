import { useState, useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

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
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  useReveal(skillsRef);

  const handleClickCategory = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
    setActiveSkill(null);
  };

  const handleClickSkill = (skillName: string) => {
    setActiveSkill((prev) => (prev === skillName ? null : skillName));
  };

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="relative w-screen min-h-[90vh] bg-bg flex z-10"
    >
      <div className="container flex flex-col">
        <div className="relative flex reveal-content mb-5 text-left border-b border-fg-muted">
          <h2 className="text-2xl sm:text-5xl md:text-6xl text-fg font-medium inline-block">
            Skills & Tech Stack
          </h2>
        </div>

        <div className="relative flex flex-col-reverse md:flex-row md:gap-x-12 gap-y-12 items-start md:items-start">
          <div className="w-full sm:w-[100%] md:w-[50%] flex flex-col text-left md:h-auto overflow-hidden reveal-content">
            {(Object.keys(categories) as CategoryKey[]).map((category) => (
              <div
                key={category}
                className={`group relative flex flex-col cursor-pointer border-b border-fg-muted duration-300 py-2${
                  activeCategory === category
                    ? "shadow-md shadow-highlight/30 bg-transparent"
                    : ""
                }`}
                onClick={() => handleClickCategory(category)}
              >
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-fg-highlight to-fg-highlight via-highlight transition-all duration-500 group-hover:w-full"></span>

                <div className="flex flex-col justify-center py-3">
                  <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-fg">
                    {category}
                  </h3>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeCategory === category
                        ? "max-h-32 sm:max-h-36 md:max-h-40 opacity-100 mt-2 sm:mt-3"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <p className="text-sm sm:text-base md:text-xl text-fg-muted">
                      {categories[category].description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full sm:w-[100%] md:w-[50%] flex flex-wrap gap-2 sm:gap-4 justify-center px-4 self-start md:mt-[2vw] reveal-content">
            {skills.map((skill) => {
              const isCategoryActive =
                activeCategory && skill.category === activeCategory;
              const isSkillActive = activeSkill === skill.name;
              const isActive = isCategoryActive || isSkillActive;

              return (
                <button
                  key={skill.name}
                  type="button"
                  onClick={() => handleClickSkill(skill.name)}
                  aria-pressed={isSkillActive}
                  className={`flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-bg-dark transition
                    hover:grayscale-0 hover:scale-110 hover:shadow-md hover:shadow-highlight/40
                    ${
                      isActive
                        ? "grayscale-0 scale-110 shadow-md shadow-highlight/40"
                        : "grayscale"
                    }
                  `}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
