const nthSmallest = require('../code/nthSmallest');

test('Testing nthSmallest', () => {
  expect(nthSmallest([3, 1, 2], 2)).toStrictEqual(2);
  expect(nthSmallest([15, 20, 7, 10, 4, 3], 3)).toStrictEqual(7);
  expect(nthSmallest([15, 20, 7, 10, 4, 3], 5)).toStrictEqual(15);
  expect(nthSmallest([177, 225, 243, -169, -12, -5, 2, 92], 5)).toStrictEqual(
    92
  );
});
