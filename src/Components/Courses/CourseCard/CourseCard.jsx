import { FaRegUser, FaPlay } from "react-icons/fa";

const CourseCard = ({ course }) => {
  const { title, imageUrl, instructor, participants, role, price, person, video } = course;

  return (
    <div className="rounded-xl shadow-md flex flex-col overflow-hidden relative">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="h-48 w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-20 p-2 rounded-full flex items-center justify-center">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <FaPlay className="text-custom-green text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-grow">
        <h3 className="px-4 lg:px-6 pt-4 text-lg md:text-2xl font-semibold text-[#2C2C2C]">
          {title}
        </h3>
        <div className="p-4 flex justify-between">
          <div className="flex space-x-2">
            <div>
              <img src={person} alt={instructor} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full" />
            </div>
            <div>
              <p className="text-sm md:text-[16px]">{instructor}</p>
              <p className="text-xs md:text-sm text-[#808080]">{role}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <div>
              <FaRegUser className="text-custom-green w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div>
              <p className="text-sm md:text-[16px]">{participants}</p>
              <p className="text-xs md:text-sm text-[#808080]">Participant</p>
            </div>
          </div>
        </div>
        <div className="p-4 lg:p-6 mt-2 bg-[#FAFAFA] flex justify-between">
          <button className="py-2 px-3 md:py-4 md:px-5 bg-custom-green text-white text-sm font-semibold rounded-lg">
            Buy Now
          </button>
          <div className="mt-5">
            <p className="text-lg lg:text-2xl font-semibold">
              {price}
              <span className="font-normal text-xs lg:text-sm text-[#808080]">
                /{video} video
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
