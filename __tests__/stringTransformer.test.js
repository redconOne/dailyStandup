const stringTransformer = require('../code/stringTransformer');

test('Testing stringTransformer', () => {
  expect(stringTransformer('Example Input')).toStrictEqual('iNPUT eXAMPLE');
  expect(
    stringTransformer('To be OR not to be That is the Question')
  ).toStrictEqual('qUESTION THE IS tHAT BE TO NOT or BE tO');
  expect(stringTransformer('A b C d E f G')).toStrictEqual('g F e D c B a');
});
