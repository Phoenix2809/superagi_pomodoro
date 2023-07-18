import { displayRemainingTime } from '../src/display.js';

describe('displayRemainingTime', () => {
  document.body.innerHTML = '<div id="timer"></div>';
  const timerElement = document.getElementById('timer');

  test('should correctly display remaining time', () => {
    displayRemainingTime(10);
    expect(timerElement.textContent).toBe('00:10');
  });
});