import { FaStar } from "react-icons/fa";


const TestimoniCard = ({ testimoniInfo }) => {
  const { id, description, imageUrl, name } = testimoniInfo;

  return (
    <div className={`${id == 2 ? 'bg-white' : 'bg-[#F8F8F8]'} rounded-xl mx-auto text-center overflow-hidden`}>
      <div className="flex justify-center pt-6 lg:pt-8 px-6 lg:px-8">
        <img
            src={imageUrl}
            alt={name}
            className="h-16 w-16 rounded-full mb-4"
        />
      </div>
      <div className="mb-4 text-[#FF9100] flex justify-center px-6 lg:px-8">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
        </div>
      <div className="px-6 lg:px-8 mb-6 lg:mb-8">
        <h1 className="text-lg lg:text-2xl font-semibold mb-4">{name}</h1>
        <p className="leading-loose font-normal text-xs lg:text-sm text-[#808080] max-w-64">{description}</p>
      </div>
      <div className={`${id == 2 && 'border-b-4 border-custom-green'}`}>
        
      </div>
    </div>
  );
};

export default TestimoniCard;
