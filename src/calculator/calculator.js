import React from 'react'

import Button from './button'
import './calculator.css'

const Calculator = ({ result }) => (
  <div className="calculator">
    <div className="calculator_result">{result}</div>
    <div className="calculator_keypad">
      <Button>7</Button> <Button>8</Button> <Button>9</Button>
      <Button>4</Button> <Button>5</Button> <Button>6</Button>
      <Button>1</Button> <Button>2</Button> <Button>3</Button>
      <Button>0</Button>
    </div>
    <div className="calculator_operators-right">
      <Button color="orange">÷</Button>
      <Button color="orange">×</Button>
      <Button color="orange">-</Button>
      <Button color="orange">+</Button>
      <Button color="orange">=</Button>
    </div>
    <div className="calculator_operators-top">
      <Button>Clear</Button>
    </div>
  </div>
)

export default Calculator
