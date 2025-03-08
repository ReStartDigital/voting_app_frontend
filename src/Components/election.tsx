import React from "react";
const pic1 = require("../assets/images/Frame32.png");
const pic2 = require("../assets/images/Frame65.png");
// const pic3 = require("../assets/images/Frame81.png");
const pic4 = require("../assets/images/Frame83.png");
const pic5 = require("../assets/images/Frame84.png");
const pic6 = require("../assets/images/Frame85.png");
const pic7 = require("../assets/images/Frame86.png");

const Election: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative w-full h-[500px]">
                <img
                    src={pic1}
                    alt="Students using eBallot"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4">
                    <h1 className="text-white text-5xl font-bold font-kanit text-center">
                        Revolutionizing School Elections
                    </h1>
                    <p className="text-white text-xl font-kanit max-w-2xl text-center">
                        Modern, secure, and accessible voting solutions designed specifically for educational institutions
                    </p>
                    <button className="bg-bluerry text-white px-8 py-3 rounded-lg font-kanit font-semibold hover:bg-blue-700 transition-colors">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold font-kanit text-bluerry">
                            Why Choose eBallot?
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-bluerry rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-kanit font-semibold text-xl">Simplified Voting Process</h3>
                                    <p className="text-gray-600 font-kanit">
                                        Intuitive interface for both voters and administrators
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-bluerry rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-kanit font-semibold text-xl">Military-Grade Security</h3>
                                    <p className="text-gray-600 font-kanit">
                                        End-to-end encryption and fraud prevention
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-bluerry rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-kanit font-semibold text-xl">Real-Time Results</h3>
                                    <p className="text-gray-600 font-kanit">
                                        Instant results with detailed analytics
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={pic2} alt="Voting Process" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Use Cases Section */}
            <div className="bg-bluerry py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold font-kanit text-white text-center mb-12">
                        Voting Solutions for Every Need
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <img src={pic4} alt="SRC Voting" className="w-full h-40 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-kanit font-bold text-bluerry mb-2">SRC Elections</h3>
                            <p className="text-gray-600 font-kanit">
                                Streamlined student government elections
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <img src={pic5} alt="Department Voting" className="w-full h-40 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-kanit font-bold text-bluerry mb-2">Department Voting</h3>
                            <p className="text-gray-600 font-kanit">
                                Faculty and department-level decision making
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <img src={pic6} alt="Awards Voting" className="w-full h-40 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-kanit font-bold text-bluerry mb-2">Awards Voting</h3>
                            <p className="text-gray-600 font-kanit">
                                Student and faculty recognition programs
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <img src={pic7} alt="Club Elections" className="w-full h-40 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-kanit font-bold text-bluerry mb-2">Club Elections</h3>
                            <p className="text-gray-600 font-kanit">
                                Student organization leadership elections
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="container mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold font-kanit text-bluerry text-center mb-12">
                    What Schools Are Saying
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <p className="text-gray-600 font-kanit italic mb-4">
                            "eBallot transformed our election process, making it more efficient and accessible for all students."
                        </p>
                        <div className="flex items-center space-x-4">
                            <img src={pic4} alt="Testimonial" className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <h4 className="font-kanit font-semibold">John Doe</h4>
                                <p className="text-gray-500 font-kanit">School Administrator</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <p className="text-gray-600 font-kanit italic mb-4">
                            "The security features gave us peace of mind, and the real-time results were a game-changer."
                        </p>
                        <div className="flex items-center space-x-4">
                            <img src={pic4} alt="Testimonial" className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <h4 className="font-kanit font-semibold">Jane Smith</h4>
                                <p className="text-gray-500 font-kanit">Student Council President</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      
      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-bluerry to-blue-500 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-kanit text-white mb-4">
            Ready to Revolutionize Your Elections?
          </h2>
          <p className="text-lg text-white font-kanit mb-8">
            Experience the power of eBallot for yourself. Get started today and
            discover a more efficient, secure, and accessible way to conduct
            elections.
          </p>
          <button className="bg-white text-bluerry px-8 py-3 rounded-lg font-kanit font-semibold hover:bg-gray-200 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Election;
