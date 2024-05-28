import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Cal from '../assets/calendar.png';
import Clo from '../assets/clock.png';
import VIT from '../assets/vit.jpg';
import VITL from '../assets/vitlogo.png';
import UI from '../assets/ui.png';
import UPM from '../assets/upm.png';
import BIS from '../assets/bis.png';

const Home = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            reset: false,
            opacity: 0,
        });

        sr.reveal('.calendar', { delay: 200 });
        sr.reveal('.clock', { delay: 400 });
        sr.reveal('.title', { delay: 600 });
        sr.reveal('.subtitle', { delay: 800 });
        sr.reveal('.organized', { delay: 1000 });
        sr.reveal('.logos', { delay: 1200 });
        sr.reveal('.image', { delay: 1400 });
        sr.reveal('.logos-row-1', { delay: 1600 });
        sr.reveal('.logos-row-2', { delay: 1800 });
    }, []);

    return (
        <div className=''>
            <div className='px-6 sm:px-10 lg:px-20 py-10 sm:py-0 flex flex-wrap gap-5 w-full max-w-[1440px] mx-auto mb-16'>
                <div className='flex-1 flex-col flex justify-center min-w-full sm:min-w-[450px] mt-10'>
                    <div className='flex flex-row items-center justify-between px-4'>
                        <div className='flex gap-2 items-center calendar'>
                            <img className='w-6 h-6 sm:w-8 sm:h-8' src={Cal} alt='calendar' />
                            <p className='text-xs sm:text-lg font-semibold'>14th & 15th November 2024</p>
                        </div>
                        <div className='flex gap-2 items-center clock'>
                            <img className='w-6 h-6 sm:w-8 sm:h-8' src={Clo} alt='clock' />
                            <p className='text-xs sm:text-lg font-semibold'>8:00 AM</p>
                        </div>
                    </div>
                    <div className='mt-4 mx-auto sm:px-4 title'>
                        <p className='text-lg sm:text-2xl text-center text-purple-800 font-semibold'>
                            7th INTERNATIONAL CONFERENCE ON RECENT TRENDS IN ADVANCED COMPUTING (ICRTAC'24)
                        </p>
                    </div>
                    <div className='mt-8 sm:mt-16 subtitle'>
                        <p className='text-center text-base sm:text-xl font-semibold'>
                           Theme :  “Automating Sustainability: Bridging SDG Goals with Recent Trends in Advanced Computing at ICRTAC'24”
                        </p>
                    </div>
                    <div className='mt-10 sm:mt-14 organized'>
                        <p className='mx-auto w-fit font-semibold text-base sm:text-xl'>Organized By</p>
                    </div>
                    <div className='mt-4 font-semibold text-base sm:text-xl w-5/6 mx-auto text-center logos'>
                        <p className='text-purple-800'>
                            School of Computer Science and Engineering, Vellore Institute of Technology, Chennai, India
                        </p>
                        <p className='text-center mt-1'>With</p>
                        <p className='text-mred mt-1'>
                            Faculty of Computer Science and Information, Universiti Putra Malaysia, Malaysia
                            {/* <span className='text-black'>,</span> */}
                        </p>
                        {/* <p className='text-mblue mt-1'>
                            Bureau of Indian Standards<span className='text-black'> & </span>
                        </p>
                        <p className='text-morange mt-1'>UiPath</p> */}
                    </div>
                </div>
                <div className="flex-1 flex-col flex justify-center min-w-full sm:min-w-96 sm:mt-0 mt-10">
                    <div className='my-2 mx-3 sm:mx-10 image'>
                        <img src={VIT} alt='VIT' className='h-80 w-full object-cover rounded-lg' />
                    </div>
                    <div className='flex justify-around px-10 mt-10 items-center logos-row-1'>
                        <a href='https://chennai.vit.ac.in/'><img src={VITL} alt='VIT Logo' className='object-contain h-16 sm:h-20' /></a>
                        <a href='https://www.upm.edu.my/?L=en'><img src={UPM} alt='BIS Logo' className='object-contain h-16 sm:h-20' /></a>
                    </div>
                    <div className='flex justify-around px-10 mt-3 items-center logos-row-2'>
                    <a href='https://www.bis.gov.in/'> <img src={BIS} alt='UPM Logo' className='object-contain h-16 sm:h-20' /></a>
                    <a href='https://www.uipath.com/'> <img src={UI} alt='UIpath Logo' className='object-contain h-16 sm:h-20' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
