import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-custom-green text-white pt-24 pb-12 px-10 lg:px-20 relative">
      {/* Heading section */}
      <h2 className="text-lg md:text-3xl lg:text-4xl mb-4 text-center">
        Subscribe to get notified about update
      </h2>
      <p className="text-xs md:text-[16px] mb-16 text-center text-white opacity-60">
        By subscribing with your mail, you will accept our privacy policy
      </p>

      {/* Subscription Input and Button */}
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="w-2/3 text-xs md:text-[16px] lg:w-auto p-4 rounded-l-md text-white bg-[#286054] mb-6 lg:mb-0"
        />
        <button className="bg-custom-coral text-xs md:text-[16px] rounded-sm text-white p-4 lg:ml-4">
          Subscribe Us
        </button>
      </div>
      {/* floating vectors */}
      <div className="absolute top-[48%] lg:top-[43%] right-[10.5%] lg:right-[20.5%] w-10 h-10 border-4 rounded-full border-custom-coral "></div>
      <div className="absolute top-[50%] lg:top-[45%] right-[9%] lg:right-[19%] w-10 h-10 border-2 rounded-full border-custom-coral rotate-12"></div>
      <div className='absolute top-[65%] lg:top-[52%] left-[9%] lg:left-[19%]'>
        <svg width="100" height="80" viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
          <g transform="rotate(15, 50, 40)">
            <polyline points="0,40 20,20 40,60 60,40 80,60 100,40" stroke="hsla(20, 50%, 59%, 1)" stroke-width="4" fill="none" />
          </g>
        </svg>
      </div>

      {/* Footer Links and Brand Section */}
      <div className=" flex flex-col-reverse lg:flex-row justify-between items-center mt-28">
        {/* Brand Name */}
        <div className="font-bold text-xl md:text-2xl mt-12 lg:mt-0 lg:mr-auto text-center lg:text-left">
          Skill <span className='text-custom-coral'>Shoot</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center text-center lg:text-left">
          <a href="#home" className='text-white opacity-60 hover:opacity-100 mb-4 lg:mb-0'>Home</a>
          <a href="#course" className='text-white opacity-60 hover:opacity-100 mb-4 lg:mb-0'>Course</a>
          <a href="#subscribe" className='text-white opacity-60 hover:opacity-100 mb-4 lg:mb-0'>Subscribe</a>
          <a href="#about" className='text-white opacity-60 hover:opacity-100 mb-4 lg:mb-0'>About</a>
          <a href="#testimoni" className='text-white opacity-60 hover:opacity-100'>Testimoni</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
