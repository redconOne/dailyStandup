const majorityElement = require('../code/majorityElement');

test('Testing majorityElement', () => {
  expect(majorityElement([3, 2, 3])).toStrictEqual(3);
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toStrictEqual(2);
});
