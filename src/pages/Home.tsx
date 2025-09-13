import { useEffect, useState } from "react";
import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Navbar } from "@/components/Navbar";
import { Gradient } from "@/components/Gradient";

export const Home = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      document.documentElement.classList.contains("dark")
    );
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const lightColors: [number, number, number][] = [
    [0.95, 0.95, 0.95],
    [0.92, 0.92, 0.92],
    [0.82, 0.82, 0.82],
    [0.3, 0.3, 0.3],
  ];

  const darkColors: [number, number, number][] = [
    [0.05, 0.05, 0.05],
    [0.15, 0.15, 0.15],
    [0.25, 0.25, 0.25],
    [0.7, 0.7, 0.7],
  ];

  const colors = isDark ? darkColors : lightColors;

  return (
    <>
      <Gradient
        color1={colors[0]}
        color2={colors[1]}
        color3={colors[2]}
        color4={colors[3]}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
};
