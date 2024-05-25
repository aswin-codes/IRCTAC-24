import React, { useEffect } from 'react';
import VIT from '../assets/vit1.png';
import Springer from '../assets/springer.png';
import VITLogo from '../assets/vitlogo.png';
import ScrollReveal from 'scrollreveal';

const About = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            reset: false,
            opacity: 0,
        });

        sr.reveal('.about-content', { delay: 200 });
        sr.reveal('.objectives-content', { delay: 400 });
        sr.reveal('.tracks-content', { delay: 600 });
        sr.reveal('.about-vit-content', { delay: 800 });
        sr.reveal('.publishing-content', { delay: 1000 });
        sr.reveal('.dates-content', { delay: 1200 });
        sr.reveal('.brochure-content', { delay: 1400 });
    }, []);

    return (
        <div className='px-5 sm:px-5 lg:px-10 py-5 sm:py-10 flex flex-col lg:flex-row gap-5 w-full max-w-[1440px] mx-auto'>
            <div className='flex-1'>
                <div className='p-1 about-content'>
                    <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>About the Conference</h1>
                    <hr className='h-[2px] bg-purple-700' />
                    <p className='mt-3'>
                        The conference on Sustainable Development Goals (SDGs) by the United Nations calls for global action towards 17 goals, including ending poverty and ensuring environmental protection by 2030. Leveraging digitization, the conference focuses on Blockchain, Cryptocurrency, 5G/6G Wireless, Drones, AI/ML, Quantum Computing, AR/VR, Digital Twin, Smart Cities, Fog/Edge Computing, Cybersecurity, automation, and Industry 4.0 to address these goals. It aims to develop advanced algorithmic approaches to surpass classical techniques, advancing SDGs through innovative technologies and sustainable automation practices.
                    </p>
                </div>
                <div className='p-1 mt-10 objectives-content'>
                    <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>Objectives</h1>
                    <hr className='h-[2px] bg-purple-700' />
                    <ul className='list-disc list-inside mt-3'>
                        <li>Explore the potential applications of advanced techniques in computing to provide innovative solutions</li>
                        <li>Provide an interdisciplinary platform for researchers, practitioners, and educators to discuss contemporary innovations in advanced computing and suggest sustainable solutions to real world problems</li>
                        <li>Investigate novel methods in automation and intelligent techniques, integrating cutting-edge computing technologies with the use of Robotic Process Automation</li>
                        <li>Bridge SDG goals and Indian Standards with recent trends in advanced computing, emphasizing the importance of automating sustainability for global development</li>
                    </ul>
                </div>
                <div className='p-1 mt-10 tracks-content'>
                    <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>Tracks</h1>
                    <p className='text-base'>The seventh edition of ICRTAC - 2024 invites submissions of original unpublished technical papers on the following topics, but not limited to:</p>
                    <hr className='h-[2px] bg-purple-700' />
                    <ol className='list-decimal list-inside mt-3'>
                        <li>Quantum Computing in Science, Engineering and Management</li>
                        <li>Artificial Intelligence and Machine Learning</li>
                        <li>Automation in Sustainable Development with Robotics Process Automation</li>
                        <li>BIS standards for SDG Goals and Applications</li>
                        <li>Fog and Edge Computing</li>
                        <li>Image and Video processing</li>
                        <li>Augmented Reality and Virtual Reality</li>
                        <li>Digital Twin Technologies and Smart Cities</li>
                        <li>Drones and Robotic Technology</li>
                        <li>Cyber Security</li>
                        <li>Blockchain Technology and Cryptocurrency</li>
                        <li>Natural Language Processing and LLM</li>
                        <li>5G and 6G Wireless Technology</li>
                    </ol>
                </div>
                <div className='p-1 mt-10 about-vit-content'>
                    <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>About VIT</h1>
                    <hr className='h-[2px] bg-purple-700' />
                    <img src={VIT} alt='VIT' className='mt-3 h-48 w-full object-cover' />
                    <p className='mt-3'>
                        VIT Chennai is a globally engaged, competitive research enriched campus, strategically located in a city that is one of the biggest automotive and it hubs in Tamil Nadu. Its motto is to respond by rearing students to major industrial, social, economic and environmental demands and challenges of cosmopolitan cities in India and the world in general. This eight years old campus offers undergraduate, post graduate and research programmes and draws smart students for every state in India, through a highly competitive examination.
                    </p>
                </div>
            </div>
            <div className='flex-1 lg:flex-[0_0_33%]'>
                <div className='p-1 publishing-content'>
                    <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>Publishing & Indexing</h1>
                    <hr className='h-[2px] bg-purple-700' />
                    <p className='mt-3'>
                        Springer is a global publishing company that publishes books, e-books and peer-reviewed journals in science, technical and medical (STM) publishing founded in May 10, 1842 with headquarters in Berlin, Heidelberg, Germany. The Springer CCIS series is devoted to the publication of proceedings of computer science conferences. The Springer CCIS series is devoted to the publication of proceedings of computer science conferences. Besides globally relevant meetings with internationally representative program committees guaranteeing a strict peer-reviewing and paper selection process, conferences run by societies or of high regional or national relevance are also considered for publication.
                    </p>
                    <div className='mt-3 flex lg:flex-row flex-col justify-around items-center my-2 gap-4'>
                        <img src={Springer} alt='Springer Publications' className='object-contain h-10 sm:h-16' />
                        <img src={VITLogo} alt='VIT University' className='object-contain h-10 sm:h-16' />
                    </div>
                </div>
                <div className='p-1 mt-10 dates-content'>
                    <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>Important Dates</h1>
                    <hr className='h-[2px] bg-purple-700' />
                    {/* <ul className='mt-3'>
                        <li><p>Call for papers : <span className='font-bold'>3rd June 2024</span></p></li>
                        <li><p>Paper submission deadline : <span className='font-bold'>1st September 2024</span></p></li>
                        <li><p>Acceptance notification : <span className='font-bold'>31st September 2024</span></p></li>
                        <li><p>Camera Ready Copy submission : <span className='font-bold'>15th October 2024</span></p></li>
                        <li><p>Registration Close : <span className='font-bold'>5th November 2024</span></p></li>
                        <li><p>Conference : <span className='font-bold'>14th-15th November 2024</span></p></li>
                    </ul> */}
                    <table>
                        <tbody>
                            <tr className='border-y-4 border-transparent'>
                            <td><p className='text-right font-bold w-56'>3rd June 2024 : </p></td>
                                <td><p className='text-left'>Call for papers </p></td>
                                
                            </tr>
                            <tr className='border-y-4 border-transparent'>
                                <td><p className='text-right font-bold w-56'>1st September 2024 : </p></td>
                                <td><p className='text-left'>Paper submission deadline </p></td>
                            </tr>
                            <tr className='border-y-4 border-transparent'>
                                <td><p className='text-right font-bold w-56'>31st September 2024 : </p></td>
                                <td><p className='text-left'>Acceptance notification</p></td>
                            </tr>
                            <tr className='border-y-4 border-transparent'>
                                <td><p className='text-right font-bold w-56'>15th October 2024 : </p></td>
                                <td><p className='text-left'>Camera Ready Copy submission</p></td>
                            </tr>
                            <tr className='border-y-4 border-transparent'>
                                <td><p className='text-right font-bold w-56'>5th November 2024 : </p></td>
                                <td><p className='text-left'>Registration Close</p></td>
                            </tr>
                            <tr className='border-y-4 border-transparent'>
                                <td><p className='text-right font-bold w-56'>14th-15th November 2024 :</p></td>
                                <td><p className='text-left'>Conference</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='p-1 mt-10 brochure-content'>
                    <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>Brochure</h1>
                    <hr className='h-[2px] bg-purple-700' />
                    <div className='flex justify-center'>
                        <button className='px-10 py-3 text-xl rounded-md my-3 bg-purple-800 border border-purple-800 font-semibold text-white hover:bg-purple-50 hover:text-purple-800 duration-200 transition-all ease-in-out'>( Coming soon )</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
