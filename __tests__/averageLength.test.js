const averageLength = require('../code/averageLength');

test('Testing averageLength', () => {
  expect(averageLength(['u', 'y'])).toStrictEqual(['u', 'y']);
  expect(averageLength(['aa', 'bbb', 'cccc'])).toStrictEqual([
    'aaa',
    'bbb',
    'ccc',
  ]);
  expect(averageLength(['aa', 'bb', 'ddd', 'eee'])).toStrictEqual([
    'aaa',
    'bbb',
    'ddd',
    'eee',
  ]);
});
