import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

import { Contact } from "@/components/Contact";
import { ExternalLink } from "lucide-react";

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

  useReveal(projectsRef);

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

  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <div>
      <section
        id="projects"
        ref={projectsRef}
        className="relative w-screen min-h-[90vh] bg-bg flex z-10"
      >
        <div className="container flex flex-col">
          <div className="relative flex reveal-content mb-5 text-left border-b border-fg-muted">
            <h2 className="text-2xl sm:text-5xl md:text-6xl text-fg font-medium inline-block">
              Notable Projects
            </h2>
          </div>

          <div className="grid reveal-content">
            {projects.map((project, index) => (
              <div
                key={index}
                data-project-index={index}
                className={`relative group grid grid-cols-1 md:grid-cols-[50%_1fr] py-6 sm:py-10 border-b border-fg-muted overflow-hidden transition-colors duration-300 sm:bg-transparent sm:text-fg cursor-pointer md:cursor-default ${
                  activeProject === index
                    ? "md:bg-highlight-dark md:text-fg-highlight"
                    : "md:bg-transparent md:text-fg"
                }`}
                onClick={() =>
                  setOpenAccordion(openAccordion === index ? null : index)
                }
              >
                <span
                  className="md:hidden absolute bottom-0 left-[-75%] w-1/2 h-[2px] bg-gradient-to-r from-fg-highlight to-fg-highlight via-highlight
                          opacity-0 group-hover:opacity-100  group-hover:translate-x-[200%] transition-all duration-700 ease-outmd:hidden"
                ></span>

                <div className="flex flex-col justify-center gap-2 sm:gap-3 ml-1 sm:ml-2 ">
                  <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-left">
                    {project.title}
                  </h3>
                </div>

                <div
                  className={`flex flex-wrap gap-1 sm:gap-2 items-center justify-start md:justify-end mt-3 sm:mt-0 sm:opacity-100 ${
                    activeProject === index ? " md:opacity-0" : "md:opacity-100"
                  }`}
                >
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-bg text-fg text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out col-span-1 text-fg-muted rounded-lg my-4 md:hidden ${
                    openAccordion === index
                      ? "max-h-[1000px] opacity-100 mt-4"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 shadow-lg bg-bg-dark">
                    {project.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={project.title}
                        className={`absolute inset-0 w-full object-cover transition-opacity duration-700 ${
                          idx === activeImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-justify">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {activeProject !== null && (
            <div className="hidden md:flex flex-col fixed top-1/2 -translate-y-1/2 self-end w-[32vw] aspect-[6/5] p-6 bg-highlight-dark text-bg shadow-xl rounded-lg transition-opacity duration-500 group">
              <div className="relative w-[95%] aspect-video rounded-lg overflow-hidden shadow mb-4 self-center bg-highlight">
                {projects[activeProject].images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={projects[activeProject].title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      idx === activeImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {projects[activeProject].skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-highlight text-sm px-3 py-1 rounded-full shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 scrollbar-custom">
                <p className="text-md leading-relaxed">
                  {projects[activeProject].description}
                </p>
              </div>
            </div>
          )}

          <div className="text-center self-center mt-8 sm:mt-10">
            <a
              href="https://github.com/mbprayoga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-fg text-fg-highlight font-semibold hover:opacity-80 transition"
            >
              <span>Other Projects</span>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};
