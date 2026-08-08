import { useEffect, useRef } from "react";
import anime from "animejs";

export default function PageTransition({ children }) {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;

    anime({
      targets: page,
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 900,
      easing: "easeOutExpo",
    });

    anime({
      targets: page.querySelectorAll(".stagger"),
      opacity: [0, 1],
      translateY: [30, 0],
      delay: anime.stagger(100, { start: 200 }),
      duration: 700,
      easing: "easeOutExpo",
    });

    return () => {
      anime({
        targets: page,
        opacity: [1, 0],
        translateY: [0, -20],
        duration: 300,
        easing: "easeInExpo",
      });
    };
  }, []);

  return (
    <div ref={pageRef} className="page-transition">
      {children}
    </div>
  );
}
