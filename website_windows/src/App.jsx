import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './Screen/First'
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <First />
  </Router>
  )
}

export default App
