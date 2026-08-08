import "./Loader.css";

export default function Loader({
  size = "md",
  text = "Loading...",
  fullScreen = false,
}) {
  return (
    <div className={`loader-wrapper ${fullScreen ? "fullscreen" : ""}`}>
      <div className={`loader ${size}`}>
        <span className="loader-ring"></span>

        <span className="loader-core"></span>
      </div>

      {text && <p className="loader-text">{text}</p>}
    </div>
  );
}
