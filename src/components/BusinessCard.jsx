import "./BusinessCard.css";

function BusinessCard() {
  return (
    <section className="business-card">
      <div className="business-card__quote">
        <p>
          « Développeuse web &amp; web mobile passionnée, je conçois des
          expériences numériques soignées, de l'idée à la mise en ligne. »
        </p>
        <span className="business-card__signature">Aurélie</span>
      </div>
      <div className="business-card__divider" />
      <div className="business-card__contact">
        <div className="business-card__row">
          <span className="business-card__label">Nom</span>
          <span>Aurélie Dumotier</span>
        </div>
        <div className="business-card__row">
          <span className="business-card__label">Email</span>
          <span>aurelie.dumotier@email.com</span>
        </div>
        <div className="business-card__row">
          <span className="business-card__label">Téléphone</span>
          <span>06 68 85 74 96</span>
        </div>
        <div className="business-card__row">
          <span className="business-card__label">GitHub</span>
          <span>github.com/aurelie-dev</span>
        </div>
        <div className="business-card__row">
          <span className="business-card__label">LinkedIn</span>
          <span>linkedin.com/in/aurelie-dumotier</span>
        </div>
      </div>
    </section>
  );
}

export default BusinessCard;
