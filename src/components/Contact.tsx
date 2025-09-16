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
        <div className="flex-col md:w-[75%] h-full bg-bg-light rounded-2xl shadow-lg p-8 flex justify-between text-[clamp(15px,3.2vw,2.5rem)] text-fg text-left leading-relaxed fade-in ">
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

        <div className="w-full md:w-[30%] flex flex-row md:flex-col gap-6 justify-center">
          <div className="w-[50%] md:w-full bg-bg-light rounded-2xl shadow-lg p-6 flex-1 flex flex-col gap-2 text-lg md:text-xl justify-center fade-in">
            <p className="text-xs sm:text-sm md:text-md font-semibold">
              Local Time
            </p>
            <p className="text-xl sm:text-4xl md:text-5xl">{time}</p>
            <p className="text-xs sm:text-sm md:text-md text-fg/70">
              Semarang, Indonesia
            </p>
          </div>

          <div className="w-[50%] md:w-full bg-bg-light rounded-2xl shadow-lg p-6 flex-1 flex flex-col text-lg md:text-xl fade-in justify-around">
            <div className="flex flex-1 gap-4 justify-center items-center">
              <a
                href="https://www.linkedin.com/in/m-bintang-prayoga-utama/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center hover:text-fg-highlight transition-colors"
              >
                <SiLinkedin className="w-full h-auto max-w-16 sm:max-w-18" />
              </a>

              <a
                href="https://github.com/mbprayoga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center hover:text-fg-highlight transition-colors"
              >
                <SiGithub className="w-full h-auto max-w-16 sm:max-w-18" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
