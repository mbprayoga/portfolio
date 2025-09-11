import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Navbar } from "@/components/Navbar";
import { Gradient } from "@/components/Gradient";

export const Home = () => {
  return (
    <>
      <Gradient />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* Contact component is placed below projects in Projects.tsx*/}
    </>
  );
};
