import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import BookingPage from "./components/reservation/BookingPage";
import ConfirmedBooking from "./components/reservation/ConfirmedBooking";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
