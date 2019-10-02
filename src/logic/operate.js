import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);
  switch (operation) {
    case '+':
      return x.plus(y).toString();
    case '-':
      return x.minus(y).toString();
    case 'X':
      return x.times(y).toString();
    case '÷':
      return x.div(y).toString();
    default:
      return 0;
  }
};

export default operate;
