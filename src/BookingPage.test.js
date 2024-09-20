import { initializeTimes, updateTimes } from "./components/reservation/BookingPage";

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
