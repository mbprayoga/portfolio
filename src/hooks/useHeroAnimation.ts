import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export const useHeroAnimation = (
  containerRef: React.RefObject<HTMLElement | null>
) => {
  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        ".fade-in",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.to(containerRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );
};
