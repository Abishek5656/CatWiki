import "./herobanner.css";
import HeroImagelg from "../../assets/HeroImagelg.png";

// import HeroImagemd from "../../assets/HeroImagemd.png";
// import HeroImagesm from "../../assets/HeroImagesm.png";

import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HeroBanner = () => {
  const [open, setOpen] = useState(false);
  const [breads, setBreads] = useState([]);
  const [query, setQuery] = useState("");
  const handleFocus = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getreads = async () => {
      const res = await fetch("https://api.thecatapi.com/v1/breeds");
      const data = await res.json();
      setBreads(data);
    };
    getreads();
  }, []);
  return (
    <div className="herobannerContainer">
      {/* div 1 */}
      <div className="herobannerImage">
        <img src={HeroImagelg} alt="" className="catImage" />

        <div className="herobannerDetails">
          <h1 className="title">CatWiki</h1>

          <p className="text">
            Get to know more about <br />
            your cat breed
          </p>

          <div className="inputContainer">
            <input
              type="text"
              placeholder="Search"
              className="input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={handleFocus}
            />
            <IoSearch size={24} style={{ color: "black", cursor: "pointer" }} />
          </div>

          {open ? (
            <div className="searchOptions">
              <RxCross2
                size={24}
                onClick={handleClose}
                className="crossIcons"
              />

              {breads
                .filter((bread) =>
                  bread.name.toLowerCase().includes(query.toLowerCase())
                )
                .map((bread, index) => (
                  <Link
                    to={`/categorie/${bread.id}`}
                    style={{ textDecoration: "none" }}
                    key={index}
                    className="catBread"
                  >
                    <p>{bread.name}</p>
                  </Link>
                ))}
            </div>
          ) : null}
        </div>
      </div>
      {/* div 2 */}

      <div className="herobannerContent">
        <h3 className="herobannerContent_subtext">Most Searched Breeds</h3>
        <hr className="line" />

        <h1 className="herobannerContent_title">
          66+ Breeds For you
          <br /> to discover
        </h1>

        <div className="imagesContainers">
          {/* cat1 */}
          <div className="animal-container">
            <img src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" alt="" />

            <p className="animal-name">Abyssinian</p>
          </div>

          {/* cat2 */}
          <div className="animal-container">
            <img src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg" alt="" />
            <p className="animal-name">Aegean</p>
          </div>

          {/* cat 3 */}
          <div className="animal-container">
            <img src="https://cdn2.thecatapi.com/images/bTo6m3PVg.jpg" alt="" />

            <p className="animal-name">American Wirehair</p>
          </div>

          {/* cat 4 */}
          <div className="animal-container">
            <img src="https://cdn2.thecatapi.com/images/1TcC-kiI1.jpg" alt="" />

            <p className="animal-name">Korat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
