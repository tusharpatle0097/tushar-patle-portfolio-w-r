import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../../context/DarkModeTheme';
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import axios from 'axios';

const SuggForm = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');


  const submitForm = (event) => {
    event.preventDefault()
    let data = { fName, lName, email, phone, message };
    axios.post(`https://6405ae28eed195a99f893772.mockapi.io/crud-operation`, data)
      .then(res => {
        console.log(res)
        setFName('')
        setLName('')
        setEmail('')
        setPhone('')
        setMessage('')
      })
      .catch(err => {
        console.log(err)
      })

  }

  return (
    <div className='lg:mt-[8rem] mt-[5rem]'>
      <div className='items-center justify-center '>
        <h3 className={`${isDarkMode ? 'text-white' : ''} text-[30px] font-semibold uppercase text-center`}> GET IN TOUCH </h3>
      </div>
      <div className='lg:flex md:flex lg:gap-[10rem] items-center justify-center  lg:py-[2rem]'>
        <div className='flex items-center gap-3 text-[1.5rem] lg:text-[2rem]'>
          <span><MdEmail /></span>
          <h2 className='font-medium lg:text-[25px] text-[20px]'>tusharpatle0097@gmail.com</h2>
        </div>
        <div className='flex items-center gap-3 text-[1.5rem] lg:text-[2rem] mt-3'>
          <span><FaPhoneVolume /></span>
          <h2 className='font-medium lg:text-[25px] text-[20px]'>+91 7888010097</h2>
        </div>
      </div>
      <div className=' flex items-center justify-center mt-5'>
        <form action="" onSubmit={submitForm}>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-[2rem] gap-[2rem]'>
            <div>
              <label htmlFor="">First Name</label><br />
              <input target={fName} onChange={(e) => setFName(e.target.value)} type="text" className="rounded-md px-5 py-2 text-black focus:border-none focus:outline-none hover:border-none" />

            </div>

            <div>
              <label htmlFor="">Last Name</label><br />
              <input target={lName} onChange={(e) => setLName(e.target.value)} type="text" className="rounded-md px-5 py-2 text-black focus:border-none focus:outline-none hover:border-none" />
            </div>

            <div>
              <label htmlFor="">Email</label><br />
              <input target={email} onChange={(e) => setEmail(e.target.value)} type="text" className="rounded-md px-5 py-2 text-black focus:border-none focus:outline-none hover:border-none" />
            </div>

            <div>
              <label htmlFor="">Phone</label><br />
              <input target={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="rounded-md px-5 py-2 text-black focus:border-none focus:outline-none hover:border-none" />
            </div>
          </div>
          <div className='mt-[2rem]'>
            <label htmlFor="">Message</label><br />
            <textarea target={message} onChange={(e) => setMessage(e.target.value)} type="text" className='rounded-md px-5 py-5 lg:w-[31rem] text-black focus:border-none focus:outline-none hover:border-none' />
          </div>
          <button className='mt-3 bg-green-400 rounded-md py-2 px-4' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SuggForm