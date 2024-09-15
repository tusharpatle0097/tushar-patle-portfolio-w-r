import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeTheme';
import men from '../../assets/men.jpg'

const About = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    //small change
    return (
        <>
            <div className='animated animatedFadeInUp fadeInUp'>
                
                <div className="flex flex-col md:flex-row mt-[8rem] ">
                    {/* First Column */}
                    <div className="md:w-1/3 lg:w-1/4 ">
                        <div className="text-center md:text-left">
                            <div className='relative lg:bottom-[4rem]'>
                                <img src={men} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="md:w-2/3 lg:w-3/4  p-4 lg:w-[60%] ">
                        <div className="text-center md:text-left">
                            <p className={`${isDarkMode ? "text-white" : ""} text-[15px] font-semibold uppercase`}>GET TO KNOW</p>
                            <p className={`${isDarkMode ? "text-white" : ""} text-[30px] font-semibold uppercase`}>ABOUT ME</p>
                            <div className={`${isDarkMode ? "text-white" : ""}  mt-[20px] lg:text-justify`}>
                                Every day, I eagerly embrace the path of continuous learning, channeling my passion for Front-end Development to create captivating digital experiences. Coming from a Non-tech background , my fascination with crafting frontend marvels guides me. I've transformed myself into a <span className='font-bold text-[#ff0044]'>Self-taught coder</span> , conquering HTML, CSS, JavaScript, React.js and Next.js against all odds.
                            </div>
                            <div className={`${isDarkMode ? "text-white" : ""}  text-[17px] lg:text-justify  mt-[20px] `}>
                                My motto is quality, and I'm devoted to user experience. I champion impactful code, excited to collaborate with fellow visionaries. Let's craft web stories that leave a mark.
                            </div>
                            <div className='text-[30px] font-semibold text-[#47e1e1] mt-3'>
                                Lets Connect!
                            </div>
                            <div className='flex gap-7 mt-3 text-center justify-center'>
                                <span className='hover:scale-110 duration-200 '>
                                    <a href="https://www.linkedin.com/in/tushar-patle-b2732b256/" target='blank' className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-white`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icons"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    </a>
                                </span>
                                <span className='hover:scale-110 duration-200'>
                                    <a href="https://github.com/tusharpatle0097" target='blank' className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-white`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icons"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
                                </span>
                                <span className='hover:scale-110 duration-200'>
                                    <a href="" className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-white`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icons"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
                                </span>
                                <span className='hover:scale-110 duration-200'>
                                    <a href="https://www.instagram.com/tushar.patle_/" target='blank' className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-white`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icons"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About