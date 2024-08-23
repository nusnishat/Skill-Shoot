import { useState } from 'react';
import CourseCard from './CourseCard/CourseCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Basics of learning team management',
      instructor: 'Jane Owell',
      role: 'IT Manager',
      participants: 120,
      video: 25,
      price: '$120',
      person: '/src/images/cardperson1.jpeg',
      imageUrl: '/src/images/coursecard2.jpeg',
    },
    {
      id: 2,
      title: 'Learn basic database structure',
      instructor: 'Raynaldo Jr',
      role: 'Data Science',
      participants: 55,
      video: 20,
      price: '$180',
      person: '/src/images/card-person.jpeg',
      imageUrl: '/src/images/coursecard1.png',
    },
    {
      id: 3,
      title: 'Create dynamic website with basic PHP',
      instructor: 'Markus Low',
      role: 'Programmer',
      participants: 98,
      video: 25,
      price: '$135',
      person: '/src/images/card-person3.jpeg',
      imageUrl: '/src/images/coursecard3.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id='course' className="bg-custom-green py-20 px-10 lg:px-20 relative">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 text-center">
        Popular courses of the week
      </h2>
      <p className="text-sm md:text-[16px] leading:loose opacity-60 text-white mb-12 mx-auto text-center max-w-sm">
        List of the most popular lists that are often studied by our members
      </p>

      {/* floating shapes large screen */}
      <div className="absolute top-[7%] lg:top-[19%] left-[7%] lg:left-[13%] w-6 h-6 bg-custom-coral rotate-12"></div>
      <div className="absolute top-[8%] lg:top-[19.5%] left-[8%] lg:left-[12.5%] w-6 h-6 border-2 border-custom-coral rotate-12"></div>
      <div className="absolute top-[9%] lg:top-[19%] right-[6%] lg:right-[13.25%] w-5 h-5 rounded-full bg-custom-coral rotate-12"></div>
      <div className="absolute top-[10%] lg:top-[20%] right-[7%] lg:right-[13%] w-4 h-4 rounded-full bg-[#CD6B3B] rotate-12"></div>

      {/* mobile view */}
      <div className="lg:hidden flex justify-center items-center">
        <div className="bg-white bg-opacity-70 p-1 rounded-full flex items-center justify-center">
          <div className="bg-white p-1 rounded-full shadow-lg">
            <FaArrowLeft onClick={handlePrev} className="text-black" />
          </div>
        </div>
        <CourseCard course={courses[currentIndex]} />
        <div className="bg-white bg-opacity-70 p-1 rounded-full flex items-center justify-center">
          <div className="bg-custom-green p-1 rounded-full shadow-lg">
            <FaArrowRight onClick={handleNext} className="text-white" />
          </div>
        </div>
      </div>

      {/* large screen view */}
      <div className="hidden lg:flex justify-center items-center relative">
        <div className="">
          <div className="bg-white bg-opacity-70 p-2 rounded-full flex items-center justify-center">
            <div className="bg-white p-2 rounded-full shadow-lg">
              <FaArrowLeft className="text-black text-xl" />
            </div>
          </div>
        </div>
        <div className="lg:grid grid-cols-3 gap-6 justify-center">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="">
          <div className="bg-white bg-opacity-70 p-2 rounded-full flex items-center justify-center">
            <div className="bg-custom-green p-2 rounded-full shadow-lg">
              <FaArrowRight className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
