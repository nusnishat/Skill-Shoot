
import { MdCheck } from 'react-icons/md';
import './SubscribeCard.css';
import { FaCheck} from 'react-icons/fa';


const SubscribeCard = ({ plan }) => {
    const {price, duration, title, description, features} = plan;
  return (
    <div className="card relative p-6 rounded-xl transition">
      <div>
      <button className='btn-hidden px-4 text-xs rounded-full py-2'>
        Most Popular
      </button>
      </div>
      <h1 className='price'>
        <span className='text-xl lg:text-4xl font-bold'>${price}</span> <span className='duration'>/ {duration}</span>
      </h1>
      <h3 className='title text-xl lg:text-4xl font-bold'>{title}</h3>
      <p >{description}</p>
      <ul className='mt-4'>
        {features.map((feature, index) => (
            <li className='mb-2' key={index}><MdCheck className='me-4 inline bg-slate-200  rounded-full' />{feature}</li>
        ))}
      </ul>
      <button className='btn px-12 rounded-full py-2'>
        Choose plan
      </button>
    </div>
  );
};

export default SubscribeCard;
