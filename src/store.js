import { createStore } from 'redux'

// Actions
export const digit = n => ({
  type: 'DIGIT',
  digit: n,
})
export const operator = op => ({
  type: 'OPERATOR',
  operator: op,
})
export const equals = () => ({
  type: 'EQUALS',
})
export const reset = () => ({
  type: 'RESET',
})

// Reducer
const initialCalculatorState = {
  numbers: [0],
  operator: null,
}
const applyOperator = (operator, number1, number2) => {
  switch(operator) {
    case '÷': return (number1 / number2).toFixed(4)
    case '×': return number1 * number2
    case '-': return number1 - number2
    case '+': return number1 + number2
  }
}
const calculatorReducer = (state = initialCalculatorState, action) => {
  switch (action.type) {
    case 'DIGIT': {
      // If the operator hasn't been chosen yet, write to register 1
      // Otherwise, write to register 2
      if(!state.operator) {
        const [n1] = state.numbers
        return {
          numbers: [n1 * 10 + action.digit],
          operator: state.operator,
        }
      } else {
        const [n1, n2 = 0] = state.numbers
        return {
          numbers: [n1, n2 * 10 + action.digit],
          operator: state.operator,
        }
      }
    }
    case 'OPERATOR': {
      // If both numbers have been chosen, apply the operator
      // Otherwise, set the operator and leave the number registers unchanged
      if(state.numbers.length > 1) {
        const [n1, n2] = state.numbers
        const result = applyOperator(state.operator, n1, n2)
        return {
          numbers: [result],
          operator: action.operator,
        }
      } else {
        return {
          numbers: state.numbers,
          operator: action.operator,
        }
      }
    }
    case 'EQUALS': {
      // If the operator hasn't been chosen yet, don't do anything
      // Otherwise, compute the result
      if(!state.operator) {
        return state
      } else {
        const [n1, n2 = n1] = state.numbers
        const result = applyOperator(state.operator, n1, n2)
        return {
          numbers: [result],
          operator: null,
        }
      }
    }
    case 'RESET':
      return initialCalculatorState
    default:
      return state
  }
}

// Store
export const store = createStore(calculatorReducer)
