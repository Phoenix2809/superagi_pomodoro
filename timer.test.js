import { Timer } from '../src/timer.js';

describe('Timer', () => {
  let timer;

  beforeEach(() => {
    timer = new Timer();
  });

  test('should correctly set work timer', () => {
    timer.setWorkTime(30);
    expect(timer.workTime).toBe(30);
  });

  test('should correctly set break timer', () => {
    timer.setBreakTime(10);
    expect(timer.breakTime).toBe(10);
  });

  test('should start timer correctly', () => {
    jest.useFakeTimers();
    timer.start();
    expect(setInterval).toHaveBeenCalledTimes(1);
  });

  test('should pause timer correctly', () => {
    jest.useFakeTimers();
    timer.start();
    timer.pause();
    expect(clearInterval).toHaveBeenCalledTimes(1);
  });

  test('should reset timer correctly', () => {
    timer.setWorkTime(30);
    timer.reset();
    expect(timer.workTime).toBe(25);
    expect(timer.breakTime).toBe(5);
  });

});