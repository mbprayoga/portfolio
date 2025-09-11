import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export const useContactAnimation = (
  containerRef: React.RefObject<HTMLElement | null>
) => {
  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top top",
            end: "bottom 70%",
            scrub: true,
            pin: false,
          },
        }
      );
    },
    { scope: containerRef }
  );
};
