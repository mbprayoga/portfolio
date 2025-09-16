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
      className="relative w-screen  h-screen top-0 flex  z-0"
    >
      <div className="container mx-auto flex flex-col justify-center text-center items-center px-4 sm:px-6 gap-2">
        <div className="relative h-8 sm:h-9 md:h-10 px-3 sm:px-4 md:px-5 inline-flex items-center rounded-full backdrop-blur-sm fade-in mb-2 whitespace-nowrap">
          <div className="absolute inset-0 bg-bg-light rounded-full"></div>
          <span className="relative z-10 text-sm sm:text-base md:text-lg font-medium">
            Portfolio of M. Bintang Prayoga Utama
          </span>
        </div>

        <div className="flex justify-center fade-in mb-2">
          <h1 className="inline-block text-[clamp(4rem,12vw,12rem)] leading-none tracking-[-0.07em] font-normal select-none whitespace-nowrap">
            <span className="text-fg">software </span>
            <span className="relative inline-block bg-fg text-fg-highlight backdrop-blur-2xl opacity-90 pr-[0.08em] rounded-xl sm:rounded-3xl ">
              <span className="absolute inset-0 bg-radial from-white to-black blur-sm opacity-60 text-transparent bg-clip-text mr-[0.08em]">
                dev
              </span>
              <span className="relative ">dev</span>
            </span>
          </h1>
        </div>

        <div className="max-w-5xl px-4 sm:px-6 md:px-8 fade-in">
          <p className="text-[clamp(0.9rem,2.5vw,1.4rem)] text-fg leading-relaxed sm:leading-snug md:leading-normal">
            Building modern Web experiences, architecting scalable Cloud
            systems, and exploring intelligent solutions with Machine Learning.
          </p>
        </div>
      </div>
    </section>
  );
};
