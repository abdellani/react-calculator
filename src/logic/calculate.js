import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  switch (buttonName) {
    case 'AC':
      return {
        total: 0,
      };
    case '%':
      if (next) {
        return {
          total,
          operation,
          next: next / 100,
        };
      }
      return {
        total: total / 100,
      };

    case '+/-':
      if (next) {
        return {
          total,
          operation,
          next: -next,
        };
      }
      return {
        total: -total,
      };

    case '=':
      if (operation) {
        return { total: operate(total, next, operation) };
      }
      return { total: (total) || 0 };

    case '+':
    case '-':
    case 'X':
    case '÷':
      if (operation) {
        return {
          total: operate(total, next, operation),
          operation: buttonName,
        };
      }
      return {
        total,
        operation: buttonName,
      };

    default:
      if (next) {
        return {
          total,
          operation,
          next: next + buttonName,
        };
      }
      return {
        total: total + buttonName,
      };
  }
};

export default calculate;
