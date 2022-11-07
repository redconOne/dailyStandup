const lastEvens = require('../code/lastEvens');

test('Testing lastEvens', () => {
  expect(lastEvens([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toStrictEqual([4, 6, 8]);
  expect(
    lastEvens([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)
  ).toStrictEqual([-8, 26]);
  expect(lastEvens([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)).toStrictEqual([6]);
});
