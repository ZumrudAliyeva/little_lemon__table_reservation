import React from "react";
import star from "../assets/star.png";

const RateCard = ({ rating, image, name, review }) => {
  return (
    <>
      <div className="rate_card">
        <p className="rating">
        {rating.map((rate, index) => (
          rate === 1 && <img key={index} src={star} alt="star" />
        ))}
        </p>
        <div className="rater">
          <img src={image} alt={name} />
          <h4 className="name">{name}</h4>
        </div>
        <p className="review">{review}</p>
      </div>
    </>
  );
};

export default RateCard;
