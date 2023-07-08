import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route,Link, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Homepage from './components/Pages/Homepage/Homepage'
import Team from './components/Pages/Team/Team'
import Blogs from './components/Pages/Blogs/Blogs'
import Initiatives from './components/Pages/Initiatives/Initiatives'

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
    path: '/',
    element: <Homepage></Homepage>
  },
  {
    path:'team',
    element: <Team></Team>
  },
  {
    path:'blogs',
    element:<Blogs></Blogs>
  },
  {
    path:'initiatives',
    element:<Initiatives></Initiatives>
  }
])

  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App
