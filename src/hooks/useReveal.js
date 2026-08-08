import { useEffect } from "react";
import anime from "animejs";

export default function useReveal(selector = ".reveal", options = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    anime({
      targets: elements,

      opacity: [0, 1],

      translateY: [60, 0],

      scale: [0.96, 1],

      delay: anime.stagger(100),

      duration: 900,

      easing: "easeOutExpo",

      ...options,
    });
  }, [selector, options]);
}
