const capitalizeString = string => {
  if (typeof string !== 'string') return 'The input is not a string';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = capitalizeString;
