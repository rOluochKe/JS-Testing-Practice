const reverseString = require('../src/js/reverseString');

test('Testing the reverse of a string', () => {
  expect(reverseString('learning')).toBe('gninrael');
});

test('Testing the reverse of a string', () => {
  expect(reverseString([1, 2, 3, 4])).toBe('The input is not a string');
});

test('Testing the reverse of a string', () => {
  expect(reverseString(['john', '3546'])).toBe('The input is not a string');
});