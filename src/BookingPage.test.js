import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { initializeTimes, updateTimes } from "./components/reservation/BookingPage";
import BookingForm from "./components/reservation/BookingForm";


describe('Booking Times Reducer', () => {
  beforeEach(() => {
    // Mock window.fetchAPI before each test
    global.window.fetchAPI = jest.fn();
  });

  // Test for initializeTimes
  test('initializeTimes returns the expected array of times', () => {
    // Mocked data to return from fetchAPI
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    
    // Mock the fetchAPI function to return the expected times
    window.fetchAPI.mockReturnValue(expectedTimes);

    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
  });

  // Test for updateTimes with an unknown action
  test('updateTimes returns the same state when action type is not recognized', () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = { type: 'UNKNOWN_ACTION' };
    
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });

  // Test for updateTimes when a valid action is dispatched
  test('updateTimes updates times based on "UPDATE_TIMES" action', () => {
    const initialState = [];
    const action = { type: 'UPDATE_TIMES', payload: '2023-09-15' };
    
    // Mock the fetchAPI to return the times based on the payload
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    window.fetchAPI.mockReturnValue(expectedTimes);

    const result = updateTimes(initialState, action);
    expect(result).toEqual(expectedTimes);
    expect(window.fetchAPI).toHaveBeenCalledWith(new Date('2023-09-15'));
  });
});

// Now we test Booking Form validation.
describe("BookingForm", () => {
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();
  const availableTimes = ["17:00", "18:00", "19:00"];

  test("should have required attributes on inputs", () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    
    const dateInput = screen.getByLabelText(/Choose date \*/i);
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("required");

    const timeSelect = screen.getByLabelText(/Choose time \*/i);
    expect(timeSelect).toHaveAttribute("required");

    const guestsInput = screen.getByLabelText(/Number of guests \*/i);
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("required");

    const occasionSelect = screen.getByLabelText(/Occasion \*/i);
    expect(occasionSelect).toHaveAttribute("required");
  });

  test("form is invalid when fields are empty", () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    
    const submitButton = screen.getByText(/Make Your Reservation/i);
    expect(submitButton).toBeDisabled();
  });

  test("form is valid when all fields are filled correctly", async () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
    const today = new Date().toISOString().split("T")[0];
  
    // Simulate filling out the form fields
    fireEvent.change(screen.getByLabelText(/Choose date \*/i), { target: { value: today } });
    fireEvent.change(screen.getByLabelText(/Choose time \*/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/Number of guests \*/i), { target: { value: 2 } });
    fireEvent.change(screen.getByLabelText(/Occasion \*/i), { target: { value: "Birthday" } });
  
    // Wait for state updates and button enablement
    const submitButton = screen.getByText(/Make Your Reservation/i);
    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });
  });  
  
});
