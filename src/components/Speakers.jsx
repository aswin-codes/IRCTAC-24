import React from 'react'

const Speakers = () => {
    return (
        <section id="speakers"
            class="flex justify-center items-center px-16 py-20 max-md:px-5"
        >
            <div class="flex flex-col  w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
                <h1 className='text-xl sm:text-2xl text-purple-800 font-bold'> Speakers</h1>
                <div className='h-48 flex justify-center items-center'>
                    <p className='text-xl'>To be announced soon</p>
                </div>
            </div>
        </section>
    )
}

export default Speakers