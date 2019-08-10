import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import * as serviceWorker from './serviceWorker'

import App from './components/App'
/* import './styles/index.css' */

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, sans-serif;
  }
  input {
    max-width: 500px;
  }
  .gray {
    color: #828282;
  }
  .orange {
    background-color: #ff6600;
  }
  .background-gray {
    background-color: rgb(246, 246, 239);
  }
  .f11 {
    font-size: 11px;
  }
  .w85 {
    width: 85%;
  }
`

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
