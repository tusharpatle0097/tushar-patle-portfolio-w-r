import React, { useState, useContext } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
// import tusharLogo from '../../assets/tushar logo.png';
import { DarkModeContext } from '../../context/DarkModeTheme';
import { Link } from 'react-router-dom';

const darkButton = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="text-primary text-2xl mr-2 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path></svg>
const lightButton = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="text-primary text-2xl mr-2 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBar = () => {
    setMenuOpen(!menuOpen)
  }

  const navItems = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT' },
    { to: '/projects', label: 'PROJECTS' },
    { to: '/SuggForm', label: 'CONTACT' },
  ];

  return (
    <div className="w-full fixed top-0 z-50">
      <nav className={`flex items-center justify-between  flex-wrap p-6 ${isDarkMode ? 'bg-[#151515]' : 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'}   text-white`}>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Tushar</span>
        </div>
        <div className="block lg:hidden">
          <button onClick={menuBar} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <div>{menuOpen ? <RxCross1 /> : <GiHamburgerMenu />}</div>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center  lg:w-auto lg:text-right ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow text-[17px] lg:text-center">
            {navItems.map((item, index) => (
              <Link key={index} to={item.to} className="block mt-4 lg:inline-block lg:mt-0 text-white-700 font-semibold uppercase cursor-pointer lg:hover:scale-125 duration-200  mr-6">
                {item.label}
              </Link>
            ))}
          </div>
          <button onClick={toggleDarkMode} className='flex lg:mt-0 mt-5'>
            <span>{isDarkMode ? darkButton : lightButton}</span>
            <span>{isDarkMode ? 'Enable Light mode' : 'Enable Dark Mode'}</span>
          </button>
          <div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar