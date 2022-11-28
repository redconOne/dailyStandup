const dup = require('../code/stringArrayDuplicates');

test('Testing for stringArrayDuplicates', () => {
  expect(
    dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo'])
  ).toStrictEqual(['codewars', 'picaniny', 'hubububo']);

  expect(dup(['abracadabra', 'allottee', 'assessee'])).toStrictEqual([
    'abracadabra',
    'alote',
    'asese',
  ]);
});
