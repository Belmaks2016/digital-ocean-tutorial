import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './App'

const app = ReactDOMClient.createRoot(document.getElementById("app"));//object, we will place all information
app.render(<App />)// method render let us to place all information

