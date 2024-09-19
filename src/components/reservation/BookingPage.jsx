import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <>
      <div className="container">
        <div className="container_inner">
          <h1 className="booking_heading">Book A Table 🍋</h1>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
};

export default BookingPage;
