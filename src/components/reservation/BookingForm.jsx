import React, { useState } from "react";

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");

const clearForm = () => {
  setDate('')
  setTime('')
  setGuests(1)
  setOccasion('')
}

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData);
    clearForm()
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
  setDate(selectedDate);
  dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  return (
    <>
      <form id="booking_form" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="res_date">Choose date *</label>
        <input
          type="date"
          id="res_date"
          name="res_date"
          value={date}
          onChange={handleDateChange}
          required
        />
        </div>
        <div>
        <label htmlFor="res_time">Choose time *</label>
        <select
          id="res_time"
          name="res_time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value='' disabled>Select time</option>
          {
            availableTimes.map((time, index) => (
              <option key={index}>{time}</option>
            ))
          }
        </select>
        </div>
        <div>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        </div>
        <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value='' disabled>Select occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        </div>
        <button type="submit">Make Your reservation</button>
      </form>
    </>
  );
};

export default BookingForm;
