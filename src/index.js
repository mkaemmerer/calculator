import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './calculator'

const container = document.getElementById('app')

ReactDOM.render(<Calculator result={100} />, container)
