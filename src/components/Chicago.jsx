import React from "react";
import food from '../assets/restauranfood.jpg'
import CallToAction from "./CallToAction";

const Chicago = () => {
  return (
    <>
      <div className="container chicago">
        <div className="container_inner">
          <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <CallToAction/>
          </article>
          <figure>
            <img src={food} alt="restaurant food" />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Chicago;
