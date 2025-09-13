import { useRef } from "react";
import { useNavbarAnimation } from "@/hooks/useNavbarAnimation";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useNavbarAnimation(navRef);

  return (
    <div
      ref={navRef}
      className="fixed bottom-0 left-0 right-0 z-50 py-3 sm:py-4 md:py-5 flex justify-center items-center pointer-events-none"
    >
      <div className="flex items-center gap-x-1 pointer-events-auto">
        <nav className="mx-auto flex h-8 sm:h-9 md:h-10 rounded-full max-w-screen-sm items-center justify-between px-4 sm:px-5 md:px-6 relative">
          <div className="absolute inset-0 bg-bg-light rounded-full backdrop-blur-[8px]"></div>

          <ul className="flex items-center gap-2 sm:gap-3 md:gap-4 relative z-10 text-xs sm:text-sm md:text-sm font-medium text-fg">
            <li>
              <a className="hover:text-fg-highlight " href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-fg-highlight" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-fg-highlight" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="hover:text-fg-highlight" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-fg-highlight"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  });
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </div>
  );
};
