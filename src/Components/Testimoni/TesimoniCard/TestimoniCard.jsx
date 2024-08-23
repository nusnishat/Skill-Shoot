import { FaStar } from "react-icons/fa";


const TestimoniCard = ({ testimoniInfo }) => {
  const { description, imageUrl, name } = testimoniInfo;

  return (
    <div className="rounded-xl p-6 lg:p-8 bg-white mx-auto text-center overflow-hidden">
      <div className="flex justify-center">
        <img
            src={imageUrl}
            alt={name}
            className="h-16 w-16 rounded-full mb-4"
        />
      </div>
      <div className="mb-4 text-[#FF9100] flex justify-center">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
        </div>
      <div className="">
        <h1 className="text-lg lg:text-2xl font-semibold mb-4">{name}</h1>
        <p className="leading-loose font-normal text-xs lg:text-sm text-[#808080] max-w-64">{description}</p>
      </div>
    </div>
  );
};

export default TestimoniCard;
