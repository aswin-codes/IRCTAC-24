import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Info from './components/Info';
import About from './components/About';
import Footer from './components/Footer';

function App() {
    return (
        <div className='w-screen font-sora bg-purple-50'>
            <div className='w-full max-w-[1440px] mx-auto font-sora bg-purple-50'>
                <Navbar />
                <Home />
                <Info/>
                <About/>
               
            </div>
            <Footer/>
        </div>
    );
}

export default App;
