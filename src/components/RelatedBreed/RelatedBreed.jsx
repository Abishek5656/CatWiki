import "./relatedbreed.css";

const RelatedBreed = ({ relatedCatImg }) => {
  return (
    <div className="relatedBreed">
      <h1>Other photos</h1>

      <div className="relatedBreedImageContainer">
        {relatedCatImg.map((catImg, index) => (
          <div className="ralatedCatImg" key={index} style={{cursor:"pointer"}}>
            <img src={catImg.url} alt="" loading="lazy"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedBreed;
