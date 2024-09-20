import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = window.submitAPI(formData);
    if (success) {
      navigate("/confirmation");
    }
  };

  return (
    <>
      <div className="container">
        <div className="container_inner">
          <h1 className="booking_heading">Book A Table 🍋</h1>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </div>
      </div>
    </>
  );
};

export default BookingPage;
