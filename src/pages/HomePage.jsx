import Hero from "../components/Hero.jsx";
import BusinessCard from "../components/BusinessCard.jsx";
import Competences from "../components/Competences.jsx";
import FeaturedProject from "../components/FeaturedProject.jsx";

function HomePage() {
  return (
    <>
      <Hero />
      <BusinessCard />
      <Competences />
      <FeaturedProject />
    </>
  );
}

export default HomePage;
