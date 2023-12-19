import React, { useContext } from 'react'
import WeatherApp from '../projects/WeatherApp'
import TodoList from '../projects/TodoList'
import CryptoPage from '../projects/CryptoPage'
import { DarkModeContext } from '../../context/DarkModeTheme';

const ProjectMain = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      <div className='items-center justify-center lg:mt-[8rem] mt-[5rem]'>
        <h3 className={`${isDarkMode ? 'text-white' : ''} text-[30px] font-semibold uppercase text-center`}> projects </h3>

        <p className='text-[20px] font-semibold text-center mt-2 text-[#47e1e1]'>Check out some of my work right here</p>
      </div>
      <CryptoPage />
      <WeatherApp />
      <TodoList />
    </div>
  )
}

export default ProjectMain