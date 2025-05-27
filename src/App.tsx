import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import routes from './util/Route'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
         {routes.map((route,index)=>(
            <Route path={route.patch} element={route.page}/>
         ))}
          
        </Routes>
      </Router>
    </>
  )
}

export default App
