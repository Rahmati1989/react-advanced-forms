// 👉 Importing React libs from node_modules folder
import React from 'react'
import { render } from 'react-dom'
import "./styles.css"

// 👉 Importing the top-level component
import App from './components/App'

render(
  <App />
  , document.querySelector('#root')
)
