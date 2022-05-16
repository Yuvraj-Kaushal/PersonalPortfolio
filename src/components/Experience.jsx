import React from 'react';

const Experience = () => {
  return (
    <div name='experience' className='w-full pt-16 md:h-screen h-screen:150vh bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-left pb-8 ml-4'>
          <p className='md:text-2xl text-xl font-bold inline border-b-4 border-pink-600 '>
              Workshops and Volunteer Experience
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>Organized by Reskill x SparkAR</p>
              <div className='text-lg text-pink-600'>
              <p>Oct 2021</p>
              </div>
            </div>
            <div>
              <p>Taken part in the workshop organized by Reskill x SparkAR where they taught us how to make beautiful AR effects.</p>  
            </div>
            <div className='sm:text-right text-2xl font-bold'>
              <p>Organized by Fnplus</p>
              <div className='text-lg text-pink-600'>
              <p>May 2019</p>
              </div>
            </div>
            <div>
              <p>A workshop was organized by fnplus community where they taught about many things like freeCodeCamp, github, netlify, opensource etc.<br/>
                Fnplus is a community of geeks with a vision to bridge the skillgap in india with an informal learning framework. They also sponsored us certification cources for free @Progate.</p>  
            </div>
            <div className='sm:text-right text-2xl font-bold'>
              <p>Volunteer @Progate</p>
              <div className='text-lg text-pink-600'>
              <p>May 2019</p>
              </div>
            </div>
            <div>
              <p>Organize a progate learning weekend with full access to the web dev and python for 3 days.<br/>
              50+ students participated and completed hands on learning.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default Experience;
