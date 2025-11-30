import { add } from './service.js';

describe('service test', () => {
  it('should test', () => {
    const result = add(1, 1);

    expect(result).toBe(2);
  });
});
