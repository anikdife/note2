import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pad from './components/Pad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Pad/>
    </div>
  )
}

export default App
