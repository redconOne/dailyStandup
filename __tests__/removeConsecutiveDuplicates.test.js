const removeConsecutiveDuplicates = require('../code/removeConsecutiveDuplicates');

test('Testing removeConsecutiveDuplicates', () => {
  expect(
    removeConsecutiveDuplicates(
      'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
    )
  ).toStrictEqual('alpha beta gamma delta alpha beta gamma delta');
});
