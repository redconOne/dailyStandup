const stringReversal = require('../code/stringReversal');

test('Testing stringReversal', () => {
  expect(stringReversal('Hello world!')).toBe('!dlrow olleH');
  expect(stringReversal('')).toBe('');
  expect(stringReversal('abcdefghijklmnopqrstuvwxyz')).toBe(
    'zyxwvutsrqponmlkjihgfedcba'
  );
});
