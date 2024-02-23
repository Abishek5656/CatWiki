import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "react-rating";

import RelatedBreed from "../RelatedBreed/RelatedBreed";
import ReactLoading from "react-loading";
import "./breed.css";

const Breed = () => {
  const { id } = useParams();

  const [catDetails, setCatDetails] = useState([]);
  const [relatedCatImg, setRelatedCatImg] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    const getBread = async () => {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`,
        {
          method: "get", // added a comma to separate method and headers
          headers: {
            "x-api-key":
              "live_Ezu2rpQkGNNIlhFBGfS7iMJI6Q2T0E85p101oVZSavGCMUDslFNqipcEivQDAmze",
          },
        }
      );

      const data = await res.json();
      setCatDetails(data);
      setLoading(true);
    };
    getBread();
  }, [id]);

  useEffect(() => {
    // get breeds cats
    const getBreedCat = async () => {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${id}`,
        {
          method: "get",
          headers: {
            "x-api-key":
              "live_Ezu2rpQkGNNIlhFBGfS7iMJI6Q2T0E85p101oVZSavGCMUDslFNqipcEivQDAmze",
          },
        }
      );
      const data = await res.json();
      setRelatedCatImg(data);
    };

    getBreedCat();
  }, [id]);
  //   console.log("")
  // console.log(catDetails[0]?.breeds[0])
  return (
    <div className="mainContainer">
      {loading ? (
        <>
          <div className="wrapperContainer">
            {/* maindiv1 */}

            <div className="maindiv1">
              <img
                src={catDetails[0]?.url}
                alt=""
                className="catImg"
                loading="lazy"
              />
            </div>

            {/*detailsContentContainter  */}
            <div className="detailsContentContainter">
              {/* detailsContent */}
              <div className="detailsContent">
                <h1 className="animalBreed">
                  {catDetails[0]?.breeds[0]?.name}
                </h1>
                <p className="animalDescription">
                  {catDetails[0]?.breeds[0]?.description}
                </p>

                {/* temperament */}
                <p className="animalpara">
                  Temperament:
                  <span className="paraSpan">
                    {catDetails[0]?.breeds[0]?.temperament}
                  </span>
                </p>
                {/* origin */}
                <p className="animalpara">
                  Origin:
                  <span>{catDetails[0]?.breeds[0]?.origin}</span>
                </p>

                {/* life span */}
                <p className="animalpara">
                  Life Span:
                  <span>{catDetails[0]?.breeds[0]?.life_span}</span>
                </p>
              </div>

              {/* rating Container */}
              <div className="ratingContainer">
                {/* Adaptability */}
                <div className="ratingContent">
                  <p className="animalpara1">Adaptability:</p>
                  <div className="rating">
                    <p style={{ backgroundColor: "red" }}>l</p>
                    <Rating
                      initialRating={catDetails[0]?.breeds[0]?.adaptability}
                      readonly
                    />
                  </div>
                </div>

                {/* Affection level */}
                <div className="ratingContent">
                  <p className="animalpara1">Affection level:</p>
                  <div className="rating">
                    <p style={{ backgroundColor: "red" }}>l</p>
                    <Rating
                      initialRating={catDetails[0]?.breeds[0]?.affection_level}
                      readonly
                    />
                  </div>
                </div>
                {/* Child Friendly */}
                <div className="ratingContent">
                  <p className="animalpara1">Child Friendly:</p>
                  <div className="rating">
                    <p style={{ backgroundColor: "red" }}>l</p>

                    <Rating
                      initialRating={catDetails[0]?.breeds[0]?.child_friendly}
                      readonly
                    />
                  </div>
                </div>
                {/* Grooming */}

                <div className="ratingContent">
                  <p className="animalpara1">Grooming:</p>
                  <div className="rating">
                    <p style={{ backgroundColor: "red" }}>l</p>

                    <Rating
                      initialRating={catDetails[0]?.breeds[0]?.grooming}
                      readonly
                    />
                  </div>
                </div>

                {/* Intelligence: */}

                <div className="ratingContent">
                  <p className="animalpara1">Intelligence:</p>
                  <div className="rating">
                    <p style={{ backgroundColor: "red" }}>l</p>

                    <Rating
                      initialRating={catDetails[0]?.breeds[0]?.intelligence}
                      readonly
                    />
                  </div>
                </div>
                {/* Health issues */}
                <div className="ratingContent">
                  <p className="animalpara1">Health issues:</p>
                  <div className="rating">
                    <p style={{ backgroundColor: "red" }}>l</p>
                    <Rating
                      initialRating={catDetails[0]?.breeds[0]?.health_issues}
                      readonly
                    />
                  </div>
                </div>
                {/* Social needs */}
                <div className="ratingContent">
                  <p className="animalpara1"> Social needs:</p>
                  <div className="rating">
                    <p style={{ backgroundColor: "red" }}>l</p>

                    <Rating
                      initialRating={catDetails[0]?.breeds[0]?.social_needs}
                      readonly
                    />
                  </div>
                </div>
                {/* Stranger friendly */}
                <div className="ratingContent">
                  <p className="animalpara1">Stranger friendly:</p>
                  <div className="rating">
                    <p style={{ backgroundColor: "red" }}>l</p>
                    <Rating
                      initialRating={
                        catDetails[0]?.breeds[0]?.stranger_friendly
                      }
                      readonly
                      color="brown"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RelatedBreed relatedCatImg={relatedCatImg} />
        </>
      ) : (
        <ReactLoading type={"bubbles"} color={"black"} height={667} width={375} />
      )}
    </div>
  );
};

export default Breed;
