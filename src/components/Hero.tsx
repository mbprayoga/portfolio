import { useRef } from "react";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { useFadeIn } from "@/hooks/useFadeIn";

export const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  useHeroAnimation(heroRef);
  useFadeIn(heroRef, {
    target: ".fade-in",
    stagger: { each: 0.3, from: "center" },
  });

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full h-screen top-0 flex flex-col justify-center z-0"
    >
      <div className="container flex flex-col justify-center text-center items-center">
        <div className="relative h-10 px-6 inline-flex items-center rounded-full backdrop-blur-sm fade-in mb-2">
          <div className="absolute inset-0 bg-bg-light rounded-full "></div>
          <span className="relative z-10 text-xl font-medium ">
            Portfolio of M. Bintang Prayoga Utama
          </span>
        </div>

        <div className="w-full flex justify-center fade-in mb-2">
          <h1 className="text-[clamp(4rem,12vw,12rem)] leading-none tracking-[-0.07em] font-normal select-none">
            <span className="text-fg">software </span>
            <span className="relative inline-block bg-fg text-fg-highlight backdrop-blur-2xl opacity-90 pr-[0.08em]  rounded-2xl">
              <span className="absolute inset-0 bg-radial from-white to-black blur-sm opacity-60 text-transparent bg-clip-text mr-[0.08em]">
                dev
              </span>
              <span className="relative ">dev</span>
            </span>
          </h1>
        </div>

        <div className="max-w-3xl px-6 fade-in">
          <p className="text-[clamp(0.9rem,2.5vw,1.4rem)] text-fg ">
            Building modern Web experiences, architecting scalable Cloud
            systems, and exploring intelligent solutions with Machine Learning.
          </p>
        </div>
      </div>
    </section>
  );
};
