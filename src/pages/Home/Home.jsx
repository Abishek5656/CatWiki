import HeroBanner from "../../components/herobanner/HeroBanner";
import Navbar from "../../components/navbar/Navbar";
import CatAdvantageCard from "../../components/catadvantagecard/CatAdvantageCard";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <CatAdvantageCard />
      <Footer />
    </div>
  );
};

export default Home;
