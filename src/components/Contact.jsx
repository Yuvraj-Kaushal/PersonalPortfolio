import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-90vh bg-[#0a192f] flex justify-center items-center p-4'>
      
        <form method='POST' action="https://getform.io/f/08054668-c939-4b14-9b88-81617714a202" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 md:mt-48 mt-16'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email<lord-icon
    src="https://cdn.lordicon.com/xxdqfhbi.json"
    trigger="loop" style={{width: "50px", height: "50px"}}></lord-icon>- ykaushal364@gmail.com</p>
            </div>
            <input className='bg-[#9dc5f1] rounded-lg p-2 placeholder-gray-600 focus:placeholder-gray-500 ' type="text" placeholder='Your Name' name='name' />
            <input className='my-4 p-2 bg-[#9dc5f1] rounded-lg placeholder-gray-600 focus:placeholder-gray-500 ' type="email" placeholder='Your Email' name='email' />
            <textarea className='bg-[#9dc5f1] rounded-lg p-2 placeholder-gray-600 focus:placeholder-gray-500 ' name="message" rows="10" placeholder='Your Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact