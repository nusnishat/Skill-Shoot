import React from 'react';

const Media = () => {
    return (
        <div className='px-10 lg:px-20 py-20 text-center'>
            <h1 className='text-3xl mb-4'>Trusted more than <span className='text-custom-coral font-semibold'>100+</span> in the world</h1>
            <p className='leading-relaxed mb-12 text-[#808080]'>they have asked us more than 3 times to teach their employees <br /> about various things. to improve their skills</p>
            <div className='flex flex-wrap justify-between mb-12'>
                <img className='w-36' src="/src/images/uber.png" alt="" />
                <img className='w-36' src="/src/images/google.png" alt="" />
                <img className='w-36' src="/src/images/paypal.png" alt="" />
                <img className='w-36' src="/src/images/microsoft.png" alt="" />
                <img className='w-36' src="/src/images/dribble.png" alt="" />
            </div>
        </div>
    );
};

export default Media;