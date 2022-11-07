const findDeletedNum = require('../code/findDeletedNum');

test('Testing findDeletedNum', () => {
  expect(findDeletedNum([1, 2, 3, 4, 5], [3, 4, 1, 5])).toStrictEqual(2);
});
