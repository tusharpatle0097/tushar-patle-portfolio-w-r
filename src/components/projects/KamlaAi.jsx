import React, { useContext } from 'react';
import weatherImg from '../../assets/weather-img.png'
import kamla from '../../assets/kamla.PNG'
import { DarkModeContext } from '../../context/DarkModeTheme';
import { Fade } from "react-awesome-reveal";


const KamlaAi = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <div>

            <div className="flex flex-col md:flex-row mt-[2rem]">
                {/* First Column */}


                {/* Second Column */}
                <div className="md:w-1/2">
                    <Fade left>
                        <div className="text-center md:text-left lg:w-[85%] lg:ml-[4rem]">
                            <h3 className={`text-[32px] font-bold mb-2 ${isDarkMode ? 'text-white' : ''} `}>Client Website: Kamla AI Pvt Ltd.</h3>
                            <p className='font-bold text-[#ff0044] text-[16px]'>Technology used:React.js, Tailwind CSS and Emamil.Js</p>
                            <div className='px-5 lg:text-justify'>
                                <p className={` text-[17px] ${isDarkMode ? 'text-white' : ''}`}>This project involved developing a fully responsive and dynamic website for a client using cutting-edge web technologies. I utilized **React.js** for building an interactive and efficient user interface, ensuring smooth performance and a seamless user experience. For styling, I implemented **Tailwind CSS**, which allowed for highly customizable and maintainable designs, giving the site a modern and professional look. Additionally, I integrated **Email.js** for form handling, enabling direct and secure email communication without the need for backend server configuration. This project highlights my ability to create sleek, user-friendly websites with clean code and efficient design practices.</p>
                                <div className='flex gap-[2rem] justify-center'>
                                    <a href='https://www.kamlaai.com/' target='blank' className='flex gap-2 mt-3 uppercase items-center bg-[#ddedea] p-1.5 font-semibold text-black rounded-md hover:bg-gray-300 hover:scale-105 duration-200'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                        <span>live url</span>
                                    </a>
                                    <a href='#' target='blank' className='flex gap-2 mt-3 uppercase items-center bg-[#ddedea] p-1.5 font-semibold text-black rounded-md hover:bg-gray-300 hover:scale-105 duration-200'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                        <span>GitHub Link</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Fade>

                </div>

                <div className="md:w-1/2  p-4 mt-10 lg:mr-[5rem]">
                    <Fade right>
                        <div className="text-center md:text-left lg:ml-[3rem]">
                            <img src={kamla} width={600} alt="" className='rounded-lg hover:scale-110 duration-200 border-[3px]' />
                        </div>
                    </Fade>

                </div>


            </div>
        </div>
    )
}

export default KamlaAi