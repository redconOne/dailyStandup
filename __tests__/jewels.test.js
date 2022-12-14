const jewelsInStones = require('../code/jewels');

test('Testing jewelsInStones', () => {
  expect(jewelsInStones('aA', 'aAAbbbb')).toStrictEqual(3);
  expect(jewelsInStones('z', 'ZZ')).toStrictEqual(0);
});
