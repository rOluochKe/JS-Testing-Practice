const calculator = {
  add: (...numbers) => {
    if ([...numbers].some(element => typeof element !== 'number')) return 'Some element is not a number';
    return [...numbers].reduce((acc, number) => acc + number);
  },

  subtract: (...numbers) => {
    if ([...numbers].some(element => typeof element !== 'number')) return 'Some element is not a number';
    return [...numbers].reduce((acc, number) => acc - number);
  },

  multiply: (...numbers) => {
    if ([...numbers].some(element => typeof element !== 'number')) return 'Some element is not a number';
    return [...numbers].reduce((acc, number) => acc * number, 1);
  },

  divide: (...numbers) => {
    if ([...numbers].some(element => typeof element !== 'number')) return 'Some element is not a number';
    if ([...numbers].some(element => element === 0)) return 'Divide by 0 is not a valid operation';
    const array = [...numbers];
    let temp;
    temp = array[0] / array[1];
    for (let i = 2; i < array.length; i += 1) {
      temp /= array[i];
    }
    return temp;
  },
};

module.exports = calculator;
