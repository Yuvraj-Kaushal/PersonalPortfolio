import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram
  } from 'react-icons/fa';
  import React from 'react'

  
  const Footer = () => {
    return (
      <div className=' w-full bg-[#0a192f]'>
        <div className="md:hidden flex justify-center space-x-5 pb-4 ">
            <a href='https://linkedin.com/in/yuvrajkaushal/'>
                <FaLinkedin className='text-white hover:text-[#0077b5]' size={20} />
            </a>
            <a href='https://github.com/Yuvraj-Kaushal'>
                <FaGithub className='text-white hover:text-gray-400' size={20} />
            </a>
            <a href='https://instagram.com/__yuvrajkaushal__/'>
                <FaInstagram className='text-white hover:text-[#cb0079]' size={20} />
            </a>
            <a href='https://twitter.com/yuvrajkaushal_'>
                <FaTwitter className='text-white hover:text-[#1DA1F2]' size={20} />
            </a>
          </div>
          </div>
    )
  }

  export default Footer
  