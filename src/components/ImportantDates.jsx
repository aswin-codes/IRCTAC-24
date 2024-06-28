import React from 'react';

const ImportantDates = () => {
    return (
        <section id="date" className="flex justify-center items-center px-6 py-10">
            <div className="flex flex-col w-full max-w-2xl">
                <h1 className="text-2xl text-center text-purple-800 font-bold mb-10">Important Dates</h1>
                <div className='max-w-full overflow-x-scroll md:overflow-x-hidden sm:translate-x-20'>
                    <table className='text-sm sm:text-lg w-full'>
                        <tbody>
                            <tr className='border-y-8 border-transparent'>
                                <td className='w-56 text-right font-bold whitespace-nowrap'><p className='mr-2 sm:mr-10'>3<sup>rd</sup> June 2024</p></td>
                                <td className='w-8'><div className="w-4 h-4 rounded-full bg-purple-600 mx-auto"></div></td>
                                <td className='text-left'><p className='ml-2 sm:ml-10 w-fit'>Call for papers</p></td>
                            </tr>
                            <tr className='border-y-8 border-transparent'>
                                <td className='w-56 text-right font-bold whitespace-nowrap'><p className='mr-2 sm:mr-10'>1<sup>st</sup>September 2024</p></td>
                                <td className='w-8'><div className="w-4 h-4 rounded-full bg-purple-600 mx-auto"></div></td>
                                <td className='text-left'><p className='ml-2 sm:ml-10 w-fit'>Paper submission deadline</p></td>
                            </tr>
                            <tr className='border-y-8 border-transparent'>
                                <td className='w-56 text-right font-bold whitespace-nowrap'><p className='mr-2 sm:mr-10'>30<sup>th</sup> September 2024</p></td>
                                <td className='w-8'><div className="w-4 h-4 rounded-full bg-purple-600 mx-auto"></div></td>
                                <td className='text-left'><p className='ml-2 sm:ml-10 w-fit'>Acceptance notification</p></td>
                            </tr>
                            <tr className='border-y-8 border-transparent'>
                                <td className='w-56 text-right font-bold whitespace-nowrap'><p className='mr-2 sm:mr-10'>15<sup>th</sup> October 2024</p></td>
                                <td className='w-8'><div className="w-4 h-4 rounded-full bg-purple-600 mx-auto"></div></td>
                                <td className='text-left'><p className='ml-2 sm:ml-10 w-fit'>Camera Ready Copy submission</p></td>
                            </tr>
                            <tr className='border-y-8 border-transparent'>
                                <td className='w-56 text-right font-bold whitespace-nowrap'><p className='mr-2 sm:mr-10'>5<sup>th</sup> November 2024</p></td>
                                <td className='w-8'><div className="w-4 h-4 rounded-full bg-purple-600 mx-auto"></div></td>
                                <td className='text-left'><p className='ml-2 sm:ml-10 w-fit'>Registration Close</p></td>
                            </tr>
                            <tr className='border-y-8 border-transparent'>
                                <td className='w-56 text-right font-bold whitespace-nowrap'><p className='mr-2 sm:mr-10'>14<sup>th</sup> & 15<sup>th</sup> November 2024</p></td>
                                <td className='w-8'><div className="w-4 h-4 rounded-full bg-purple-600 mx-auto"></div></td>
                                <td className='text-left'><p className='ml-2 sm:ml-10 w-fit'>Conference</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ImportantDates;
