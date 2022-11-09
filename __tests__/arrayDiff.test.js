const arrayDiff = require('../code/arrayDiff');

test('Testing arrayDiff', () => {
  expect(arrayDiff([1, 2], [1])).toStrictEqual([2]);
  expect(arrayDiff([1, 2, 2, 2, 3], [2])).toStrictEqual([1, 3]);
  expect(arrayDiff([], [4, 5])).toStrictEqual([]);
  expect(arrayDiff([3, 4], [3])).toStrictEqual([4]);
  expect(arrayDiff([1, 8, 2], [])).toStrictEqual([1, 8, 2]);
});
