import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useContactAnimation = (
  containerRef: React.RefObject<HTMLElement | null>
) => {
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%", // start fading earlier
              end: "top 30%", // finish fading in halfway down
              scrub: true,
            },
          }
        );
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );
};
