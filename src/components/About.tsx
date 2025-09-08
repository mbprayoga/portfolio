import { useRef } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import photo from "@/assets/photo.png";

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  useFadeIn(aboutRef);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative max-w-screen bg-bg flex"
    >
      <div className="container flex flex-col md:flex-row items-center md:items-stretch gap-12 ">
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            src={photo}
            alt="profile"
            className="w-[250px] md:w-[300px] lg:w-[350px] rounded-2xl shadow-lg fade-content"
          />
        </div>

        <div className="flex flex-col justify-between gap-6 flex-1 py-6">
          <h2 className="relative text-5xl md:text-6xl text-fg font-medium fade-content inline-block ">
            About Me
            <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-fg-muted rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.3)]"></span>
          </h2>

          <div className="flex flex-col gap-6">
            <p className="text-lg md:text-xl text-justify text-fg-muted fade-content">
              I build modern web applications and scalable cloud systems,
              focusing on performance, maintainability, and usability, with
              experience on machine learning to enhance functionality.
            </p>

            <p className="text-lg md:text-xl text-justify text-fg-muted fade-content">
              I continuously explore new tools to improve workflows, optimize
              solutions, and deliver reliable software that meets technical
              requirements and provides meaningful impact in real-world
              applications.
            </p>
          </div>

          <div className="flex flex-row gap-10 justify-center fade-content">
            <button className="px-6 py-3 rounded-xl bg-fg text-bg font-medium shadow-md hover:opacity-90 transition ">
              Get in touch
            </button>

            <button className="px-6 py-3 rounded-xl bg-bg-light text-fg font-medium shadow-md hover:bg-bg-dark hover:text-fg transition">
              My Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
