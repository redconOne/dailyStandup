const middleTriplet = require('../code/middleTriplet');

test('Basic Testing', () => {
  expect(middleTriplet([2, 3, 1])).toBe(0);
  expect(middleTriplet([5, 10, 14])).toBe(1);
});

test('Testing for floats', () => {
  expect(middleTriplet([2.1, 3.2, 1.4])).toBe(0);
  expect(middleTriplet([5.9, 10.4, 14.2])).toBe(1);
});

test('Testing negative numbers', () => {
  expect(middleTriplet([-2, -3, -1])).toBe(0);
  expect(middleTriplet([-5, -10, -14])).toBe(1);
});

test('Testing for mixed numbers', () => {
  expect(middleTriplet([-2, -3.2, 1])).toBe(0);
  expect(middleTriplet([-5.2, -10.6, 14])).toBe(0);
});
