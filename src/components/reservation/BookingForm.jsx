import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = () => {
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .min(1, "Must have at least 1 guest")
        .max(10, "Cannot exceed 10 guests")
        .required("Number of guests is required"),
      occasion: Yup.string().required("Occasion is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      
      alert("Booking successful!");
      resetForm(); 
    },
  });

  return (
    <form id="booking_form" onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="res_date">Choose date *</label>
        <input
          type="date"
          id="res_date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.date && formik.errors.date ? (
          <div>{formik.errors.date}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="res_time">Choose time *</label>
        <select
          id="res_time"
          name="time"
          value={formik.values.time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="" disabled>
            Select time
          </option>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        {formik.touched.time && formik.errors.time ? (
          <div>{formik.errors.time}</div>
        ) : null}
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
          value={formik.values.guests}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.guests && formik.errors.guests ? (
          <div>{formik.errors.guests}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="" disabled>
            Select occasion
          </option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
          <div>{formik.errors.occasion}</div>
        ) : null}
      </div>
      <button type="submit">Make Your reservation</button>
    </form>
  );
};

export default BookingForm;
