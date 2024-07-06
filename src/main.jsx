import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import General from './components/General'
import Educational from './components/Educational'
import Practical from './components/Experience'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <General />
    <Educational />
    <Practical />
  </React.StrictMode>,
)
