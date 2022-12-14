const maxCharacter = require('../code/maxCharacter');

test('Testing maxCharacter', () => {
  expect(maxCharacter('Hello world')).toStrictEqual('l');
  expect(maxCharacter('lorem ipsum')).toStrictEqual('m');
});
