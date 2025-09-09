import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export const useNavbarAnimation = (
  navRef: React.RefObject<HTMLDivElement | null>,
  contentRef: React.RefObject<HTMLDivElement | null>
) => {
  useGSAP(() => {
    const nav = navRef.current;
    const content = contentRef.current;
    if (!nav || !content) return;

    ScrollTrigger.create({
      trigger: "#about",
      start: "bottom bottom",
      end: "bottom top",
      onEnter: () => {
        gsap.to(content, {
          autoAlpha: 0,
          y: -10,
          duration: 0.3,
          onComplete: () => {
            nav.style.top = "0";
            nav.style.bottom = "auto";
            gsap.to(content, { autoAlpha: 1, y: 0, duration: 0.3 });
          },
        });
      },
      onLeaveBack: () => {
        gsap.to(content, {
          autoAlpha: 0,
          y: 10,
          duration: 0.3,
          onComplete: () => {
            nav.style.bottom = "0";
            nav.style.top = "auto";
            gsap.to(content, { autoAlpha: 1, y: 0, duration: 0.3 });
          },
        });
      },
    });
  }, [navRef, contentRef]);
};
