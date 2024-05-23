import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'


function App() {


  return (
    <div className='w-full max-w-[1440px] mx-auto font-sora min-h-screen bg-purple-50'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
