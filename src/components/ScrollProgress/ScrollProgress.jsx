import { useEffect, useState } from "react";
import "./ScrollProgress.css";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const height = document.documentElement.scrollHeight - window.innerHeight;

      const percentage = (scrollTop / height) * 100;

      setProgress(percentage);
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="progress-wrapper">
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
