import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!navRef.current) return;

      gsap.fromTo(
        navRef.current,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    },
    { scope: navRef }
  );

  return (
    <div
      ref={navRef}
      className="sticky top-0 left-0 right-0 bottom-0 z-50 py-5 flex justify-center items-center pointer-events-none"
    >
      <nav className="mx-auto flex h-10 rounded-full max-w-screen-sm items-center justify-between px-6 relative pointer-events-auto">
        <div className="absolute inset-0 bg-bg-light rounded-full backdrop-blur-sm"></div>
        <ul className="flex items-center gap-4 relative z-10 text-sm font-medium">
          <li>
            <a href="#" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
