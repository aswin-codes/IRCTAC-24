import React, { useState } from 'react'

const Committee = () => {
    const [selectedCommittee, setSelectedCommittee] = useState('general')

    const handleChangeCommittee = (committee) => {
        setSelectedCommittee(committee)
    }
    return (
        <section id="committee"
            class="flex justify-center items-center px-16 py-20 max-md:px-5 bg-purple-100"
        >
            <div class="flex flex-col  w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
                <h1 className='text-xl sm:text-2xl text-purple-800 font-bold'> Committee </h1>
                <div className='flex my-10 flex-wrap gap-5 justify-center'>
                    <button onClick={() => handleChangeCommittee('general')} className={`${selectedCommittee == 'general' ? 'bg-purple-800 shadow-md shadow-purple-400 text-white' : 'bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500'} font-semibold text-lg border border-purple-800 rounded-md transtion-all duration-200 ease-in-out  px-4 py-2`}>General Chairs</button>
                    <button onClick={() => handleChangeCommittee('conference')} className={`${selectedCommittee == 'conference' ? 'bg-purple-800 shadow-md shadow-purple-400 text-white' : 'bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500'} font-semibold text-lg border border-purple-800 rounded-md transtion-all duration-200 ease-in-out  px-4 py-2`}>Conference Chairs</button>
                    <button onClick={() => handleChangeCommittee('program')} className={`${selectedCommittee == 'program' ? 'bg-purple-800 shadow-md shadow-purple-400 text-white' : 'bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500'} font-semibold text-lg border border-purple-800 rounded-md transtion-all duration-200 ease-in-out  px-4 py-2`}>Program Committee</button>
                    <button onClick={() => handleChangeCommittee('organizing')} className={`${selectedCommittee == 'organizing' ? 'bg-purple-800 shadow-md shadow-purple-400 text-white' : 'bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500'} font-semibold text-lg border border-purple-800 rounded-md transtion-all duration-200 ease-in-out  px-4 py-2`}>Organizing Committee</button>
                    <button onClick={() => handleChangeCommittee('international')} className={`${selectedCommittee == 'international' ? 'bg-purple-800 shadow-md shadow-purple-400 text-white' : 'bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500'} font-semibold text-lg border border-purple-800 rounded-md transtion-all duration-200 ease-in-out  px-4 py-2`}>International Committee</button>
                    <button onClick={() => handleChangeCommittee('national')} className={`${selectedCommittee == 'national' ? 'bg-purple-800 shadow-md shadow-purple-400 text-white' : 'bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500'} font-semibold text-lg border border-purple-800 rounded-md transtion-all duration-200 ease-in-out  px-4 py-2`}>National Committee</button>
                </div>
                <div className='h-48 flex justify-center items-center'>
                    <p className='text-xl'>To be announced soon</p>
                </div>
            </div>
        </section>
    )
}

export default Committee