const arrayCombinations = require('../code/arrayCombinations');

test('Testing arrayCombinations', () => {
  expect(arrayCombinations([[1, 2], [4], [5, 6]])).toStrictEqual(4);
  expect(
    arrayCombinations([
      [1, 2],
      [4, 4],
      [5, 6, 6],
    ])
  ).toStrictEqual(4);
  expect(
    arrayCombinations([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
  ).toStrictEqual(8);
  expect(
    arrayCombinations([
      [1, 2, 3],
      [3, 4, 6, 6, 7],
      [8, 9, 10, 12, 5, 6],
    ])
  ).toStrictEqual(72);
});
