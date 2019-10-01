import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  switch (buttonName) {
    case 'AC':
      return {
        total: (0).toString(),
        operation:null,
        next:null
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
        operation:null,
        next:null
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
        operation:null,
        next:null
      };

    case '=':
      if (operation) {
        return { 
          total: operate(total, next, operation),
          operation:null,
          next:null
         };
      }
      return { total: (total) || (0).toString() };

    case '+':
    case '-':
    case 'X':
    case '÷':
      if (operation) {
        return {
          total: operate(total, next, operation),
          operation: buttonName,
          next:null
        };
      }
      return {
        total,
        operation: buttonName,
        next:null
      };

    default:
      if (operation) {
        return {
          total,
          operation,
          next: [next , buttonName].join(""),
        };
      }
      return {
        total: [total,buttonName].join(""),
        operation:null,
        next:null
      };
  }
};

export default calculate;
