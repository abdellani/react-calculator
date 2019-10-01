import Big from "big.js"

let operate = (numberOne, numberTwo, operation) => {
  let x=Big(numberOne)
  let y=Big(numberTwo)
  switch (operation) {
    case "+":
      return x.plus(y)
    case "-":
      return x.minus(y)
    case "X":
      return x.times(y)
    case "÷":
      return x.div(y)
  }
}

export default operate;