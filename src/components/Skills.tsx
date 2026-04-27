import { useState, useRef, useEffect } from "react";
import { useReveal } from "@/hooks/useReveal";

import yolo from "@/assets/yolo.png";
import hailo from "@/assets/hailo.png";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const S = "https://cdn.simpleicons.org";

const skills = [
  {
    name: "JavaScript",
    category: " Languages",
    icon: `${D}/javascript/javascript-original.svg`,
  },
  {
    name: "TypeScript",
    category: " Languages",
    icon: `${D}/typescript/typescript-original.svg`,
  },
  {
    name: "Python",
    category: " Languages",
    icon: `${D}/python/python-original.svg`,
  },
  {
    name: "Node.js",
    category: " Web Dev",
    icon: `${D}/nodejs/nodejs-original-wordmark.svg`,
  },
  {
    name: "Express.js",
    category: " Web Dev",
    icon: `${D}/express/express-original.svg`,
  },
  {
    name: "NestJS",
    category: " Web Dev",
    icon: `${D}/nestjs/nestjs-original.svg`,
  },
  {
    name: "Next.js",
    category: " Web Dev",
    icon: `${D}/nextjs/nextjs-original.svg`,
  },
  {
    name: "React.js",
    category: " Web Dev",
    icon: `${D}/react/react-original.svg`,
  },
  {
    name: "Vite",
    category: " Web Dev",
    icon: `${D}/vitejs/vitejs-original.svg`,
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: `${D}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  },
  {
    name: "GCP",
    category: "Cloud",
    icon: `${D}/googlecloud/googlecloud-original.svg`,
  },
  {
    name: "Cloudflare",
    category: "Cloud",
    icon: `${D}/cloudflare/cloudflare-original.svg`,
  },
  {
    name: "Vercel",
    category: "Cloud",
    icon: `${D}/vercel/vercel-original.svg`,
  },
  { name: "Render", category: "Cloud", icon: `${S}/render` },
  { name: "Railway", category: "Cloud", icon: `${S}/railway/railway-original` },
  {
    name: "PostgreSQL",
    category: "Databases",
    icon: `${D}/postgresql/postgresql-original.svg`,
  },
  {
    name: "MySQL",
    category: "Databases",
    icon: `${D}/mysql/mysql-original-wordmark.svg`,
  },
  {
    name: "MongoDB",
    category: "Databases",
    icon: `${D}/mongodb/mongodb-original.svg`,
  },
  {
    name: "Supabase",
    category: "Databases",
    icon: `${D}/supabase/supabase-original.svg`,
  },
  {
    name: "Elastic",
    category: "Search",
    icon: `${S}/elastic`,
  },
  {
    name: "Redis",
    category: " Cache",
    icon: `${D}/redis/redis-original.svg`,
  },
  { name: "Jest", category: " Testing", icon: `${D}/jest/jest-plain.svg` },
  { name: "Supertest", category: " Testing", icon: `${S}/nodedotjs` },
  { name: "k6", category: " Testing", icon: `${S}/k6` },
  { name: "OWASP ZAP", category: " Testing", icon: `${S}/zap` },
  {
    name: "TensorFlow",
    category: "AI / ML",
    icon: `${D}/tensorflow/tensorflow-original.svg`,
  },
  {
    name: "OpenCV",
    category: "AI / ML",
    icon: `${D}/opencv/opencv-original.svg`,
  },
  { name: "YOLO", category: "AI / ML", icon: yolo },
  { name: "Hailo", category: "AI / ML", icon: hailo },
  { name: "Git", category: "Tools", icon: `${D}/git/git-original.svg` },
  {
    name: "Docker",
    category: "Tools",
    icon: `${D}/docker/docker-original.svg`,
  },
  {
    name: "Postman",
    category: "Tools",
    icon: `${D}/postman/postman-original.svg`,
  },
];

const categories = {
  "Web Development": {
    description:
      "Creating responsive websites or server-side applications with modern frameworks.",
  },
  "Cloud Computing": {
    description:
      "Building scalable and reliable system architectures using cloud platforms and services.",
  },
  "AI / ML": {
    description:
      "Applying data-driven models to enhance applications with intelligent features.",
  },
} as const;

type CategoryKey = keyof typeof categories;

export const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useReveal(skillsRef);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % skills.length);
    }, 2200);
    return () => clearInterval(id);
  }, [paused]);

  const ITEM_H = 36;
  const HALF = 6;
  const translateY = (HALF - activeIndex) * ITEM_H;

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="relative w-screen min-h-[90vh] bg-bg flex z-10"
    >
      <div className="container flex flex-col">
        <div className="relative flex ent mb-6 pb-2 text-left border-b border-fg-muted">
          <h2 className="text-2xl sm:text-5xl md:text-6xl text-fg font-medium inline-block">
            Skills & Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 ent flex-1">
          <div className="flex flex-col md:border-r border-fg-muted pr-6">
            {(Object.keys(categories) as CategoryKey[]).map((cat) => (
              <div
                key={cat}
                className="flex flex-col border-b border-fg-muted py-4"
              >
                <div className="flex flex-col gap-1 py-2 text-left ml-1 sm:ml-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-fg">
                    {cat}
                  </h3>
                  <p className="text-sm sm:text-base md:text-xl text-fg-muted leading-snug">
                    {categories[cat].description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pl-6 flex flex-row items-center gap-6">
            <div
              className="flex-1 overflow-hidden"
              style={{ height: `${(HALF * 2 + 1) * ITEM_H}px` }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div
                className="flex flex-col transition-transform duration-300 ease-in-out"
                style={{ transform: `translateY(${translateY}px)` }}
              >
                {skills.map((skill, si) => (
                  <button
                    key={skill.name}
                    type="button"
                    onClick={() => {
                      setActiveIndex(si);
                      setPaused(true);
                      setTimeout(() => setPaused(false), 3000);
                    }}
                    style={{ height: `${ITEM_H}px` }}
                    className={`text-sm sm:text-base md:text-xl shrink-0 flex items-center text-left px-4 transition-colors duration-150 gap-3 ${
                      si === activeIndex
                        ? "text-fg font-semibold"
                        : "text-fg-muted hover:text-fg"
                    }`}
                  >
                    {skill.name}
                    {si === activeIndex && (
                      <>
                        <span className="flex-1 h-px bg-fg-muted" />
                        <span className="text-fg-muted text-xs sm:text-sm font-normal shrink-0">
                          {skill.category}
                        </span>
                      </>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full bg-highlight/20 border border-fg-highlight flex items-center justify-center">
                <img
                  src={skills[activeIndex].icon}
                  alt={skills[activeIndex].name}
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
