import React from "react";
const Logo = require("../assets/images/logo.png");

const Header: React.FunctionComponent = () => {
  const [display, setDisplay] = React.useState<boolean>(false);

  const registerHandler = () => {
    window.location.href = "/register/user";
  };

  const loginHandler = () => {
    window.location.href = "/login/user";
  };

  const handleHome = () => {
    window.location.href = "/";
  };

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <>
      <header className="w-full h-20 bg-white fixed top-0 left-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo Section */}
          <div
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleHome}
          >
            <img src={Logo} alt="logo" className="h-12 w-auto" />
            <span className="text-2xl font-kanit font-bold text-bluerry">
              eVote Restart
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="/election"
              className="text-bluerry font-kanit hover:text-blue-600 transition-colors relative group"
            >
              Election
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="/contact-us"
              className="text-bluerry font-kanit hover:text-blue-600 transition-colors relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="/security"
              className="text-bluerry font-kanit hover:text-blue-600 transition-colors relative group"
            >
              Security
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="/terms"
              className="text-bluerry font-kanit hover:text-blue-600 transition-colors relative group"
            >
              Terms & Conditions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={loginHandler}
              className="px-6 py-2 text-bluerry font-kanit border border-bluerry rounded-lg hover:bg-bluerry hover:text-white transition-colors"
            >
              Login
            </button>
            <button
              onClick={registerHandler}
              className="px-6 py-2 bg-bluerry text-white font-kanit rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleClick}
            className="lg:hidden p-2 text-bluerry focus:outline-none hover:bg-gray-100 rounded-lg"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>

      {/* Mobile Menu */}
      {display && (
        <div className="lg:hidden fixed top-20 left-0 w-full bg-white shadow-lg z-40 animate-slideDown">
          <div className="flex flex-col space-y-4 p-4">
            <a
              href="/election"
              className="text-bluerry font-kanit hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Election
            </a>
            <a
              href="/contact-us"
              className="text-bluerry font-kanit hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Contact Us
            </a>
            <a
              href="/security"
              className="text-bluerry font-kanit hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Security
            </a>
            <a
              href="/terms"
              className="text-bluerry font-kanit hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Terms & Conditions
            </a>
            <button
              onClick={loginHandler}
              className="w-full py-2 text-bluerry font-kanit border border-bluerry rounded-lg hover:bg-bluerry hover:text-white"
            >
              Login
            </button>
            <button
              onClick={registerHandler}
              className="w-full py-2 bg-bluerry text-white font-kanit rounded-lg hover:bg-blue-700"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
