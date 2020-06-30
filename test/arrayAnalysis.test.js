const analyze = require('../src/js/arrayAnalysis');

test('array analysis', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Analyze array of numbers (1)', () => {
  expect(analyze([4, 5, 8, 12, 4, 90])).toEqual({
    average: 20.5,
    min: 4,
    max: 90,
    length: 6,
  });
});

test('Analyze array of number (2)', () => {
  expect(analyze([4])).toEqual({
    average: 4,
    min: 4,
    max: 4,
    length: 1,
  });
});

test('Analyze array of null (3)', () => {
  expect(analyze([])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  });
});

test('Analyze array of null (4)', () => {
  expect(analyze([0, 0, 0, 0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 4,
  });
});