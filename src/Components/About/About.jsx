import { BiVideoRecording } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { FiUserCheck } from 'react-icons/fi';
import { HiPencil } from 'react-icons/hi';
import { RxVideo } from 'react-icons/rx';
import { SlCalender } from 'react-icons/sl';

const About = () => {
  return (
    <div id='about' className="relative px-10 pt-16 pb-20 lg:pt-12 lg:pb-20 lg:px-20 lg:grid gap-4 grid-cols-2">
      {/* Image and Floating Elements for Larger Screens */}
      <div className="relative hidden lg:flex justify-center items-center">
        {/* Circular Background */}
        <div className="absolute w-[457px] h-[338px] bg-custom-green rounded-t-full bottom-0 left-1/2 transform -translate-x-1/2 z-0"></div>
        <img
          src="/src/images/about-person.png"
          alt="Person"
          className="relative w-96 h-auto max-w-xs lg:max-w-md z-10"
        />
        {/* Floating Card with Avatar */}
        <div className="absolute bg-opacity-80 -bottom-6 left-1/2 transform -translate-y-1/2 bg-white rounded-xl p-4 flex z-20 shadow-lg">
          <div>
            <img
              src="/src/images/about-card.jpeg"
              alt="Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="ms-4 text-sm">
            <p className="text-[12px] font-semibold text-gray-800">How to build a team</p>
            <p className="text-[10px] text-gray-600">Today at 12 PM</p>
            <button className="bg-pink-500 text-xs mt-2 text-white font-semibold py-2 px-4 rounded-lg">
              Join Now
            </button>
          </div>
        </div>
        {/* Floating Icons for Larger Screens */}
        <div className="absolute top-28 left-20 w-14 h-14 -rotate-12 bg-[#F88C3D] rounded-lg flex items-center justify-center z-10">
           <HiPencil className='text-white text-3xl' />
        </div>
        <div className="absolute top-36 right-16 rotate-12 w-14 h-14 bg-[#7252A4] rounded-lg flex items-center justify-center z-10">
            <RxVideo className='text-white text-3xl' />
        </div>
        <div className="absolute bottom-10 left-16 -rotate-12 w-14 h-14 bg-[#23BDEE] rounded-lg flex items-center justify-center z-10">
            <SlCalender className='text-white text-3xl' />
        </div> 
      </div>

      {/* Right Section */}
      <div className="max-w-lg mt-10 lg:mt-0 lg:ml-12  lg:text-left mx-auto ">
        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold lg:mt-20 mb-8 lg:mb-12">
          Let us <span className="text-custom-green">Skill Shoot</span>
        </h2>
        <p className="text-xs md:text-[16px] text-[hsla(0, 0%, 50%, 1)] leading-loose">
          We are a company engaged in education with the aim of improving the skills of many people so that younger people can reach the career paths they want.
        </p>
        <p className="text-xs md:text-[16px] mt-4 text-[hsla(0, 0%, 50%, 1)] leading-loose">
          We have been around since 2019 with currently 100+ updated materials and 15K members who have joined.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-8">
          <div className="flex items-center space-x-2">
            <div className='bg-[#FFF6F1] w-12 h-12 rounded-full flex justify-center items-center me-2'><FaRegUser className=' text-custom-coral text-lg lg:text-xl'/></div>
            <p className="text-xs md:text-[16px] font-semibold text-black">15K People Join</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className='bg-[#FFF6F1] w-12 h-12 rounded-full flex justify-center items-center me-2'><FiUserCheck className=' text-custom-coral text-lg lg:text-xl'/></div>
            <p className="text-xs md:text-[16px] font-semibold text-black">Trusted Mentor</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className='bg-[#FFF6F1] w-12 h-12 rounded-full flex justify-center items-center me-2'><BiVideoRecording className=' text-custom-coral text-lg lg:text-xl'/></div>
            <p className="text-xs md:text-[16px] font-semibold text-black">30+ Free Videos</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className='bg-[#FFF6F1] w-12 h-12 rounded-full flex justify-center items-center me-2'><RxVideo className=' text-custom-coral text-lg lg:text-xl'/></div>
            <p className="text-xs md:text-[16px] font-semibold text-black">100+ Premium Videos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
