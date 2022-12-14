const countChars = require('../code/countChars');

test('Testing countChars', () => {
  expect(countChars('aba')).toStrictEqual({ a: 2, b: 1 });
  expect(countChars('Hello world')).toStrictEqual({
    H: 1,
    e: 1,
    l: 3,
    o: 2,
    ' ': 1,
    w: 1,
    r: 1,
    d: 1,
  });
  expect(countChars('')).toStrictEqual({});
});
