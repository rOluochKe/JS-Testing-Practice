const reverseString = string => {
  if (typeof string !== 'string') return 'The input is not a string';
  return [...string].reverse().join('');
};

module.exports = reverseString;
