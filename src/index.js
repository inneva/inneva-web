import React from 'react'
import ReactDOM from 'react-dom'
import { createClient } from 'contentful'

import App from './App'
import './index.css'

// store contentful client in window
window.client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN
})

ReactDOM.render(<App />, document.getElementById('root'))
