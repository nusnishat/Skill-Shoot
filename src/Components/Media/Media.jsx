const Media = () => {
    return (
        <div className="px-10 lg:px-20 py-20 mx-auto text-center">
            <h1 className="text-lg md:text-3xl lg:text-4xl mb-4 font-semibold">
                Trusted more than <span className="text-custom-coral font-semibold">100+</span> in the world
            </h1>
            <p className="leading-loose mb-12 max-w-[285px] md:max-w-[400px]  mx-auto text-[#808080] text-xs md:text-[16px]">
                They have asked us more than 3 times to teach their employees about various things to improve their skills.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-8 justify-center md:justify-between lg:mb-12">
                <img className="w-32" src="/src/images/uber.png" alt="Uber" />
                <img className="w-32" src="/src/images/google.png" alt="Google" />
                <img className="w-32" src="/src/images/paypal.png" alt="PayPal" />
                <img className="w-32" src="/src/images/microsoft.png" alt="Microsoft" />
                <img className="w-32" src="/src/images/dribble.png" alt="Dribble" />
            </div>
        </div>
    );
};

export default Media;
