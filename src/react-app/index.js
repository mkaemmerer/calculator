import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Calculator from './components/calculator'
import { store } from './store'

const App = (
  <Provider store={store}>
    <Calculator />
  </Provider>
)

render(App, document.getElementById('app'))
