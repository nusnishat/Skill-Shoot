import SubscribeCard from './SubscribeCard/SubscribeCard'

const Subscribe = () => {
  const plans = [
    {
      price: "50",
      duration: "month",
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
    <div className="flex flex-col items-center justify-center p-6 space-y-10 bg-gray-50">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">Improve your skills, and reach your career as soon as possible</h1>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600">Join Now</button>
          <button className="px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800">Subscribe Course</button>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Subscribe with us now</h2>
        <p className="text-gray-500">By subscribing now you will be able to access the material easily and cheaply, so you will be very efficient and benefit</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
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
