import React from "react";

const Profile = () => {
  return (
    <div className="mx-auto px-10 lg:px-20 py-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left  max-w-md ">
          <h2 className="text-xl md:text-4xl lg:text-3xl font-semibold mb-4 ">
            Why do we <span className="text-custom-coral">exist?</span>
          </h2>
          <p className="text-[#808080] leading-loose mx-auto text-sm lg:text-lg lg:mx-0">
            Because we know that many people or companies have the same problem
            when it comes to how difficult it is to improve their skills.
          </p>
          <div className="flex items-center mt-8 justify-center lg:justify-start mb-6">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src="/src/images/profile.jpeg"
              alt="Profile"
            />
            <div>
              <h4 className=" font-semibold">Jerony Pulquosta</h4>
              <p className="text-[#808080] text-sm">CEO Skill Shoot</p>
            </div>
          </div>
          <div className="flex gap-16 border-t border-gray-300 pt-4">
            <div className="text-center mt-8">
              <h3 className="text-xl lg:text-4xl font-bold">100+</h3>
              <p className="text-[#808080]  mt-4 text-sm">Updated Material</p>
            </div>
            <div className="text-center mt-8">
              <h3 className="text-xl lg:text-4xl font-bold">15K</h3>
              <p className="text-[#808080]  mt-4 text-sm">Member Join</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 text-center lg:text-left">
          <div className="">
            <img className="w-12 mb-4 mx-auto text-center" src="/src/images/cube.png" alt="" />
            <h4 className="text-xl lg:text-2xl text-[#245D51] font-semibold">Material Limitations</h4>
            <p className="text-[#808080] text-sm lg:text-lg leading-loose mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="">
            <img className="w-12 mb-4 mx-auto text-center" src="/src/images/pyramid.png" alt="" />
            <h4 className="text-xl lg:text-2xl text-[#245D51] font-semibold">Unprofessional Mentor</h4>
            <p className="text-[#808080] text-sm lg:text-lg leading-loose mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="">
          <img className="w-12 mb-4 mx-auto text-center" src="/src/images/woman.png" alt="" /> 
            <h4 className="text-xl lg:text-2xl text-[#245D51] font-semibold">Video Quality</h4>
            <p className="text-[#808080] text-sm lg:text-lg leading-loose mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="">
            <img className="w-12 mb-4 mx-auto text-center" src="/src/images/cylinder.png" alt="" />
            <h4 className="text-xl lg:text-2xl text-[#245D51] font-semibold">High Price</h4>
            <p className="text-[#808080] text-sm lg:text-lg leading-loose mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
