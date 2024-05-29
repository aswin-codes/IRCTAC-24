import React, { useEffect } from 'react';
import VIT from '../assets/vit1.png';
import UPM from "../assets/upm.png";
import UI from "../assets/ui.png";
import BIS from "../assets/bis.png";
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

    const handleRedirect = (url) => window.open(url)

    return (
        <section id="about" className='bg-purple-100'>
            <div className='px-5 sm:px-5 lg:px-10 py-5 sm:py-10 w-full max-w-[1440px] mx-auto'>
                <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>About VIT</h1>
                <hr className='h-[2px] bg-purple-700' />
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className='p-1 mt-2 about-vit-content  basis-2/3'>
                        <p className='mt-3'>
                            VIT Chennai is a globally engaged, competitive research enriched campus, strategically located in a city that is one of the biggest automotive and it hubs in Tamil Nadu. Its motto is to respond by rearing students to major industrial, social, economic and environmental demands and challenges of cosmopolitan cities in India and the world in general. This eight years old campus offers undergraduate, post graduate and research programmes and draws smart students for every state in India, through a highly competitive examination. <span className='font-bold cursor-pointer' onClick={() => handleRedirect('https://chennai.vit.ac.in/')}> Read more...</span>

                        </p>
                    </div>
                    <div className='basis-1/3 flex items-center justify-center'><img src={VIT} alt='VIT' className='mt-3  w-full object-cover' /></div>
                </div>
                <h1 className='text-xl sm:text-2xl font-semibold text-purple-800 mt-5'>About Partners</h1>
                <hr className='h-[2px] bg-purple-700' />
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className='flex-1'>
                        <div className='mt-4'>
                            <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>UPM</h1>
                            <hr className='h-[2px] bg-purple-700' />
                            <img src={UPM} className='h-16 object-contain mx-auto mt-3' alt='UPM Logo' />
                            <p className='mt-2'>UPM is the only university that leads in the field of agriculture, which is not limited to food crops, including animal husbandry, veterinary medicine, and forestry, in addition to exploring disciplines that are relevant to the needs of society and the country.
                                Faculty of Computer Science and Information Technology is located next to the lake located at UPM's Main Gate. This faculty consists of four departments namely the Department of Computer Science, Department of Multimedia, Department of Software Engineering and Information System and the Department of Communication Technology and Network. Faculty of Computer Science and Information Technology is the first faculty to introduce "Green IT".<span className='font-bold cursor-pointer' onClick={() => handleRedirect('https://www.upm.edu.my/?L=en')}> Read more...</span>
                            </p>

                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='mt-4'>
                            <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>BIS</h1>
                            <hr className='h-[2px] bg-purple-700' />
                            <img src={BIS} className='h-16 object-contain mx-auto mt-3' alt='BIS Logo' />
                            <p className='mt-2'>BIS is the National Standard Body of India established under the BIS Act 2016 for the harmonious development of the activities of standardization, marking and quality certification of goods and for matters connected therewith or incidental thereto. BIS has been providing traceability and tangibility benefits to the national economy in a number of ways – providing safe reliable quality goods; minimizing health hazards to consumers; promoting exports and imports substitute; control over proliferation of varieties etc. through standardization, certification and testing.<span className='font-bold cursor-pointer' onClick={() => handleRedirect('https://www.bis.gov.in/')}> Read more...</span>
                            </p>

                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='mt-4'>
                            <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>UI Path</h1>
                            <hr className='h-[2px] bg-purple-700' />
                            <img src={UI} className='h-16 object-contain mx-auto mt-3' alt='UI Path Logo' />
                            <p className='mt-2'>Automation and AI offer unprecedented opportunities to innovate. UiPath enables our customers to tap into this power with our industry-leading AI-powered enterprise automation technology.  We are committed to promoting and maintaining an ethical workplace, protecting our customers’ data, managing risks, and building ongoing stakeholder value through the practice of good governance and oversight. <span className='font-bold cursor-pointer' onClick={() => handleRedirect('https://www.uipath.com/')}> Read more...</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='px-5 sm:px-5 lg:px-10 py-5 sm:py-0   flex flex-col lg:flex-row gap-5 w-full max-w-[1440px] mx-auto'>
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
                            <li>Investigate novel methods in automation and intelligent techniques, integrating cutting-edge computing technologies with the use of Intelligent Process Automation</li>
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
                            <li>Robotic Process Automation (RPA )</li>
                            <li>BIS standards for SDG Goals and Applications</li>
                            <li>Fog and Edge Computing</li>
                            <li>Intelligent Document, Image, and Video processing</li>
                            <li>Cognitive automation</li>
                            <li>Augmented Reality and Virtual Reality</li>
                            <li>Digital Twin Technologies and Smart Cities</li>
                            <li>Drones and Robotic Technology</li>
                            <li>Cyber Security Automation</li>
                            <li>Blockchain Technology and Cryptocurrency</li>
                            <li>Natural Language Processing and LLM</li>
                            <li>5G and 6G Wireless Technology</li>
                        </ol>
                    </div>

                    <div className='p-1 publishing-content mt-4'>
                        <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>Publishing & Indexing</h1>
                        <hr className='h-[2px] bg-purple-700' />
                        <p className='mt-3'>
                            ICRTAC 24 proceedings is being published by Springer's Communications in Computer and Information Science series (CCIS) (Under Review). All accepted and presented papers will be published by CCIS subject to meeting Springer's scope and quality requirements. Springer CCIS series is indexed in SCOPUS.
                        </p>
                        <div className='mt-3 flex lg:flex-row flex-col justify-around items-center my-2 gap-4'>
                            <img src={Springer} alt='Springer Publications' className='object-contain h-10 sm:h-16' />
                            {/* <img src={VITLogo} alt='VIT University' className='object-contain h-10 sm:h-16' /> */}
                        </div>
                    </div>
                    
                    <div className='p-1 mt-10 brochure-content mb-10'>
                        <h1 className='text-xl sm:text-2xl font-semibold text-purple-800'>Brochure</h1>
                        <hr className='h-[2px] bg-purple-700' />
                        <div className='flex justify-center'>
                            <button className='px-10 py-3 text-xl rounded-md my-3 bg-purple-800 border border-purple-800 font-semibold text-white hover:bg-purple-50 hover:text-purple-800 duration-200 transition-all ease-in-out'>( Coming soon )</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
