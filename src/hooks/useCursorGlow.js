import { useEffect } from "react";
import anime from "animejs";

export default function useCursorGlow(cursorRef) {
  useEffect(() => {
    // Mobile devices par disable
    if (window.innerWidth <= 992) return;

    const cursor = cursorRef.current;

    if (!cursor) return;

    const handleMove = (e) => {
      anime({
        targets: cursor,

        left: e.clientX,
        top: e.clientY,

        duration: 350,

        easing: "easeOutExpo",
      });
    };

    const handleDown = () => {
      cursor.classList.add("active");
    };

    const handleUp = () => {
      cursor.classList.remove("active");
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [cursorRef]);
}
