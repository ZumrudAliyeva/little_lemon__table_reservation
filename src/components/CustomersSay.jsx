import React from "react";
import RateCard from "./RateCard";
import customer_1 from "../assets/rate_1.jpg";
import customer_2 from "../assets/rate_2.jpg";
import customer_3 from "../assets/rate_3.jpg";
import customer_4 from "../assets/rate_4.jpg";

const ratingsData = [
  {
    rating: [1, 1, 1, 1],
    image: customer_1,
    name: "John Doe",
    review:
      "Amazing experience! The food was delicious and the service was outstanding. Highly recommended!",
  },
  {
    rating: [1, 1, 1, 1, 1],
    image: customer_2,
    name: "Jane Smith",
    review:
      "Absolutely perfect! I couldn’t ask for a better dining experience. The ambiance was wonderful!",
  },
  {
    rating: [1, 1, 1],
    image: customer_4,
    name: "Mike Johnson",
    review:
      "Good food, but the service could be improved. Overall, a decent place to dine.",
  },
  {
    rating: [1, 1, 1, 1],
    image: customer_3,
    name: "Emily Davis",
    review:
      "Lovely atmosphere and tasty food. A great place to relax and enjoy a meal.",
  },
];

const CustomersSay = () => {
  return (
    <>
      <section className="testimonials">
        <div className="container_inner">
          <h4>Testimonials</h4>
          <div className="rating_list">
            {ratingsData.map((item, index) => (
              <RateCard
                key={index}
                rating={item.rating}
                image={item.image}
                name={item.name}
                review={item.review}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomersSay;
