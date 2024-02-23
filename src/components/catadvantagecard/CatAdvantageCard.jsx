import img1 from "../../assets/image 1.png";
import img2 from "../../assets/image 2.png";
import img3 from "../../assets/image 3.png";
import "./catadvantagecard.css";
const CatAdvantageCard = () => {
  return (
    <div className="catAdvantageCardContainer">
      <div className="catAdvantageCardContent">
        <hr className="line1" />
        <h2>
          Why Should you <br />
          have a cat ?
        </h2>

        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>

        <h4>
          Read More <span className="right_arrow">&#8594;</span>
        </h4>
      </div>

      <div className="imagesContainer">
        <div className="firstImgContainer">
          <div className="firstImg">
            <img src={img2} alt="" />
          </div>

          <div className="secondImg">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="secondImgContainer">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CatAdvantageCard;
