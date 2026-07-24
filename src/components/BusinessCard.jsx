import { useId } from "react";
import "./BusinessCard.css";

function SketchBorder() {
  const cornerGradientId = useId();
  const bottomGradientId = useId();
  return (
    <svg
      className="business-card__row-border"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={cornerGradientId} cx="0" cy="0" r="0.4">
          <stop offset="0%" stopColor="rgb(94, 84, 142)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="rgb(94, 84, 142)" stopOpacity="0.55" />
        </radialGradient>
        <linearGradient
          id={bottomGradientId}
          gradientUnits="userSpaceOnUse"
          x1="2"
          y1="98"
          x2="98"
          y2="98"
        >
          <stop offset="0%" stopColor="rgb(94, 84, 142)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="rgb(94, 84, 142)" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <path d="M2,98 L2,2 L98,2" stroke={`url(#${cornerGradientId})`} />
      <path d="M98,2 L98,98" stroke="rgba(94, 84, 142, 0.55)" />
      <path d="M2,98 L98,98" stroke={`url(#${bottomGradientId})`} />
    </svg>
  );
}

function BusinessCard() {
  return (
    <section className="business-card">
      <div className="business-card__quote">
        <p>
          « Développeuse web &amp; web mobile passionnée, ayant un passé dans la
          supervision d'équipes et la relation client, je transforme ma
          curiosite, mon sens du détail et mon goût des voyage en solutions web
          centrées sur les besoins utilisateurs, en alliant créativité et
          pragmatisme. »
        </p>
        <span className="business-card__signature">Aurélie</span>
      </div>
      <div className="business-card__divider" />
      <div className="business-card__contact">
        <div className="business-card__row">
          <SketchBorder />
          <span className="business-card__label">Nom</span>
          <span>Aurélie Dumotier</span>
        </div>
        <div className="business-card__row">
          <SketchBorder />
          <span className="business-card__label">Email</span>
          <span className="business-card__email">
            aurelie.dumotier@gmail.com
          </span>
        </div>
        <div className="business-card__row">
          <SketchBorder />
          <span className="business-card__label">Téléphone</span>
          <span>06 68 85 74 96</span>
        </div>
        <div className="business-card__row">
          <SketchBorder />
          <span className="business-card__label">GitHub</span>
          <span>github.com/Aurelie78290</span>
        </div>
        <div className="business-card__row">
          <SketchBorder />
          <span className="business-card__label">LinkedIn</span>
          <span>linkedin.com/in/aurelie-dumotier78290/</span>
        </div>
      </div>
    </section>
  );
}

export default BusinessCard;
