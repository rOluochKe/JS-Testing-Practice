const analyze = (arr) => {
  if (!Array.isArray(arr)) return 'The input is not a array';
  const { length } = arr;

  if (arr.length === 0) {
    return {
      average: 0,
      length: 0,
      max: 0,
      min: 0,
    };
  }

  const arrayAverage = (arr) => arr.reduce((a, b) => a + b, 0) / length;
  const average = arrayAverage(arr);
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return {
    average,
    length,
    max,
    min,
  };
};

module.exports = analyze;