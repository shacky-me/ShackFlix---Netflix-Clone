import { FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative overflow-hidden mb-20">
      <section className="flex flex-col justify-center items-center text-center text-white w-3/5 md:w-full mx-auto z-10 relative mt-35 md:mt-15">
        <div className="space-y-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Unlimited movies, TV <br /> shows, and more
          </h1>
          <p className="text-white text-lg mt-2 font-semibold">
            Starts at Ksh 200. Cancel anytime.
          </p>
        </div>

        <div className="mt-4">
          <p className="text-white font-semibold text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>

        <form className="mt-4 flex justify-center items-center space-x-2 md:w-[45%] md:mx-auto">
          <input
            type="text"
            placeholder="Email address"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 flex-grow"
          />
          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded cursor-pointer flex items-center space-x-2"
          >
            <span>Get Started</span>
            <FaAngleRight />
          </button>
        </form>
      </section>
    </div>
  );
};

export default Hero;
