import React from 'react'
import Cal from '../assets/calendar.png'
import Clo from '../assets/clock.png'

const Home = () => {
    return (
        <div className='px-6 sm:px-10 lg:px-20 pt-10 sm:pt-20 flex flex-wrap gap-5 min-h-screen'>
            <div className='flex-1 flex-col flex justify-center min-w-full sm:min-w-[450px]'>
                <div className='flex flex-row  items-center justify-between px-4'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-6 h-6 sm:w-8 sm:h-8' src={Cal} alt='calendar' />
                        <p className='text-sm sm:text-lg font-semibold'>14 & 15th November 2024</p>
                    </div>
                    <div className='flex gap-2 items-center mt-4 sm:mt-0'>
                        <img className='w-6 h-6 sm:w-8 sm:h-8' src={Clo} alt='clock' />
                        <p className='text-sm sm:text-lg font-semibold'>8:00 AM</p>
                    </div>
                </div>
                <div className='mt-4 mx-auto sm:px-4'>
                    <p className='text-lg sm:text-2xl text-center text-purple-800 font-semibold'>
                        7TH INTERNATIONAL CONFERENCE ON RECENT TRENDS IN ADVANCED COMPUTING (ICRTAC)
                    </p>
                </div>
                <div className='mt-8 sm:mt-16'>
                    <p className='text-center text-base sm:text-xl font-semibold'>
                        “Automating Sustainability: Bridging SDG Goals with Recent Trends in Advanced Computing at ICRTAC'24”
                    </p>
                </div>
                <div className='mt-10 sm:mt-14'>
                    <p className='mx-auto w-fit font-semibold text-base sm:text-xl'>Organized By</p>
                </div>
                <div className='mt-4 font-semibold text-base sm:text-xl w-full sm:w-5/6 mx-auto text-center'>
                    <p className='text-purple-800'>
                        School of Computer Science and Engineering, VIT Chennai
                    </p>
                    <p className='text-center mt-1'>With</p>
                    <p className='text-mred mt-1'>
                        Faculty of Computer Science and Information Universiti Putra Malaysia<span className='text-black'>,</span>
                    </p>
                    <p className='text-mblue mt-1'>
                        Bureau of Indian Standards<span className='text-black'> & </span>
                    </p>
                    <p className='text-morange mt-1'>UiPath</p>
                </div>
            </div>
            <div className="flex-1"></div>
        </div>
    )
}

export default Home;
