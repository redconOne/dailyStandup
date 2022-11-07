const duplicateEncode = require('../code/duplicateEncode');

test('Testing duplicateEncode', () => {
  expect(duplicateEncode('din')).toStrictEqual('(((');
  expect(duplicateEncode('recede')).toStrictEqual('()()()');
  expect(duplicateEncode('Success')).toStrictEqual(')())())');
  expect(duplicateEncode('(( @')).toStrictEqual('))((');
});
