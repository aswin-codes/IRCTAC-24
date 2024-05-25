import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Info from './components/Info';
import About from './components/About';
import Footer from './components/Footer';
import Patrons from './components/Patrons';
import RegistrationFeeTable from './components/Register';
import Submission from './components/Submission';
import Speakers from './components/Speakers';
import Committee from './components/Committee';
import Travel from './components/Travel';
import ContactUs from './components/ContactUs';

function App() {
    return (
        <div className='w-screen font-sora bg-purple-50'>
            <div className=' font-sora '>
                <Navbar />
                <section id='home'>
                    <Home />
                    <Info />
                    <About />
                </section>
                <Patrons />
                <RegistrationFeeTable />
                <Submission />
                <Speakers/>                
                <Committee/>
                <Travel/>
                <ContactUs/>
                <Footer />
            </div>

        </div>
    );
}

export default App;
