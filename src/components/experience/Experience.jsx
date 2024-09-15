import React,{useContext} from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import vsImg from '../../assets/vsImg.png'
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { DarkModeContext } from '../../context/DarkModeTheme';


const Experience = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <>
        <div className="animated animatedFadeInUp fadeInUp">
            <div className='text-center'>
                <div className={`${isDarkMode?'text-white':'' } text-[30px] font-semibold uppercase mt-[8rem]`}>EXPERIENCE</div>
                <p className="text-[20px] font-semibold mt-2 text-[#47e1e1] " id="exp-line">These are the technologies I've worked with</p>
            </div>
            {/* <marquee behavior="" direction="">

                <div className="flex gap-5 mt-5">
                    <button className=' flex gap-2 font-semibold rounded-md px-3 py-1 bg-white text-black hover:bg-white hover:text-black'>
                        <span><FaHtml5 className='text-2xl text-orange-500' /></span>
                        <span>HTML</span>
                    </button>
                    <button className=' flex gap-2 font-semibold rounded-md px-3 py-1 bg-white text-black hover:bg-white hover:text-black'>
                        <span><FaCss3Alt className='text-2xl text-blue-600' /></span>
                        <span>CSS</span>
                    </button>
                    <button className=' flex gap-2 font-semibold rounded-md px-3 py-1 bg-white text-black hover:bg-white hover:text-black'>
                        <span><IoLogoJavascript className='text-2xl text-yellow-400' /></span>
                        <span>javascript</span>
                    </button>
                    <button className=' flex gap-2 font-semibold rounded-md px-3 py-1 bg-white text-black hover:bg-white hover:text-black'>
                        <span><IoLogoJavascript className='text-2xl text-yellow-400' /></span>
                        <span>javascript</span>
                    </button>
                    <button className=' flex gap-2 font-semibold rounded-md px-3 py-1 bg-white text-black hover:bg-white hover:text-black'>
                        <span><FaBootstrap className='text-2xl text-blue-400' /></span>
                        <span>Bootstrap</span>
                    </button>
                    <button className=' flex gap-2 font-semibold rounded-md px-3 py-1 bg-white text-black hover:bg-white hover:text-black'>
                        <span><SiTailwindcss className='text-2xl text-[#38bdf8]' /></span>
                        <span>Tailwind css</span>
                    </button>
                    <button className=' flex gap-2 font-semibold rounded-md px-3 py-1 bg-white text-black hover:bg-white hover:text-black'>
                        <span><TbBrandNextjs className='text-2xl text-[black]' /></span>
                        <span>Next.js</span>
                    </button>
                    <button className=' flex gap-2 font-semibold rounded-md px-3 py-1 bg-white text-black hover:bg-white hover:text-black'>
                        <span><FaGitAlt className='text-2xl text-[orange]' /></span>
                        <span>Git</span>
                    </button>
                    <button className=' flex gap-2 font-semibold rounded-md px-3 py-1 bg-white text-black hover:bg-white hover:text-black'>
                        <span><FaGithub className='text-2xl text-[black]' /></span>
                        <span>GitHub</span>
                    </button>
                </div>
            </marquee> */}

            <div className=" flex items-center justify-center mt-[2rem]">
                <div className='lg:w-[60%]'>
                    <div className='grid lg:grid-cols-5 grid-cols-2 md:grid-cols-4 gap-5'>
                    <button className='hover:scale-110 duration-200 lg:w-[110px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                        <span><FaHtml5 className='text-2xl text-orange-500' /></span>
                        <span>HTML</span>
                    </button>
                    <button className='hover:scale-110 duration-200 lg:w-[110px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                        <span><FaCss3Alt className='text-2xl text-blue-600' /></span>
                        <span>CSS</span>
                    </button>
                    <button className='hover:scale-110 duration-200 lg:w-[130px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                        <span><IoLogoJavascript className='text-2xl text-yellow-400' /></span>
                        <span className='lg:text-[17px] sm:text[10px]'>javascript</span>
                    </button>
                    <button className='hover:scale-110 duration-200 lg:w-[130px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                        <span><FaReact className='text-2xl text-[#61dafb]' /></span>
                       {/* <span><img src={vsImg} alt="" className='text-2xl text-yellow-400' /></span>  */}
                        <span>React.Js</span>
                    </button>
                    <button className='hover:scale-110 duration-200 lg:w-[130px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                        <span><FaBootstrap className='text-2xl text-blue-400' /></span>
                        <span>Bootstrap</span>
                    </button>
                    <button className='hover:scale-110 duration-200 lg:w-[150px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                        <span><SiTailwindcss className='text-2xl text-[#38bdf8]' /></span>
                        <span>Tailwind css</span>
                    </button>
                    <button className='hover:scale-110 duration-200 lg:w-[120px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                        <span><TbBrandNextjs className='text-2xl text-[black]' /></span>
                        <span>Next.js</span>
                    </button>
                    <button className='hover:scale-110 duration-200 lg:w-[110px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                        <span><FaGitAlt className='text-2xl text-[orange]' /></span>
                        <span>Git</span>
                    </button>
                    <button className='hover:scale-110 duration-200 lg:w-[110px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                        <span><FaGithub className='text-2xl text-[black]' /></span>
                        <span>GitHub</span>
                    </button>
                    <button className='hover:scale-110 duration-200 lg:w-[110px] flex gap-2 font-semibold rounded-md px-3 py-1 bg-[#ddedea] text-black hover:bg-white hover:text-black'>
                        <span><SiRedux className='text-2xl text-[#38bdf8]' /></span>
                        <span>Redux</span>
                    </button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Experience