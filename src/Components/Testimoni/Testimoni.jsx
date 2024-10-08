import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import TestimoniCard from './TesimoniCard/TestimoniCard'; 

const Testimoni = () => {
  // Array of testimonial information
  const testimonisInfo = [
    {
      id: 1,
      name: "Jason Bay",
      description: "I am quite satisfied, because the skills I want or dream of can really be mastered",
      imageUrl: '/src/images/testimoniPerson1.jpeg', 
    },
    {
      id: 2,
      name: "Jason Bay",
      description: "I am quite satisfied, because the skills I want or dream of can really be mastered",
      imageUrl: '/src/images/testimoniPerson2.jpeg',
    },
    {
      id: 3,
      name: "Alexa Noman",
      description: "I am quite satisfied, because the skills I want or dream of can really be mastered",
      imageUrl: '/src/images/testimoniPerson3.jpeg',
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonisInfo.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonisInfo.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id='testimoni' className="bg-[#F8F8F8] py-20 px-10 lg:px-20 relative">
      {/* Heading section */}
      <h2 className="text-lg md:text-3xl lg:text-4xl font-semibold  mb-4 text-center">
        What do they <span className='text-custom-coral'>say?</span>
      </h2>
      <p className="text-xs text-[#808080]  md:text-[16px]  mb-12 mx-auto text-center">
        This is an honest review from members who have joined us
      </p>

      {/* floating shapes */}
      <div className="absolute top-[7%] left-[7%] w-6 h-6 bg-custom-green rotate-12 lg:hidden"></div>
      <div className="absolute top-[8%] left-[8%] w-6 h-6 border-2 border-custom-green rotate-12 lg:hidden"></div>
      <div className="absolute top-[11%] right-[6%] w-4 h-4 rounded-full bg-green-700 rotate-12 lg:hidden"></div>
      <div className="absolute top-[10%] right-[7%] w-5 h-5 rounded-full bg-custom-green rotate-12 lg:hidden"></div>
      
      {/* Mobile view testimonial slider */}
      <div className="lg:hidden flex justify-center items-center">
        <button onClick={handlePrev} className="rounded-full bg-white p-2 me-2">
          <FaArrowLeft className='text-black' /> 
        </button>
        <TestimoniCard testimoniInfo={testimonisInfo[currentIndex]} /> {/* Display the current testimonial */}
        <button onClick={handleNext} className="rounded-full bg-custom-green p-2 ms-2">
          <FaArrowRight className='text-white' />
        </button>
      </div>

      {/* Desktop view testimonials grid */}
      <div className="hidden lg:block relative">
        <div>
          <div className='lg:grid grid-cols-3 gap-4 justify-center'>
            {/* Display all testimonials in a grid */}
            {testimonisInfo.map((testimoniInfo) => (
              <TestimoniCard key={testimoniInfo.id} testimoniInfo={testimoniInfo} />
            ))}
          </div>
          <div className='mx-auto text-center mt-12'>
            {/* Arrow buttons below the grid for navigation */}
            <button className="rounded-full bg-white p-2 me-2">
              <FaArrowLeft className='text-black' /> 
            </button>
            <button className="rounded-full bg-custom-coral p-2 ms-2">
              <FaArrowRight className='text-white' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni; 
