import { CycleCounter } from '../src/cycleCounter.js';

describe('CycleCounter', () => {
  let cycleCounter;

  beforeEach(() => {
    cycleCounter = new CycleCounter();
  });

  test('should correctly increment cycle count', () => {
    cycleCounter.increment();
    expect(cycleCounter.count).toBe(1);
  });

  test('should correctly reset cycle count', () => {
    cycleCounter.increment();
    cycleCounter.reset();
    expect(cycleCounter.count).toBe(0);
  });
});