import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import DarkModeTheme from '../context/DarkModeTheme';
import About from '../components/about/About';
import ProjectMain from '../components/project/ProjectMain';
import SuggForm from '../components/SuggForm/SuggForm';

const Routings = () => {
    return (
        <div>
            <DarkModeTheme>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/projects' element={<ProjectMain />}></Route>
                        <Route path='/SuggForm' element={<SuggForm />}></Route>
                    </Routes>
                </BrowserRouter>
            </DarkModeTheme>
        </div>
    )
}

export default Routings