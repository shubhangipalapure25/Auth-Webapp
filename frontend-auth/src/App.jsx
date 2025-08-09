import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomeDashboard from './components/HomeDashboard';
import { ThemeProvider } from './context/ThemeContext';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider>
    <HomeDashboard/>
    </ThemeProvider>
    </>
  )
}

export default App
