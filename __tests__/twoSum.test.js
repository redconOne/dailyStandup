const twoSum = require('../code/twoSum');

test('Testing twoSum', () => {
  expect(twoSum([1, 2, 2, 3, 4], 4)).toStrictEqual([
    [2, 2],
    [3, 1],
  ]);
});
