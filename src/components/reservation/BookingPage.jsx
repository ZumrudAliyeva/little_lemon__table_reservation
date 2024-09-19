import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <>
      <div className="container">
        <div className="container_inner">
          <h1 className="booking_heading">Book A Table 🍋</h1>
          <BookingForm />
        </div>
      </div>
    </>
  );
};

export default BookingPage;
