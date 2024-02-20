import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Add from './Add'
import {Routes, Route,BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Signup />
    <BrowserRouter>
      <Routes>
          <Route path='/' element={ <Home/> }></Route>
          <Route path='/register' element={ <Signup/> }></Route>
          <Route path='/login' element={ <Login/> }></Route>
          <Route path='/add' element={ <Add/> }></Route>

          {/* Private Route  */}
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
