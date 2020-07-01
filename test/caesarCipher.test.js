const caesarCipher = require('../src/js/caesarCipher');

test('Test the cipher with a key of 1', () => {
  expect(caesarCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('Test the cipher with a key of 1', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
});

test('Test the cipher with a key of 5', () => {
  expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
});
