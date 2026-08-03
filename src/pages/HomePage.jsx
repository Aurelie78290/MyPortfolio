import Hero from "../components/Hero.jsx";
import BusinessCard from "../components/BusinessCard.jsx";
import QuiSuisJe from "../components/QuiSuisJe.jsx";
import Competences from "../components/Competences.jsx";
import FeaturedProject from "../components/FeaturedProject.jsx";

function HomePage() {
  return (
    <>
      <Hero />
      <BusinessCard />
      <QuiSuisJe />
      <Competences />
      <FeaturedProject />
    </>
  );
}

export default HomePage;
