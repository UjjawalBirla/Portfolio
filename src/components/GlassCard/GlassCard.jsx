import "./GlassCard.css";

export default function GlassCard({ children, className = "", hover = true }) {
  return (
    <div
      className={`
        glass-card
        ${hover ? "glass-hover" : ""}
        ${className}
      `}
    >
      <div className="glass-shine"></div>

      {children}
    </div>
  );
}
