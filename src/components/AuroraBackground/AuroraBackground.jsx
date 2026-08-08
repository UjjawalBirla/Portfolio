import "./AuroraBackground.css";

export default function AuroraBackground() {
  return (
    <div className="aurora-wrapper">
      <div className="aurora-layer aurora-purple"></div>

      <div className="aurora-layer aurora-blue"></div>

      <div className="aurora-layer aurora-cyan"></div>

      <div className="noise-overlay"></div>
    </div>
  );
}
