import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Yuvraj Kaushal
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Frontend Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Hello! I'm Yuvraj, I am a self-motivated Frontend Developer and a person slighty obsessed for code quality. I love to explore and learn new thing. Currently, I'm learning the new Web3 Technology as well as I'm very close to become a full stack developer. If I'll be hired by you then it would be a great pleasure for me. I’m currently looking for opportunities.
        </p>
        <div>
          <a href='https://drive.google.com/file/d/1_h25wJjnSBh93YP_tKoYA8-4tSCK-uC7/view?usp=sharing'><button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            See My Resume
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
