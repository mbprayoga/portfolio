import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export const useNavbarAnimation = (
  navRef: React.RefObject<HTMLDivElement | null>
) => {
  useGSAP(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.set(nav, { y: 0 });

    ScrollTrigger.create({
      trigger: "#about",
      start: "bottom bottom",
      end: "bottom top",

      onEnter: () => {
        gsap.to(nav, {
          y: 100,
          duration: 0.5,
          ease: "power3.in",
          onComplete: () => {
            nav.style.top = "0";
            nav.style.bottom = "auto";
            gsap.fromTo(
              nav,
              { y: -100 },
              { y: 0, duration: 0.5, ease: "power3.out" }
            );
          },
        });
      },

      onLeaveBack: () => {
        gsap.to(nav, {
          y: -100,
          duration: 0.5,
          ease: "power3.in",
          onComplete: () => {
            nav.style.bottom = "0";
            nav.style.top = "auto";
            gsap.fromTo(
              nav,
              { y: 100 },
              { y: 0, duration: 0.5, ease: "power3.out" }
            );
          },
        });
      },
    });
  }, [navRef]);
};
