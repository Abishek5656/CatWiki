import Logo from "../../assets/CatwikiLogo.svg";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbarContainer">
      <Link to={"/"}>
      <img src={Logo} alt="" />
      </Link>
      
    </div>
  );
};

export default Navbar;
