import React from "react";
import SpecialCard from "./SpecialCard";
import greeksalad from "../assets/greek_salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemondesert from "../assets/lemon_dessert.jpg";

const specials = [
  {
    title: "Greek salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: greeksalad,
  },
  {
    title: "Bruchetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: bruchetta,
  },
  {
    title: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: lemondesert,
  },
];

const Specials = () => {
  return (
    <>
      <section className="specials">
        <div className="container_inner">
          <div>
            <h1>This week specials!</h1>
            <button>Online menu</button>
          </div>
          <div className="specials_list">
            {specials.map((special, index) => (
              <SpecialCard
                key={index}
                title={special.title}
                description={special.description}
                image={special.image}
                price={special.price}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Specials;
