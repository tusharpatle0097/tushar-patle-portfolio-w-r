import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeTheme';
import { Fade } from "react-awesome-reveal";
import movieS from '../../assets/movieS.mp4'

const MovieSearch = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <>
            {/* <div className='items-center justify-center mt-[7rem]'>
                <h3 className='text-black text-[30px]  font-semibold uppercase text-center'> projects </h3>
                <p className='text-[20px] font-semibold text-center mt-2 text-[paleturquoise]'>Check out some of my work right here</p>
            </div> */}
            <div className="flex flex-col md:flex-row mt-[2rem]">
                {/* First Column */}
                <div className="md:w-1/2  p-4 mt-8">
                    <Fade left>
                        <div className="text-center md:text-left lg:ml-[3rem]">
                            <video src={movieS} autoPlay loop controls className='border-[3px] lg:w-[600px] rounded-lg hover:scale-110 duration-200'></video>
                        </div>
                    </Fade >
                </div>

                {/* Second Column */}
                <div className="md:w-1/2">
                    <Fade right>
                        <div className="text-center md:text-left lg:w-[85%]">
                            <h3 className={`text-[32px] font-bold mb-2 ${isDarkMode ? 'text-white' : ''} `}>Movie Search Site</h3>
                            <p className='font-bold text-[#ff0044] text-[16px]'>Technology used:React.js, Tailwind CSS, OMDb API</p>
                            <div className='px-5 lg:text-justify'>
                                <p className={`text-[17px] ${isDarkMode ? 'text-white' : ''}`}>
                                    Our movie search website built on ReactJS integrates seamlessly with the OMDb API, providing users with a comprehensive platform to explore their favorite movies. With a sleek and intuitive user interface, users can effortlessly search for movies by title, browse through detailed information including plot summaries, cast, ratings, and more. Leveraging the power of ReactJS, our website offers a responsive and interactive experience across devices, ensuring accessibility for a wide range of users. Whether it's discovering new releases or revisiting timeless classics, our movie search website caters to cinephiles of all tastes, offering a dynamic and engaging platform for exploring the world of cinema.
                                </p>
                                <div className='flex gap-[2rem] justify-center'>
                                    <a href='https://movie-search-app-eight-ebon.vercel.app/' target='blank' className='flex gap-2 mt-3 uppercase items-center bg-[#ddedea] p-1.5 font-semibold text-black rounded-md hover:bg-gray-300 hover:scale-105 duration-200'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                        <span>live url</span>
                                    </a>
                                    <a href='https://github.com/tusharpatle0097/movie-search-app' target='blank' className='flex gap-2 mt-3 uppercase items-center bg-[#ddedea] p-1.5 font-semibold text-black rounded-md hover:bg-gray-300 hover:scale-105 duration-200'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                        <span>GitHub Link</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </Fade >
                </div>
            </div>

        </>
    )
}

export default MovieSearch