const Discount = () => {
    return (
      <div className="relative bg-[#F2E7DB] px-12 flex flex-col md:flex-row items-center  mx-10 lg:mx-20">
        {/* Text Section */}
        <div className="flex-1 py-16 lg:py-12  mx-auto text-center lg:mx-0 lg:text-left">
          <h2 className="text-xl md:text-4xl font-semibold lg:leading-relaxed ">
            Happy <span className="text-custom-coral">Chinese New Year</span>, 20% <br />discount for you today
          </h2>
          <button className="mt-4 bg-custom-green text-xl text-white font-bold py-2 px-4 rounded-sm">
            Subscribe Course
          </button>
        </div>
         {/* Floating Shapes mobile screen */}
        <div className="lg:hidden">
          <div className="absolute top-2 left-2 transform -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-custom-green rounded-full"></div>
          <div className="absolute bottom-2 right-2 transform translate-y-1/2 translate-x-1/2 w-10 h-10 bg-custom-green rounded-full"></div>
          <div className="absolute bottom-[10%] left-[20.5%] w-4 h-4 rounded-full bg-custom-coral rotate-12"></div>
          <div className="absolute bottom-[9%] left-[20%] w-4 h-4 rounded-full bg-[#CD6B3B] rotate-12"></div>
        </div>
        <div className="hidden lg:block">
          {/* Image Section */}
          <div className="flex-1 absolute bottom-0 right-16 flex justify-center md:justify-end">
              <img
                src="/src/images/discount-person.png"
                alt="Discount Offer"
                className="w-64 h-auto"
              />
          </div>
          
          {/* Floating Shapes large screen */}
          <div className="absolute top-2 left-2 transform -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-custom-green rounded-full"></div>
          <div className="absolute bottom-2 right-2 transform translate-y-1/2 translate-x-1/2 w-10 h-10 bg-custom-green rounded-full"></div>
          <div className="absolute top-[30%] right-[25%] w-8 h-8 bg-custom-green"></div>
          <div className="absolute top-[33%] right-[24.5%] w-8 h-8 border-2 border-custom-green"></div>
          <div className="absolute top-[30%] right-[5%] w-6 h-6 bg-custom-coral rotate-12"></div>
          <div className="absolute top-[33%] right-[4.5%] w-6 h-6 border-2 border-custom-coral rotate-12"></div>
          <div className="absolute bottom-[19%] right-[25.5%] w-4 h-4 rounded-full bg-custom-coral rotate-12"></div>
          <div className="absolute bottom-[18%] right-[25%] w-4 h-4 rounded-full bg-[#CD6B3B] rotate-12"></div>
          <div className="absolute bottom-[16%] right-[5%] w-6 h-6 bg-custom-green rotate-12"></div>
          <div className="absolute bottom-[18%] right-[4.5%] w-6 h-6 border-2 border-custom-green rotate-12"></div>
        </div>
      </div>
    );
  };
  
  export default Discount;
  