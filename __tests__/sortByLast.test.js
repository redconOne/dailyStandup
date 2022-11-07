const sortByLast = require('../code/sortByLast');

test('Testing for sortByLast', () => {
  expect(sortByLast('man i need a taxi up to ubud')).toStrictEqual(
    'a need ubud i taxi man to up'.split(' ')
  );
  expect(sortByLast('what time are we climbing up the volcano')).toStrictEqual(
    'time are we the climbing volcano up what'.split(' ')
  );
  expect(sortByLast('take me to semynak')).toStrictEqual(
    'take me semynak to'.split(' ')
  );
});
