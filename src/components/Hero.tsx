import { useRef } from "react";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { useFadeIn } from "@/hooks/useFadeIn";

import lightLogo from "@/assets/logo/light-bg.png";
import darklogo from "@/assets/logo/dark-bg.png";

export const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  useHeroAnimation(heroRef);
  useFadeIn(heroRef, {
    target: ".fade-in",
    stagger: { each: 0.3 },
  });

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-screen h-screen top-0 flex  z-0"
    >
      <div className="md:hidden container mx-auto flex flex-col justify-center items-center fade-in relative">
        <div className="absolute top-0 right-0 flex flex-col items-end text-right text-xs text-fg leading-snug">
          <p>Software Engineer · Portfolio 2026</p>
          <hr className="w-full border-fg my-0.5" />
          <p>M. Bintang Prayoga Utama</p>
        </div>
        <div className="w-[50vw] max-w-[220px]">
          <img
            src={lightLogo}
            alt="logo"
            className="w-full aspect-square dark:hidden"
          />
          <img
            src={darklogo}
            alt="logo"
            className="w-full aspect-square hidden dark:block"
          />
        </div>
      </div>

      <div className="hidden md:flex container mx-auto flex-row justify-center text-left items-left px-4 sm:px-6 gap-2">
        <div className="flex flex-col max-w-[14vw] justify-center items-center gap-2 fade-in mr-4">
          <div className="flex justify-center text-center items-center aspect-square">
            <img
              src={lightLogo}
              alt="logo"
              className="aspect-square dark:hidden"
            />
            <img
              src={darklogo}
              alt="logo"
              className="aspect-square hidden dark:block"
            />
          </div>
          <div className="w-full h-px bg-fg my-1" />
          <div className="relative flex flex-col items-center whitespace-nowrap z-10 text-sm sm:text-base md:text-lg font-medium">
            <p className="">M. Bintang Prayoga Utama</p>
            <p className="">Portfolio 2026</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-full">
          <div className="fade-in mb-2 w-full">
            <h1 className="text-[9vw] leading-none tracking-[-0.07em] font-normal whitespace-nowrap text-fg select-none">
              software engineer
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
