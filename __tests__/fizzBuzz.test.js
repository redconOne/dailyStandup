const fizzBuzz = require('../code/fizzBuzz');

test('Testing Fizz Buzz', () => {
  expect(fizzBuzz(1)).toBe([1].join('/n'));
  expect(fizzBuzz(5)).toBe([1, 2, 'Fizz', 4, 'Buzz'].join('/n'));
  expect(fizzBuzz(9)).toBe(
    [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz'].join('/n')
  );
  expect(fizzBuzz(15)).toBe(
    [
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
    ].join('/n')
  );
});
