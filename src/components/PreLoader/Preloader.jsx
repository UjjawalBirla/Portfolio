import { useEffect } from "react";
import anime from "animejs";
import "./Preloader.css";

export default function Preloader({ finish }) {
  useEffect(() => {
    const tl = anime.timeline({
      easing: "easeOutExpo",

      complete() {
        finish();
      },
    });

    tl.add({
      targets: ".loader-logo",
      opacity: [0, 1],
      scale: [0.7, 1],
      duration: 900,
    })
      .add({
        targets: ".loader-bar span",
        width: ["0%", "100%"],
        duration: 1200,
      })
      .add({
        targets: ".preloader",
        opacity: [1, 0],
        duration: 600,
      });

    return () => {
      tl.pause();
    };
  }, [finish]);

  return (
    <div className="preloader">
      <div className="loader-content">
        <div className="loader-logo">Welcome Ujjawal Portfolio</div>

        <div className="loader-bar">
          <span></span>
        </div>
      </div>
    </div>
  );
}
