import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);
  switch (operation) {
    case '+':
      return x.plus(y);
    case '-':
      return x.minus(y);
    case 'X':
      return x.times(y);
    case '÷':
      return x.div(y);
    default:
      return 0;
  }
};

export default operate;
