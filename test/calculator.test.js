const calculator = require('../src/js/calculator');

test('Test the standar operations of a calculator', () => {
  expect(calculator.add(1, 2, 3)).toBe(6);
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.add(1, 1, 1, 1, 1, 1)).toBe(6);
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.add(5, 10, 20, -20)).toBe(15);
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.add(5, 10, 20, 'im not a number')).toBe('Some element is not a number');
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.subtract(5, 5)).toBe(0);
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.subtract(5, 5, 5)).toBe(-5);
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.subtract(5, 5, 5, -10)).toBe(5);
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.subtract(5, 1, 5, 'im not a number')).toBe('Some element is not a number');
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.multiply(1, 1, 1)).toBe(1);
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.multiply(2, 2, 2)).toBe(8);
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.multiply(1, 0, 1, 2, 4)).toBe(0);
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.multiply(5, 1, 5, 'im not a number')).toBe('Some element is not a number');
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.divide(8, 2, 2)).toBe(2);
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.divide(16, 4)).toBe(4);
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.divide(100, 2, 2)).toBe(25);
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.divide(16, 0)).toBe('Divide by 0 is not a valid operation');
});

test('Test the standar operations of a calculator', () => {
  expect(calculator.divide(5, 1, 5, 'im not a number')).toBe('Some element is not a number');
});