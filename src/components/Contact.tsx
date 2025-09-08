import { useEffect, useState, useRef } from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { useContactAnimation } from "@/hooks/useContactAnimation";

export const Contact = () => {
  const [time, setTime] = useState("");
  const contactRef = useRef<HTMLElement | null>(null);
  useContactAnimation(contactRef);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
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
      className="relative min-h-screen flex items-center justify-center px-6 z-0"
    >
      <div className="container h-[70vh] flex flex-col md:flex-row justify-between items-stretch gap-8 py-6">
        <div className="flex-col bg-bg-light rounded-2xl shadow-lg p-8 flex justify-between text-lg md:text-5xl text-fg text-center md:text-left leading-relaxed fade-in">
          <p>M. Bintang Prayoga Utama</p>
          <p>
            Reach me{" "}
            <a
              href="mailto:mbprayoga000@gmail.com"
              className="underline underline-offset-[11px] decoration-2 hover:text-primary transition-colors"
            >
              mbprayoga000@gmail.com
            </a>
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-6 justify-center">
          <div className="bg-bg-light rounded-2xl shadow-lg p-6 flex-1 flex flex-col gap-2 text-lg md:text-xl justify-between fade-in">
            <p className="font-semibold">Local Time</p>
            <p className="text-5xl">{time}</p>
            <p className="text-fg/70">Semarang, Indonesia</p>
          </div>

          <div className="bg-bg-light rounded-2xl shadow-lg p-6 flex-1 flex flex-col gap-3 text-lg md:text-xl fade-in">
            <p className="font-semibold">Contact</p>
            <div className="flex flex-1 gap-8 justify-center items-center">
              <a
                href="https://www.linkedin.com/in/m-bintang-prayoga-utama/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 hover:text-primary transition-colors"
              >
                <SiLinkedin size={56} />
              </a>

              <a
                href="https://github.com/mbprayoga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 hover:text-primary transition-colors"
              >
                <SiGithub size={56} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
