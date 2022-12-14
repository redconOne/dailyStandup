const ransomNote = require('../code/ransomNote');

const magazine =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

test('Testing ransomNote', () => {
  expect(ransomNote('sit ad est sint', magazine)).toStrictEqual(true);
  expect(ransomNote('sit ad est love', magazine)).toStrictEqual(false);
  expect(ransomNote('sit ad est sint in in', magazine)).toStrictEqual(true);
  expect(ransomNote('sit ad est sint in in in in', magazine)).toStrictEqual(
    false
  );
});
