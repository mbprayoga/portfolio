import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface FadeInOptions {
  target?: string;
  y?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number | gsap.StaggerVars;
}

export const useFadeIn = (
  ref: React.RefObject<HTMLElement | null>,
  options: FadeInOptions = {}
) => {
  const {
    target,
    y = 20,
    duration = 1,
    delay = 0,
    ease = "power3.out",
    stagger,
  } = options;

  useGSAP(() => {
    if (!ref.current) return;

    const elements = target
      ? ref.current.querySelectorAll(target)
      : [ref.current];
    if (!elements.length) return;

    gsap.from(elements, {
      opacity: 0,
      y,
      duration,
      delay,
      ease,
      ...(stagger !== undefined && { stagger }),
    });
  }, [ref, target, y, duration, delay, ease, stagger]);
};
