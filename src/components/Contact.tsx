import { useEffect, useRef, useState } from "react";
import Lanyard from "@/components/Lanyard";
import cardDarkGLB from "@/assets/card-dark.glb";
import cardLightGLB from "@/assets/card-light.glb";
import { useContactAnimation } from "@/hooks/useContactAnimation";
import { useFadeIn } from "@/hooks/useFadeIn";

export const Contact = () => {
  const contactRef = useRef<HTMLElement | null>(null);
  const [isDark, setIsDark] = useState(
    () =>
      typeof window !== "undefined" &&
      localStorage.getItem("theme") !== "light",
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  useContactAnimation(contactRef);
  useFadeIn(contactRef, { target: ".fade-in" });

  return (
    <section
      id="contact"
      ref={contactRef}
      className="sticky bottom-0 min-h-screen max-w-screen flex items-center justify-center px-6 z-0"
    >
      <div className="container h-[70vh] flex flex-row justify-between items-stretch gap-8 py-6">
        <div className="md:w-[75%] h-full bg-bg-light rounded-2xl shadow-lg p-8 flex flex-row fade-in overflow-hidden gap-4">
          <div className="flex flex-col justify-between flex-1 text-[clamp(15px,3.2vw,2.5rem)] text-fg text-left leading-relaxed">
            <p>Contact me at</p>
            <div>
              <p>
                <a
                  href="https://www.linkedin.com/in/m-bintang-prayoga-utama/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-[11px] decoration-2 hover:text-fg-highlight transition-colors"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/mbprayoga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-[11px] decoration-2 hover:text-fg-highlight transition-colors"
                >
                  GitHub
                </a>
              </p>
              <p>
                <a
                  href="mailto:mbprayoga000@gmail.com"
                  className="underline underline-offset-[11px] decoration-2 hover:text-fg-highlight transition-colors"
                >
                  mbprayoga000@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[30%] flex flex-row md:flex-col gap-6 justify-center">
          <div className="bg-bg-light rounded-2xl shadow-lg p-6 flex-1 flex flex-col text-lg md:text-xl fade-in justify-around">
            <div className="absolute h-full w-full top-0 left-0 pointer-events-none">
              <Lanyard
                position={[0, 0, 20]}
                gravity={[0, -40, 0]}
                cardGlb={isDark ? cardDarkGLB : cardLightGLB}
              />
            </div>
            <div className="flex flex-1 gap-4 justify-center items-end"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
