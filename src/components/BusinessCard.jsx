import { useId, useState } from "react";
import TravelCrossword from "./TravelCrossword.jsx";
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
  const [isCrosswordOpen, setCrosswordOpen] = useState(false);

  return (
    <section id="qui-suis-je" className="business-card">
      <div className="business-card__stamp-hint" aria-hidden="true">
        <span className="business-card__stamp-hint-text">Click me !</span>
        <svg
          className="business-card__stamp-hint-arrow"
          viewBox="0 0 72 50"
          fill="none"
        >
          <path
            d="M4,4 Q57,8 66,42"
            stroke="var(--pink-card-frame)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M57,36 L67,44 L55,47"
            stroke="var(--pink-card-frame)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <button
        type="button"
        className="business-card__stamp"
        onClick={() => setCrosswordOpen(true)}
        aria-label="Petit jeu : mots fléchés sur mes voyages"
        title="Petit jeu : mes voyages"
      >
        <span className="business-card__stamp-icon" aria-hidden="true">
          ✈️
        </span>
        <span className="business-card__stamp-label">Mes voyages</span>
      </button>

      {isCrosswordOpen && (
        <TravelCrossword onClose={() => setCrosswordOpen(false)} />
      )}

      <div className="business-card__header">
        <img
          className="business-card__avatar"
          src="/assets/avatar.png"
          alt="Photo d'Aurélie Dumotier"
        />
        <h2 className="business-card__title">Qui suis-je ?</h2>
      </div>
      <div className="business-card__body">
        <div className="business-card__quote">
          <p>
            «Développeuse web passionnée, je conçois des expériences web où la
            technique se met au service de l'utilisateur, avec une attention
            particulière portée aux détails. Mon parcours en supervision
            d'équipes et en relation client m'a appris à écouter, comprendre les
            besoins et concevoir des solutions utiles.
            <br /> Curieuse de nature, je puise mon inspiration dans les voyages
            en terres nordiques, la création textile, le golf, la danse
            classique ou encore les mots fléchés. Des passions qui cultivent ma
            créativité, ma rigueur et mon sens de l'observation, et qui
            façonnent ma manière de développer. »
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
      </div>
    </section>
  );
}

export default BusinessCard;
