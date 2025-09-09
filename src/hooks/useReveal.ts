import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export const useReveal = (
  containerRef: React.RefObject<HTMLElement | null>
) => {
  useGSAP(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-content",
        { clipPath: "inset(-20% 100% -20% -20%)" },
        {
          clipPath: "inset(-20% -20% -20% -20%)",
          duration: 1.5,
          ease: "power3.inOut",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
};
