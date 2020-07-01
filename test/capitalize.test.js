const capitalizeString = require('../src/js/capitalize');

test('Capitalization of the first character in a String', () => {
  expect(capitalizeString('test string')).toBe('Test string');
});

test('Capitalization of the first character in a String', () => {
  expect(capitalizeString(1234)).toBe('The input is not a string');
});

test('Capitalization of the first character in a String', () => {
  expect(capitalizeString([1, 2, 3])).toBe('The input is not a string');
});

test('Capitalization of the first character in a String', () => {
  expect(capitalizeString(['words', 'array'])).toBe('The input is not a string');
});

test('Capitalization of the first character in a String', () => {
  expect(capitalizeString({ key: 'value' })).toBe('The input is not a string');
});
