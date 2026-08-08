import "./SectionTitle.css";

export default function SectionTitle({
  badge,
  title,
  highlight,
  description,
  align = "center",
}) {
  return (
    <div className={`section-title ${align}`}>
      {badge && <span className="section-badge">{badge}</span>}

      <h2>
        {title}

        {highlight && <span> {highlight}</span>}
      </h2>

      {description && <p>{description}</p>}
    </div>
  );
}
