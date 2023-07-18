import { alertUser } from '../src/alert.js';

describe('alertUser', () => {
  test('should alert user correctly', () => {
    window.alert = jest.fn();
    alertUser();
    expect(window.alert).toHaveBeenCalledWith('Time is up!');
  });
});