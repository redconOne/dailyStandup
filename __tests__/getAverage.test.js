const getAverage = require('../code/getAverage');

test('Testing getAverage', () => {
  expect(getAverage([1, 1, 1, 1, 1])).toStrictEqual(1);
  expect(getAverage([2, 2, 2, 2])).toStrictEqual(2);
  expect(getAverage([1, 2, 3, 4, 5])).toStrictEqual(3);
});
