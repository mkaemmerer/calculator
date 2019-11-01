import React from 'react'
import { connect } from 'react-redux'
import { digit, operator, equals, reset } from '../store'

import Button from './button'
import './calculator.css'

const Calculator = ({ result, activeOperator, digit, operator, equals, reset }) => (
  <div className="calculator">
    <div className="calculator_result">{result}</div>
    <div className="calculator_keypad">
      <Button onClick={digit(7)}>7</Button> <Button onClick={digit(8)}>8</Button> <Button onClick={digit(9)}>9</Button>
      <Button onClick={digit(4)}>4</Button> <Button onClick={digit(5)}>5</Button> <Button onClick={digit(6)}>6</Button>
      <Button onClick={digit(1)}>1</Button> <Button onClick={digit(2)}>2</Button> <Button onClick={digit(3)}>3</Button>
      <Button onClick={digit(0)}>0</Button>
    </div>
    <div className="calculator_operators-right">
      <Button color="orange" isActive={activeOperator === '÷'} onClick={operator('÷')}>÷</Button>
      <Button color="orange" isActive={activeOperator === '×'} onClick={operator('×')}>×</Button>
      <Button color="orange" isActive={activeOperator === '-'} onClick={operator('-')}>-</Button>
      <Button color="orange" isActive={activeOperator === '+'} onClick={operator('+')}>+</Button>
      <Button color="orange" onClick={equals}>=</Button>
    </div>
    <div className="calculator_operators-top">
      <Button onClick={reset}>Clear</Button>
    </div>
  </div>
)

const mapStateToProps = state => ({
  result:         state.numbers[state.numbers.length - 1],
  activeOperator: state.operator,
})
const mapDispatchToProps = dispatch => ({
  digit:    (n) => () => dispatch(digit(n)),
  operator: (op) => () => dispatch(operator(op)),
  equals:   () => dispatch(equals()),
  reset:    () => dispatch(reset()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculator)
