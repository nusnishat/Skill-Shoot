import SubscribeBanner from './SubscribeBanner/SubscribeBanner';
import SubscribeCard from './SubscribeCard/SubscribeCard'

const Subscribe = () => {
  const plans = [
    {
      price: "50",
      duration: "1 month",
      title: "Base",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      features: [
        "Access all videos",
        "Get Certificate",
        "Chat Support",
        "Update Notification",
        "Download material"
      ],
    },
    {
      price: "100",
      duration: "6 month",
      title: "Pro",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      features: [
        "Access all videos",
        "Get Certificate",
        "Chat Support",
        "Update Notification",
        "Download material"
      ],
    },
    {
      price: "200",
      duration: "12 month",
      title: "Enterprise",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      features: [
        "Access all videos",
        "Get Certificate",
        "Chat Support",
        "Update Notification",
        "Download material"
      ],
    },
  ];

  return (
    <div className="px-10 lg:px-20">
      <SubscribeBanner></SubscribeBanner>
      <div className="max-w-xl mx-auto text-center mt-20 mb-16">
        <h2 className="text-xl lg:text-4xl font-semibold mb-4"><span className='text-custom-coral'>Subscribe</span> with us now</h2>
        <p className="text-[#808080] mb-8 leading-relaxed">By subscribing now you will be able to access the material easily and cheaply, so you will be very efficient and benefit</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto max-w-[850px] pb-16 lg:pb-20">
        {plans.map((plan, index) => (
          <SubscribeCard
            key={index}
            plan = {plan}
          />
        ))}
      </div>
    </div>
  );
};

export default Subscribe;
