import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

export const initializeTimes = () => {
  const today = new Date();
  return window.fetchAPI(today);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return window.fetchAPI(new Date(action.payload));
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
