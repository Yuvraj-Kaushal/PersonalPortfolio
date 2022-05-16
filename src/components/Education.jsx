import React from 'react';

const Education = () => {
  return (
    <div name='education' className='w-full h-screen  bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-2xl md:text-4xl font-bold inline border-b-4 border-pink-600'>
              Education<lord-icon
    src="https://cdn.lordicon.com/ttioogfl.json"
    trigger="loop"
    delay="700" 
    style={{width: "40px", height: "40px"}}></lord-icon>
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>Bachelor's Degree in Computer Science & Engineering</p>
            </div>
            <div>
              <p>From - KIIT University (Kalinga Institute Of Industrial Technlogy)</p>  
              <p>Year - 2020-2023</p>  
            </div>
            <div className='sm:text-right text-2xl font-bold'>
              <p>Diploma Degree in Computer Science & Engineering</p>
            </div>
            <div>
              <p>From - NTTF (Nettur Technical Training Foundation)</p>  
              <p>Year - 2017-2020</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default Education;
