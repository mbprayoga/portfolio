import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export const useHeroAnimation = (
  containerRef: React.RefObject<HTMLElement | null>
) => {
  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.to(containerRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
          snap: {
            snapTo: 1,
            duration: 0.5,
            ease: "power1.inOut",
          },
        },
      });
    },
    { scope: containerRef }
  );
};
