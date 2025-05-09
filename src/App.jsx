import React from 'react'
import './App.css'
import { Routes ,Route ,useLocation } from 'react-router-dom'
import Deleviry from './pages/Deleviry'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
function App() {
  const location = useLocation()
  // check is the current path is login or register
  const isAuthPath = location.pathname ==="/signup" ||
  location.pathname==="/login" 
  return (
    <div className={` w-screen h-screen ${isAuthPath ? `bg-amber-600`:`grid grid-cols-1 grid-rows-10 `} `}>
     {!isAuthPath&&<Navbar/>}
      <Routes>
        <Route path='/deleviry' element={<Deleviry/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  )
}
// grid grid-cols-1 grid-rows-10 gap-5
export default App