const domainName = require('../code/domainName');

test('Testing domainName for proper domain identification', () => {
  expect(domainName('https://github.com/RedconOne/acft')).toBe('github');
  expect(domainName('http://www.zombie-bites.com')).toBe('zombie-bites');
  expect(domainName('https://www.cnet.com')).toBe('cnet');
});
