import { useRef } from "react";
import { useNavbarAnimation } from "@/hooks/useNavbarAnimation";
import { useFadeIn } from "@/hooks/useFadeIn";

export const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useNavbarAnimation(navRef, contentRef);

  return (
    <div
      ref={navRef}
      className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center items-center pointer-events-none"
    >
      <nav
        ref={contentRef}
        className="mx-auto flex h-10 rounded-full max-w-screen-sm items-center justify-between px-6 relative pointer-events-auto"
      >
        <div className="absolute inset-0 bg-bg-light rounded-full backdrop-blur-sm"></div>

        <ul className="flex items-center gap-4 relative z-10 text-sm font-medium">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
