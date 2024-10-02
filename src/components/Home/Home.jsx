import React, { useContext } from 'react';
// import ReactTyped from "react-typed";
import tusharCv from '../../assets/Tushar Patle Updated Cv.pdf'
import Experience from '../experience/Experience';
import ProjectMain from '../project/ProjectMain';
import { DarkModeContext } from '../../context/DarkModeTheme';
import SuggForm from '../SuggForm/SuggForm';
import imgfro from '../../assets/front-end.png'
import About from '../about/About';
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = tusharCv;
    link.download = 'Tushar Patle CV';
    link.click();
  };
  return (
    <>
      <div className='animated animatedFadeInUp fadeInUp grid lg:grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:px-[8rem] lg:mt-[7rem] mt-[6rem] px-5'>
        <div className=''>
          <h1 className='text-[45px] font-semibold text-[#ff0044]'>Hello!</h1>
          <h1 className={`text-[40px] font-bold ${isDarkMode ? 'text-white' : ''} `}>I'm Tushar Patle</h1>
          <div>
            <h1 className='text-[#47e1e1] text-[30px]'>
              A{" "}
              <TypeAnimation
                sequence={[
                  'Front End Developer',
                  1000,
                  "React.Js Developer",
                  1000,
                  "Next.Js Developer",
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>
          <div className='mt-4'>
            <span className='text-[18px] my-4 text-black]'>Proficient in HTML, CSS, JavaScript, React.js, and exploring Next.js, TypeScript. Specialize in crafting user-centric websites. Excited for collaborative challenges with professionals.</span>
          </div>
          <div className='mt-3'>
            {/* <button className={`bg-[#3fe2c4] ${isDarkMode ? "text-white" : "text-white"} flex rounded-lg px-3 py-2 lg:hover:scale-105 duration-200`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" id="download-icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
              <span>Download Resume</span>

            </button> */}
          </div>
        </div>
        <div className='lg:mt-[4rem] mt-[3rem]'>
          <img className='lg:ml-[5rem] lg:w-[600px] sm:w-[100%] rounded-lg' src={imgfro} alt="" />
        </div>
      </div>

      {/* About */}
      <About />
      {/* EXPERIENCE */}
      <Experience />
      {/* <Projects /> */}
      <ProjectMain />
      {/* form */}
      <SuggForm />
      
    </>
  )
}

export default Home