import React from 'react'
import food from "../assets/Mario_Adrian _a.jpg"
import chef from "../assets/restaurant_chef.jpg"

const ChicagoTwo = () => {
  return (
    <>
    <div className="container chicago_2">
        <div className="container_inner">
          <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
          <figure>
            <img src={food} alt="restaurant food" />
            <img src={chef} alt="restaurant food" />
          </figure>
        </div>
      </div>
    </>
  )
}

export default ChicagoTwo