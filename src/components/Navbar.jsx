import React, { useState, useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTab } from '../redux/features/currentTab';

const Navbar = () => {
    const currentTab = useSelector(e => e.currentTab.currentTab);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false); // for menu
    const navbarRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            console.log('hi')
          const sections = ['home', 'patrons', 'submission', 'speakers', 'committee', 'travel', 'contact'];
          let currentSection = '';
      
          sections.forEach((section) => {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
              const rect = sectionElement.getBoundingClientRect();
              if (rect.top <= 10 && rect.bottom >= 10) {
                currentSection = section;
              }
            }
          });
      
          if (currentSection !== '') {
            dispatch(setCurrentTab(currentSection));
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [dispatch]);
      
    const handleMenuClick = (tab) => {
        // Scroll to the section corresponding to the clicked tab
        document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' });

        // Update the currentTab redux variable
        dispatch(setCurrentTab(tab));
        setIsOpen(false);
    }
    return (
        <div ref={navbarRef} className={`sticky top-0 w-full max-w-[1440px] z-10 ${isOpen && 'h-full lg:h-auto'}  mx-auto `}>
            <div className='flex backdrop-blur-sm bg-transparent px-10 py-5 items-center justify-between w-full'>
                <div>
                    <h1 className='font-lilita text-2xl text-purple-800 cursor-pointer' onClick={() => handleMenuClick('home')}>ICRTAC'24</h1>
                </div>
                <div className='lg:flex gap-4 text-md items-center hidden'>
                    <p onClick={() => handleMenuClick('home')} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'home' && 'text-purple-800 font-bold'}`}>Home</p>
                    <p onClick={() => handleMenuClick('patrons')} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'patrons' && 'text-purple-800 font-bold'}`}>Patrons</p>
                    <p onClick={() => handleMenuClick('submission')} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'submission' && 'text-purple-800 font-bold'}`}>Submission</p>
                    <p onClick={() => handleMenuClick('speakers')} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'speakers' && 'text-purple-800 font-bold'}`}>Keynote Speakers</p>
                    <p onClick={() => handleMenuClick('committee')} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'committee' && 'text-purple-800 font-bold'}`}>Committee</p>
                    <p onClick={() => handleMenuClick('travel')} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'travel' && 'text-purple-800 font-bold'}`}>Travel</p>
                    <p onClick={() => handleMenuClick('contact')} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'contact' && 'text-purple-800 font-bold'}`}>Contact US</p>
                    <button onClick={() => handleMenuClick('register')} className='bg-purple-800 px-3 py-1.5 rounded-full text-white hover:rounded-sm border border-purple-800 hover:bg-purple-50 hover:text-purple-800 ease-in-out duration-300'>Register Now</button>
                </div>
                <div className='lg:hidden'>
                    {!isOpen ?
                        <div onClick={() => setIsOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div> :
                        <div onClick={() => setIsOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                    }
                </div>
            </div >
            <div onClick={() => setIsOpen(false)} className={`${isOpen ? 'max-h-screen' : 'max-h-0'} h-screen lg:h-0 backdrop-blur-sm ease-in-out duration-300 bg-transparent overflow-hidden`}>
                <div className="flex flex-col px-10 py-5 gap-4 text-xl h-full text-black">
                    <p onClick={() => handleMenuClick('home')} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'home' && 'text-purple-800 font-bold'}`}>Home</p>
                    <p onClick={() => handleMenuClick('patrons')} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'patrons' && 'text-purple-800 font-bold'}`}>Patrons</p>
                    <p onClick={() => handleMenuClick('submission')} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'submission' && 'text-purple-800 font-bold'}`}>Submission</p>
                    <p onClick={() => handleMenuClick('speakers')} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'speakers' && 'text-purple-800 font-bold'}`}>Keynote Speakers</p>
                    <p onClick={() => handleMenuClick('committee')} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'committee' && 'text-purple-800 font-bold'}`}>Committee</p>
                    <p onClick={() => handleMenuClick('travel')} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'travel' && 'text-purple-800 font-bold'}`}>Travel</p>
                    <p onClick={() => handleMenuClick('contact')} className={`cursor-pointer hover:text-purple-600 ease-in-out duration-200 ${currentTab === 'contact' && 'text-purple-800 font-bold'}`}>Contact US</p>
                    <button onClick={() => handleMenuClick('register')} className='bg-purple-800 px-3 py-1.5 rounded-full text-white hover:rounded-sm border transition-all border-purple-800 hover:bg-white hover:text-purple-800 ease-in-out duration-300'>Register Now</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
