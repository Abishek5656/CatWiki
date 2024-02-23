import "./footer.css";
import logo from "../../assets/CatwikiLogo.svg";
const Footer = () => {
  return (
    <div className="footerContainer">

        <img src={logo} alt="" />
      

      <div className="footerContent">
        <p> © created by Abishek - devChallenge.io 2021</p>
      </div>
    </div>
  );
};

export default Footer;
