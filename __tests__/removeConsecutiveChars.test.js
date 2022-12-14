const removeConsecutiveChars = require('../code/removeConsecutiveChars');

test('Testing removeConsecutiveChars', () => {
  expect(
    removeConsecutiveChars(['abracadabra', 'allottee', 'assessee'])
  ).toStrictEqual(['abracadabra', 'alote', 'asese']);
  expect(removeConsecutiveChars(['kelless', 'keenness'])).toStrictEqual([
    'keles',
    'kenes',
  ]);
  expect(
    removeConsecutiveChars([
      'ccoodddddewwwaaaarrrrssss',
      'piccaninny',
      'hubbubbubboo',
    ])
  ).toStrictEqual(['codewars', 'picaniny', 'hubububo']);
});
