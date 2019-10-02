import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  switch (buttonName) {
    case 'AC':
      return {
        total: (0).toString(),
        operation: null,
        next: null,
      };
    case '%':
      if (next) {
        return {
          total,
          operation,
          next: (next / 100).toString(),
        };
      }
      return {
        total: (total / 100).toString(),
        operation: null,
        next: null,
      };

    case '+/-':
      if (next) {
        return {
          total,
          operation,
          next: (-next).toString(),
        };
      }
      return {
        total: (-total).toString(),
        operation: null,
        next: null,
      };

    case '=':
      if (operation && operation !== '=') {
        return {
          total: operate(total, next, operation),
          operation: buttonName,
          next: null,
        };
      }
      return {
        total: (total) || (0).toString(),
        operation: buttonName,
        next: null,
      };

    case '+':
    case '-':
    case 'X':
    case '÷':
      if (operation && next) {
        return {
          total: operate(total, next, operation),
          operation: buttonName,
          next: null,
        };
      }
      return {
        total,
        operation: buttonName,
        next: null,
      };

    default:
      if (operation === '=') {
        return {
          total: buttonName,
          operation,
          next: null,
        };
      }
      if (buttonName === '.') {
        if ((next && next.indexOf('.') >= 0)
          || (total && total.indexOf('.') >= 0)
        ) {
          return {
            total,
            operation,
            next,
          };
        }
      }
      if (operation) {
        return {
          total,
          operation,
          next: [next, buttonName].join(''),
        };
      }
      return {
        total: [(total === '0' && buttonName !== '.') ? null : total, buttonName].join(''),
        operation: null,
        next: null,
      };
  }
};

export default calculate;
