import React from 'react'
import ReactDOM from 'react-dom/client'
import Clock from './components/Clock/Clock'
import LogonCompass from './components/containers/main_content/LogonCompass'
import Weather from './components/Weather/Weather'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <LogonCompass/> */}
    <Clock/>
    <Weather/>
  </React.StrictMode>
)
