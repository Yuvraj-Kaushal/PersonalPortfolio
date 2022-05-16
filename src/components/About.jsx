import React from 'react';


const About = () => {
  
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Yuvraj<lord-icon src="https://cdn.lordicon.com/fcoczpqi.json" trigger="loop" style={{width: "40px", height: "40px"}}></lord-icon>
                , nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Hello! I'm Yuvraj, I am a self-motivated Frontend Developer and a person slighty obsessed for code quality. I love to explore and learn new thing. Currently, I'm learning the new Web3 Technology as well as I'm very close to become a full stack developer. If I'll be hired by you then it would be a great pleasure for me. I’m currently looking for opportunities.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
