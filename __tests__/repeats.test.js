const repeats = require('../code/repeats');

test('Testing repeats', () => {
  expect(repeats([4, 5, 7, 5, 4, 8])).toStrictEqual(15);
  expect(repeats([9, 10, 19, 13, 19, 13])).toStrictEqual(19);
  expect(repeats([16, 0, 11, 4, 8, 16, 0, 11])).toStrictEqual(12);
  expect(repeats([5, 47, 18, 11, 13, 18, 11, 13])).toStrictEqual(52);
  expect(repeats([5, 10, 19, 13, 10, 13])).toStrictEqual(24);
});
