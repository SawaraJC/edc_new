import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Homepage from './components/Pages/Homepage/Homepage'
// import Team from './components/Pages/Team/Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage/>
    </>
  )
}

export default App
