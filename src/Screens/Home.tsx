import React from "react";
import { Link } from "react-router-dom";
const Details = require("../assets/images/detail.png");

const Home: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-200">
      <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-20">
        {/* Text Content */}
        <div className="flex-1 space-y-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-kanit font-extrabold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent leading-tight animate-fade-in">
            Secure and Easy Voting
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-kanit leading-relaxed max-w-2xl">
            Our online voting system is designed to make elections more
            convenient, accessible, and secure. By allowing voters to cast their
            ballots from anywhere, we increase participation and engagement.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-blue-700 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-white"
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
              <span className="font-kanit text-gray-700 text-lg group-hover:text-blue-600 transition-colors duration-300">
                User-friendly interface
              </span>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-blue-700 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-white"
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
              <span className="font-kanit text-gray-700 text-lg group-hover:text-blue-600 transition-colors duration-300">
                Robust security measures
              </span>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-blue-700 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-white"
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
              <span className="font-kanit text-gray-700 text-lg group-hover:text-blue-600 transition-colors duration-300">
                High traffic handling
              </span>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-blue-700 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-kanit text-gray-700 text-lg group-hover:text-blue-600 transition-colors duration-300">
                Real-time updates
              </span>
            </div>
          </div>
          <div className="flex space-x-6">
            <Link
              to="/register/user"
              className="bg-gradient-to-r from-blue-600 to-blue-600 text-white px-10 py-4 rounded-xl font-kanit text-lg font-semibold hover:from-blue-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </Link>
            <Link
              to="/election"
              className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-xl font-kanit text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative">
          <img
            src={Details}
            alt="Voting Illustration"
            className="w-full h-auto max-w-lg mx-auto transform hover:scale-105 transition duration-500 rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-12 right-4 bg-white p-6 rounded-xl shadow-xl max-w-sm border border-blue-100 transform hover:scale-105 transition duration-300">
            <h3 className="font-kanit font-bold text-blue-600 text-xl mb-2">
              Real-time Results
            </h3>
            <p className="text-sm text-gray-600 font-kanit leading-relaxed">
              Get instant election results with our advanced counting system.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition duration-300">
            <h4 className="text-4xl font-kanit font-bold text-blue-600">
              500K+
            </h4>
            <p className="text-gray-600 font-kanit mt-2">Votes Cast</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition duration-300">
            <h4 className="text-4xl font-kanit font-bold text-blue-600">
              99.9%
            </h4>
            <p className="text-gray-600 font-kanit mt-2">Uptime</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition duration-300">
            <h4 className="text-4xl font-kanit font-bold text-blue-600">
              100+
            </h4>
            <p className="text-gray-600 font-kanit mt-2">Elections Hosted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
