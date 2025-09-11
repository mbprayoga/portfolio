import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import photo from "@/assets/photo.png";

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  useReveal(aboutRef);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative max-w-screen bg-bg flex min-h-[90vh]"
    >
      <div className="container flex flex-col md:flex-row items-center md:items-stretch gap-8 sm:gap-12 self-center">
        <div className="flex-shrink-0 self-center flex justify-center ">
          <img
            src={photo}
            alt="profile"
            className="w-40 sm:w-56 md:w-72 h-auto rounded-2xl shadow-lg reveal-content"
          />
        </div>

        <div className="flex flex-col justify-between gap-6 ">
          <div className="relative flex reveal-content mb-5 text-center justify-center border-b border-fg-muted">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-fg font-medium inline-block">
              About Me
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <p className="text-base sm:text-lg md:text-xl text-justify text-fg-muted reveal-content">
              I build modern web applications and scalable cloud systems,
              focusing on performance, maintainability, and usability, with
              experience on machine learning to enhance functionality.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-justify text-fg-muted reveal-content">
              I continuously explore new tools to improve workflows, optimize
              solutions, and deliver reliable software that meets technical
              requirements and provides meaningful impact in real-world
              applications.
            </p>
          </div>

          <div className="flex flex-row gap-4 sm:gap-6 self-center md:justify-start reveal-content">
            <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-fg text-bg font-medium shadow-md hover:opacity-90 transition">
              Get in touch
            </button>

            <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-bg-light text-fg font-medium shadow-md hover:bg-bg-dark hover:text-fg transition">
              My Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
