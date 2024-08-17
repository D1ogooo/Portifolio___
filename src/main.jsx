import React from 'react'
import { createRoot } from 'react-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@radix-ui/themes/styles.css';
import { theme } from "./style/theme/theme.js"
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
     <App />
   </ThemeProvider>
  </React.StrictMode>,
)
