import { AiFillInstagram } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiPencil } from 'react-icons/hi';
import { IoLogoTwitter } from 'react-icons/io';
import { RxVideo } from 'react-icons/rx';
import { SlCalender } from 'react-icons/sl';

const Banner = () => {
  return (
    <div className="relative bg-custom-green text-white pt-12 px-10 lg:px-20 flex flex-col lg:flex-row items-center">
      {/* Banner Description Section */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-xl lg:text-4xl leading-relaxed lg:leading-snug font-bold mb-4 relative">
          There is always <br /> something new for us to learn
        </h1>
        <p className="text-md lg:text-lg text-custom-light mb-8 max-w-md leading-loose">
          We have created more than 100+ materials on various things that will help your career, with mentors who are experienced in their fields.
        </p>
        <div className="lg:flex mb-16">
          <button className="text-lg lg:text-xl bg-custom-coral text-white font-bold py-3 px-8 rounded-md">
            Start Journey <FiArrowUpRight className="inline ms-2 text-2xl font-extrabold" />
          </button>
          {/* Social Media Icons */}
          <div className="lg:ms-6 mt-6 flex justify-center lg:justify-start space-x-4">
            <AiFillInstagram className="text-2xl text-white" />
            <IoLogoTwitter className="text-2xl text-white" />
            <FaDiscord className="text-2xl text-white" />
          </div>
        </div>
      </div>

      {/* Image and Floating Elements for Larger Screens */}
      <div className="relative left-16 flex-1 hidden lg:flex justify-center items-center">
        {/* Main Image */}
        <img
          src="/src/images/banner-person.png"
          alt="Person"
          className="relative w-96 h-auto max-w-xs lg:max-w-md z-10"
        />
        {/* Floating Card with Avatar */}
        <div className="absolute bg-opacity-80 top-80 left-4 transform -translate-y-1/2 bg-white rounded-xl p-4 flex z-20 shadow-lg">
          <div>
            <img
              src="/src/images/card-person.jpeg"
              alt="Avatar"
              className="w-10 rounded-full"
            />
          </div>
          <div className="ms-4 text-sm">
            <p className="font-semibold text-gray-800">Learn basic UI/UX design</p>
            <p className="text-gray-600">Today at 3:00 PM</p>
            <button className="bg-pink-500 mt-2 text-white font-semibold py-2 px-4 rounded-lg">
              Join Now
            </button>
          </div>
        </div>
        {/* Floating Icons for Larger Screens */}
        <div className="absolute top-28 left-20 w-14 h-14 -rotate-12 bg-[#F88C3D] rounded-lg flex items-center justify-center z-10">
           <HiPencil className='text-white text-3xl' />
        </div>
        <div className="absolute top-36 rotate-12 right-16 w-14 h-14 bg-[#7252A4] rounded-lg flex items-center justify-center z-10">
            <RxVideo className='text-white text-3xl' />
        </div>
        <div className="absolute bottom-10 right-16 -rotate-12 w-14 h-14 bg-[#23BDEE] rounded-lg flex items-center justify-center z-10">
            <SlCalender className='text-white text-3xl' />
        </div> 
      </div>

      {/* Floating Icons for Mobile Screens */}
      <div className="absolute top-8 left-6 p-2 bg-[#F88C3D] rounded-lg flex items-center justify-center -rotate-12 lg:hidden z-10">
        <HiPencil className='text-white text-xl' />  
      </div>
      <div className="absolute bottom-20 left-6 -rotate-12 p-2 bg-[#23BDEE] rounded-lg flex items-center justify-center lg:hidden z-10">
        <SlCalender className='text-white text-xl' />
      </div>
      <div className="absolute bottom-8 right-10 rotate-12 transform translate-x-1/2 p-2 bg-[#7252A4] rounded-lg flex items-center justify-center lg:hidden z-10">
        <RxVideo className='text-white text-xl' />
      </div>
    </div>
  );
};

export default Banner;
