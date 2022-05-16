import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[50px] flex justify-between items-center px-3 bg-[#0a192f] text-gray-300'>
      <div>
      <Link to='home' smooth={true} duration={1500}> <img className='cursor-pointer' src={Logo}  alt='Logo' style={{ width: '50px' }} /></Link>
      </div>

      {/* menu */}
      <ul className='hidden md:flex '>
        <li>
          <Link to='home' smooth={true} duration={1500}>
            <p className='hover:text-pink-600'>Home</p>
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={1500}>
            <p className='hover:text-pink-600'>About</p>
          </Link>
        </li>
        <li>
          <Link to='education' smooth={true} duration={1500}>
            <p className='hover:text-pink-600'>Education</p>
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={1500}>
            <p className='hover:text-pink-600'>Skills</p>
          </Link>
        </li>
        <li>
          <Link to='experience' smooth={true} duration={1500}>
            <p className='hover:text-pink-600'>Experience</p>
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={1500}>
            <p className='hover:text-pink-600'>Projects</p>
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={1500}>
            <p className='hover:text-pink-600'>Contact</p>
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
      
        <li className='py-2 text-xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={1500}>
            <p className='hover:text-pink-600'>Home</p>
          </Link>
        </li>
        <li className='py-2 text-xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={1500}>
          <p className='hover:text-pink-600'>About</p>
          </Link>
        </li>
        <li className='py-2 text-xl'>
          {' '}
          <Link onClick={handleClick} to='education' smooth={true} duration={1500}>
          <p className='hover:text-pink-600'>Education</p>
          </Link>
        </li>
        <li className='py-2 text-xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={1500}>
          <p className='hover:text-pink-600'>Skills</p>
          </Link>
        </li>
        <li className='py-2 text-xl'>
          {' '}
          <Link onClick={handleClick} to='experience' smooth={true} duration={1500}>
          <p className='hover:text-pink-600'>Experience</p>
          </Link>
        </li>
        <li className='py-2 text-xl'>
          {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={1500}>
          <p className='hover:text-pink-600'>Projects</p>
          </Link>
        </li>
        <li className='py-2 text-xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={1500}>
          <p className='hover:text-pink-600'>Contact</p>
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-1000 bg-[#0077b5]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://linkedin.com/in/yuvrajkaushal/'
            >
              Linkedin <FaLinkedin className='text-white' size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-1000 bg-[#171515]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Yuvraj-Kaushal'
            >
              Github <FaGithub className='text-white' size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-1000 bg-[#cb0079]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://instagram.com/__yuvrajkaushal__/'
            >
              Instagram <FaInstagram className='text-white' size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-1000 bg-[#1DA1F2]'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
              href='https://twitter.com/yuvrajkaushal_'
            >
              Twitter <FaTwitter className='text-white' size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
