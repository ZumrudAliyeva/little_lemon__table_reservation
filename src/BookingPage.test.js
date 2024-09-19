import { initializeTimes, updateTimes } from "./components/reservation/BookingPage";

describe('Booking Times Reducer', () => {
  // Test for initializeTimes
  test('initializeTimes returns the expected array of times', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });

  // Test for updateTimes
  test('updateTimes returns the same value when action type is not recognized', () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = { type: 'UNKNOWN_ACTION' };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });

  test('updateTimes updates times based on "UPDATE_TIMES" action', () => {
    const initialState = [];
    const action = { type: 'UPDATE_TIMES', payload: '2023-09-15' };
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = updateTimes(initialState, action);
    expect(result).toEqual(expectedTimes);
  });
});
