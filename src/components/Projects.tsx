import { useEffect, useRef, useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

import { Contact } from "@/components/Contact";

import disko1 from "@/assets/disko1.png";
import disko2 from "@/assets/disko2.png";
import moody1 from "@/assets/moody1.png";
import moody2 from "@/assets/moody2.png";
import spark1 from "@/assets/spark1.png";
import spark2 from "@/assets/spark2.png";

const projects = [
  {
    title: "Diskominfo Internship Management Platform",
    images: [disko1, disko2],
    description:
      "Developed backend for a web-based platform at Diskominfo Semarang, enabling management of internship records, attendance, and tasks, ensuring efficient monitoring and reporting for both interns and supervisors.",
    skills: ["Javascript", "Express.js", "MySQL"],
  },
  {
    title: "Moodify Mental Health Tracking and Assistance",
    images: [moody1, moody2],
    description:
      "Developed the backend and landing page for a mental health platform, integrating personalized mood tracking, self-help resources, and data-driven insights to support user well-being and engagement.",
    skills: ["Javascript", "Express.js", "React.js", "GCP"],
  },
  {
    title: "Intelligent Parking and Helmet Detection System",
    images: [spark1, spark2],
    description:
      "Developed a computer vision system for parking spot detection at Diponegoro University and contributed to research on Helmet Detection and Intelligent Parking Systems, including experimentation and paper preparation.",
    skills: ["Python", "YOLO", "OpenCV", "Hailo"],
  },
];

export const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  useFadeIn(projectsRef);

  // Detect active project in center
  useEffect(() => {
    const handleScroll = () => {
      if (!projectsRef.current) return;

      const children = Array.from(
        projectsRef.current.querySelectorAll("[data-project-index]")
      );
      const viewportCenter = window.innerHeight / 2;

      let closestIndex: number | null = null;
      let closestDistance = Infinity;

      children.forEach((child) => {
        const rect = child.getBoundingClientRect();
        const childCenter = rect.top + rect.height / 2;
        const distance = Math.abs(childCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = parseInt(
            (child as HTMLElement).dataset.projectIndex || "-1",
            10
          );
        }
      });

      if (closestDistance <= 100) {
        setActiveProject(closestIndex);
      } else {
        setActiveProject(null);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeProject === null) return;
    setActiveImageIndex(0);

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => {
        const images = projects[activeProject].images;
        return (prev + 1) % images.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeProject]);

  return (
    <div>
      <section
        id="projects"
        ref={projectsRef}
        className="relative max-w-screen bg-bg flex z-10"
      >
        <div className="container flex flex-col ">
          <div className="relative flex mb-5 fade-content">
            <h2 className="text-5xl md:text-6xl text-fg font-medium inline-block text-left">
              Notable Projects
            </h2>
            <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-fg-muted rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.3)]"></span>
          </div>

          <div className="grid fade-content">
            {projects.map((project, index) => (
              <div
                key={index}
                data-project-index={index}
                className={`grid grid-cols-1 md:grid-cols-[50%_1fr] py-10 border-b border-fg-muted transition-colors duration-300 ${
                  activeProject === index
                    ? "bg-highlight-dark text-fg-highlight"
                    : "bg-transparent text-fg"
                }`}
              >
                <div className="flex flex-col justify-center gap-3 ml-2">
                  <h3 className="text-2xl font-semibold text-left">
                    {project.title}
                  </h3>
                </div>

                <div
                  className={`flex flex-wrap gap-2 items-center justify-end ${
                    activeProject === index ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-bg text-fg text-sm px-3 py-1 rounded-full shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {activeProject !== null && (
            <div className="fixed top-1/2 -translate-y-1/2 self-end w-[30vw] p-6 bg-highlight-dark text-bg shadow-xl rounded-lg transition-opacity duration-500">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow mb-4">
                {projects[activeProject].images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={projects[activeProject].title}
                    className={`absolute inset-0 w-full object-fit transition-opacity duration-700  ${
                      idx === activeImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-2 items-center justify-center mb-4">
                {projects[activeProject].skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-highlight text-sm px-3 py-1 rounded-full shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p>{projects[activeProject].description}</p>
            </div>
          )}
          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-black text-white rounded-xl shadow hover:bg-gray-800 transition">
              Other Projects
            </button>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};
