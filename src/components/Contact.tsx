import { useEffect, useState, useRef } from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { useContactAnimation } from "@/hooks/useContactAnimation";
import { useFadeIn } from "@/hooks/useFadeIn";

export const Contact = () => {
  const [time, setTime] = useState("");
  const contactRef = useRef<HTMLElement | null>(null);
  useContactAnimation(contactRef);
  useFadeIn(contactRef, { target: ".fade-in" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Jakarta",
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      ref={contactRef}
      className="sticky bottom-0 min-h-screen max-w-screen flex items-center justify-center px-6 z-0"
    >
      <div className="container h-[70vh] flex flex-col md:flex-row justify-between items-stretch gap-8 py-6">
        <div className="flex-col md:w-[75%] h-full bg-bg-light rounded-2xl shadow-lg p-8 flex justify-between text-[clamp(1.3rem,3.2vw,2.8rem)] text-fg text-left leading-relaxed fade-in ">
          <h2>M. Bintang Prayoga Utama</h2>
          <p>
            Reach me at{" "}
            <a
              href="mailto:mbprayoga000@gmail.com"
              className="underline underline-offset-[11px] decoration-2 hover:text-fg-highlight transition-colors"
            >
              mbprayoga000@gmail.com
            </a>
          </p>
        </div>

        <div className="flex md:w-[25%]  flex-row md:flex-col gap-6 justify-center">
          <div className="bg-bg-light rounded-2xl shadow-lg p-6 flex-1 flex flex-col gap-2 text-lg md:text-xl justify-between fade-in">
            <p className="text-sm md:text-md font-semibold">Local Time</p>
            <p className="text-4xl md:text-5xl">{time}</p>
            <p className="text-sm md:text-md text-fg/70">Semarang, Indonesia</p>
          </div>

          <div className="bg-bg-light rounded-2xl shadow-lg p-6 flex-1 flex flex-col gap-3 text-lg md:text-xl fade-in">
            <div className="flex flex-1 gap-4 sm:gap-6 md:gap-8 justify-center items-center">
              <a
                href="https://www.linkedin.com/in/m-bintang-prayoga-utama/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 hover:text-fg-highlight transition-colors"
              >
                <SiLinkedin className="w-full h-full" />
              </a>

              <a
                href="https://github.com/mbprayoga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 hover:text-fg-highlight transition-colors"
              >
                <SiGithub className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
