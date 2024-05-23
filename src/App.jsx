import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className='w-screen font-sora bg-purple-50 '>
      <div className='w-full max-w-[1440px] mx-auto font-sora bg-purple-50'>
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
