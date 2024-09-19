import React, { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date, time, guests, occasion);
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
          onChange={(e) => setDate(e.target.value)}
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
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
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
