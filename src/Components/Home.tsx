import React from "react";
const Details = require("../assets/images/detail.png");

<<<<<<< Updated upstream

const Home:React.FunctionComponent = ()=>{


    return (
        <section className="w-full h-full flex justify-start items-center flex-col overflow-x-hidden">
            <div className='w-full h-full flex justify-center items-center p-4'>
                <div className="w-full h-60vh flex justify-start p-4 items-start flex-col gap-2">
                    <div className=''>
                         <span className='text-6xl text-bluerry font-kanit font-bold'>Secure and Easy Voting</span>
                    </div>
                   <div className=''>
                    <span className='font-kanit text-bluerry'>
                        Our online voting system is designed to make elections more convenient, accessible, and secure. 
                        By allowing voters to cast their ballots from anywhere, we increase participation and engagement. 
                        Our user-friendly interface ensures a seamless voting experience, while robust security measures protect voter data and election integrity.
                        We leverage encryption and authentication to prevent fraud and unauthorized access.
                        The system is built to handle high traffic efficiently, ensuring smooth and fair elections.
                        Our goal is to modernize voting, reduce barriers, and enhance democracy through technology-driven, transparent, and reliable solutions.
                    </span>
                   </div>
                </div>
                <div className='w-full h-full'>
                    <img src={Details} alt="Detail"/>
                </div>
            </div>
            <div></div>
       </section>
    )
}
=======
const Home: React.FunctionComponent = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-kanit font-bold bg-gradient-to-r from-bluerry to-blue-600 bg-clip-text text-transparent">
            Secure and Easy Voting
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-kanit leading-relaxed">
            Our online voting system is designed to make elections more
            convenient, accessible, and secure. By allowing voters to cast their
            ballots from anywhere, we increase participation and engagement.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-bluerry rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="font-kanit text-gray-600">
                User-friendly interface
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-bluerry rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <span className="font-kanit text-gray-600">
                Robust security measures
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-bluerry rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="font-kanit text-gray-600">
                High traffic handling
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="bg-bluerry text-white px-8 py-3 rounded-lg font-kanit hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
            <button className="border border-bluerry text-bluerry px-8 py-3 rounded-lg font-kanit hover:bg-bluerry hover:text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>
>>>>>>> Stashed changes

        {/* Image Section */}
        <div className="flex-1 relative">
          <img
            src={Details}
            alt="Voting Illustration"
            className="w-full h-auto max-w-xl mx-auto transform hover:scale-105 transition duration-500"
          />
          <div className="absolute -bottom-8 right-0 bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="font-kanit font-bold text-bluerry mb-2">
              Real-time Results
            </h3>
            <p className="text-sm text-gray-600 font-kanit">
              Get instant election results with our advanced counting system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
