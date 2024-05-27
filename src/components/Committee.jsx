import React, { useState } from 'react'
import data from "../data/committee_list.json"

const DoubleTickIcon = () => (<svg width="25px" height="25px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00025"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.03033 11.4697C4.73744 11.1768 4.26256 11.1768 3.96967 11.4697C3.67678 11.7626 3.67678 12.2374 3.96967 12.5303L5.03033 11.4697ZM8.5 16L7.96967 16.5303C8.26256 16.8232 8.73744 16.8232 9.03033 16.5303L8.5 16ZM17.0303 8.53033C17.3232 8.23744 17.3232 7.76256 17.0303 7.46967C16.7374 7.17678 16.2626 7.17678 15.9697 7.46967L17.0303 8.53033ZM9.03033 11.4697C8.73744 11.1768 8.26256 11.1768 7.96967 11.4697C7.67678 11.7626 7.67678 12.2374 7.96967 12.5303L9.03033 11.4697ZM12.5 16L11.9697 16.5303C12.2626 16.8232 12.7374 16.8232 13.0303 16.5303L12.5 16ZM21.0303 8.53033C21.3232 8.23744 21.3232 7.76256 21.0303 7.46967C20.7374 7.17678 20.2626 7.17678 19.9697 7.46967L21.0303 8.53033ZM3.96967 12.5303L7.96967 16.5303L9.03033 15.4697L5.03033 11.4697L3.96967 12.5303ZM9.03033 16.5303L17.0303 8.53033L15.9697 7.46967L7.96967 15.4697L9.03033 16.5303ZM7.96967 12.5303L11.9697 16.5303L13.0303 15.4697L9.03033 11.4697L7.96967 12.5303ZM13.0303 16.5303L21.0303 8.53033L19.9697 7.46967L11.9697 15.4697L13.0303 16.5303Z" fill="#8b10ef"></path> </g></svg>);

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
                <div className='flex my-10 flex-wrap gap-5 justify-center '>
                    <button onClick={() => handleChangeCommittee('general')} className={`${selectedCommittee == 'general' ? 'bg-purple-800 shadow-md shadow-purple-400 text-white' : 'bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500'} font-semibold text-lg border border-purple-800 rounded-md transtion-all duration-200 ease-in-out  px-4 py-2`}>General Chairs</button>
                    <button onClick={() => handleChangeCommittee('conference')} className={`${selectedCommittee == 'conference' ? 'bg-purple-800 shadow-md shadow-purple-400 text-white' : 'bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500'} font-semibold text-lg border border-purple-800 rounded-md transtion-all duration-200 ease-in-out  px-4 py-2`}>Conference Chairs</button>
                    <button onClick={() => handleChangeCommittee('program')} className={`${selectedCommittee == 'program' ? 'bg-purple-800 shadow-md shadow-purple-400 text-white' : 'bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500'} font-semibold text-lg border border-purple-800 rounded-md transtion-all duration-200 ease-in-out  px-4 py-2`}>Program Committee</button>
                    <button onClick={() => handleChangeCommittee('organizing')} className={`${selectedCommittee == 'organizing' ? 'bg-purple-800 shadow-md shadow-purple-400 text-white' : 'bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500'} font-semibold text-lg border border-purple-800 rounded-md transtion-all duration-200 ease-in-out  px-4 py-2`}>Organizing Committee</button>
                    <button onClick={() => handleChangeCommittee('international')} className={`${selectedCommittee == 'international' ? 'bg-purple-800 shadow-md shadow-purple-400 text-white' : 'bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500'} font-semibold text-lg border border-purple-800 rounded-md transtion-all duration-200 ease-in-out  px-4 py-2`}>International Committee</button>
                    <button onClick={() => handleChangeCommittee('national')} className={`${selectedCommittee == 'national' ? 'bg-purple-800 shadow-md shadow-purple-400 text-white' : 'bg-transparent text-purple-800 hover:bg-transparent hover:text-purple-500'} font-semibold text-lg border border-purple-800 rounded-md transtion-all duration-200 ease-in-out  px-4 py-2`}>National Committee</button>
                </div>
                <div> 
                    <div className={`${data[selectedCommittee] ? 'h-fit' : 'h-48'} flex flex-col w-fit mx-auto justify-start items-start`}>
                        {data[selectedCommittee] ? data[selectedCommittee].map(e => {
                            return (<div className='flex'><span><DoubleTickIcon /></span><p><span className='font-bold text-purple-800'>{e.substring(0, e.indexOf('$'))} ,</span><span>{e.substr(e.indexOf('$') + 1)}</span></p></div>)
                        }) : "To be announced soon"}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Committee