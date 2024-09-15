import React, { useContext } from 'react'
import WeatherApp from '../projects/WeatherApp'
import TodoList from '../projects/TodoList'
import CryptoPage from '../projects/CryptoPage'
import { DarkModeContext } from '../../context/DarkModeTheme';
import EComSite from '../EComSite/EComSite';
import FoodWebsite from '../projects/FoodWebsite';
import MovieSearch from '../projects/MovieSearch';
import KamlaAi from '../projects/KamlaAi';


const ProjectMain = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className='animated animatedFadeInUp fadeInUp'>
      <div className='items-center justify-center mt-[7rem]'>
        <h3 className={`${isDarkMode ? 'text-white' : ''} text-[30px] font-semibold uppercase text-center`}> projects </h3>

        <p className='text-[20px] font-semibold text-center mt-2 text-[#47e1e1]'>Check out some of my work right here</p>
      </div>
      <FoodWebsite />
      <EComSite />
      <CryptoPage />
      <MovieSearch />
      <TodoList />
      <WeatherApp />
      <KamlaAi />
    </div>
  )
}

export default ProjectMain