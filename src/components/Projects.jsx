import React from 'react';
import TextUtils from '../assets/textutilsdemo.png';
import MUIdemo from '../assets/muidemo.png';
import TodoDemo from '../assets/tododemo.png';
import NewsZilla from '../assets/newsappdemo.png';
import NFTdemo from '../assets/nftdemo.png';
import JaiPa from '../assets/ecommercedemo.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen h-screen:100vh text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 md:mt-48 mt-16'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects<lord-icon
    src="https://cdn.lordicon.com/qatykyxz.json"
    trigger="loop"
    delay="400" style={{width: "50px", height: "50px"}}></lord-icon>
          </p>
          <p className='py-6'>Check out some of my projects.</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div
            style={{ backgroundImage: `url(${TextUtils})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
                TextUtils <br/> • A quick way to analyze your text.<p> • Made in <span className='italic text-pink-300'>React</span></p>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://textutilswebsite.netlify.app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Yuvraj-Kaushal/TextUtils'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${MUIdemo})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
              Frontend Design <br/> • Facebook frontend design concept.<p> • Made in <span className='italic text-pink-300'>React , MaterialUI</span></p>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://muifacebookconcept.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Yuvraj-Kaushal/MUIreact'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TodoDemo})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
              ToDo App <br/> • Go and make your todo list 😉.<p> • Made in <span className='italic text-pink-300'>React</span></p>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://yuvraj-kaushal.github.io/5th_ReactJS/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Yuvraj-Kaushal/5th_ReactJS'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${NewsZilla})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
              NewsZilla <br/> • Read latest news very conviniently.<p> • Made in <span className='italic text-pink-300'>React , News API</span></p>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/Yuvraj-Kaushal/NewsZilla'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${NFTdemo})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
              NFT Marketplace <br/> • Go Mint your favourite NFT 😉.<p> • Made in <span className='italic text-pink-300'>React , Solidity</span></p>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://collectionsofnfts.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Yuvraj-Kaushal/CollectionsOFNFTs'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${JaiPa})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
              JaiPa eCommerce<br/> • Go shop your favourite goodies 😉.<p> • Made in <span className='italic text-pink-300'>NextJS , Tailwind, Mongo <br/> Node</span></p>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://jaipaecommerce.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Yuvraj-Kaushal/eCommerce'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
