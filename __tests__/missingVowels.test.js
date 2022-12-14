const missingVowels = require('../code/missingVowels');

test('Testing missingVowels', () => {
  expect(
    missingVowels('John Doe hs seven red pples under his bsk')
  ).toStrictEqual(0);
  expect(
    missingVowels('Bb Smith sent us six neatly arranged range bicycles')
  ).toStrictEqual(3);
});
