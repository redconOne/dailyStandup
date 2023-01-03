const fibonacci = require('../code/fibonacci');

test('Testing fibonacci', () => {
  expect(fibonacci(0)).toStrictEqual(0);
  expect(fibonacci(1)).toStrictEqual(1);
  expect(fibonacci(2)).toStrictEqual(1);
  expect(fibonacci(3)).toStrictEqual(2);
  expect(fibonacci(4)).toStrictEqual(3);
  expect(fibonacci(5)).toStrictEqual(5);
  expect(fibonacci(6)).toStrictEqual(8);
});
