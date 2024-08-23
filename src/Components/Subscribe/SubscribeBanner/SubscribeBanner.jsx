import React from 'react';

const SubscribeBanner = () => {
    return (
     <div className="text-center lg:flex justify-between relative bg-[#F2E7DB] p-12 rounded-md">
        <div>
            <h1 className="text-xl lg:leading-relaxed lg:text-4xl font-semibold max-w-xl mb-6 lg:mb-0"><span className='text-custom-coral'>Improve</span> your skills, and reach your career as soon as possible</h1>
        </div>
        {/* floating vectors */}
        <div className="absolute bottom-[25%] lg:bottom-[-3%] right-[-6%] lg:right-[47%] w-6 h-6 lg:w-8 lg:h-8 bg-custom-coral rotate-12"></div>
        <div className="absolute bottom-[24%] lg:bottom-[-5%] right-[-3%] lg:right-[48%] w-6 h-6 lg:w-8 lg:h-8 border-2  border-custom-coral rotate-12"></div>
        {/* buttons */}
        <div className="lg:flex items-center space-y-4 space-x-4">
          <button className="px-4 py-2 bg-custom-coral text-white rounded-md">Join Now</button>
          <button className="px-4 py-2 bg-custom-green text-white rounded-md">Subscribe Course</button>
        </div>
      </div>
    );
};

export default SubscribeBanner;