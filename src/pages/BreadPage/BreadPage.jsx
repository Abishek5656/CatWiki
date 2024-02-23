import Navbar from "../../components/navbar/Navbar";
import Breed from "../../components/Breed/Breed";
import Footer from "../../components/Footer/Footer";
import "./breadpage.css"
const BreadPage = () => {
  return (
    <div className="breedPage">
      <Navbar />
      <Breed />
      <div className="breedPagebottom">
      <Footer />
      </div>
      
    </div>
  );
};

export default BreadPage;
