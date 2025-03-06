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

<<<<<<< Updated upstream
    return (
        <section className='w-full h-10vh bg-white flex 2xl:justify-center z-30 xl:justify-center lg:justify-center md:justify-between xs:justify-between xx:justify-between items-center gap-5  p-1 overflow-x-hidden'>
            <div className='w-full h-[10%] bg-inherit flex justify-center items-center fixed z-30 shadow-md shadow-gray-200'>
                    <div className="w-full h-full flex justify-center items-center">
                            <div className="2xl:w-[50%] xl:w-[10%] lg:w-[15%] md:w-[20%] sm:w-[25%] xs:[30%] h-full flex justify-center items-center">
                                <img className='w-[] object-fill h-[90%] hover:cursor-pointer' onClick={handleHome} src={Logo} alt="logo-picture"/>
                                <span className="font-bold w-fullfont-kanit text-2xl text-bluerry">eVote Restart</span>
                            </div> 
                        <ul className='w-full h-full flex justify-start items-center 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-1 xs:p-0 xx:p-0'>
                            <li><a href="/election" className='p-4 font-kanit text-fonts active:text-black hover:underline 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden xx:hidden'>Election</a></li>
                            <li><a href="/contact-us" className='p-4 font-kanit text-fonts 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden xx:hidden hover:text-black hover:underline'>Contact Us</a></li>
                            <li><a href="/policy" className="p-4 font-kanit text-fonts 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden xx:hidden hover:text-black hover:underline">Privacy Policy</a></li>
                            <li><a href="/terms" className='p-4 font-kanit text-fonts 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden xx:hidden hover:text-black hover:underline'>Terms &amp; Conditions</a></li>             
                        </ul>
                    </div>
                    <div className="2xl:w-[26%] xl:w-[60%] lg:w-[60%] md:w-[70%] sm:w-[90%] xs:w-[90%] xx:w-[90%] h-full flex 2xl:justify-center xl:justify-center lg:justify-center md:justify-between sm:justify-center xs:justify-between items-center 2xl:p-2 xl:p-2 lg:p-2 md:p-0 sm:p-0 xs:p-0">
                        <div className='w-[45%] h-[70%] hover:cursor-pointer bg-bluerry flex justify-center items-center 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden xx:hidden pl-2 pr-2 rounded-md'>
                            <span className='text-white font-kanit' onClick={loginHandler}>Login</span>
                        </div>
                        <div className='w-full h-full 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden xx:hidden justify-center items-center p-2'>
                            <button className='group 2xl:p-3 xl:p-3 lg:p-3 md:p-3 sm:p-3 xs:p-1  2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[70%] sm:w-[70%] xs:w-[100%] font-kanit ml-4 rounded-xl flex justify-center items-center text-black' onClick={registerHandler}>
                               Sign up
                            </button>
                        </div> 
                        
                    </div>
                    <div className='w-full h-full 2xl:hidden xl:hidden lg:hidden md:flex sm:flex xs:flex xx:flex justify-end items-center p-2'>
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
                        </svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 28 28">
                            <path fill="currentColor" d="M3 6.75A.75.75 0 0 1 3.75 6h18.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75m0 14a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75M3.75 13a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5z"/>
                        </svg> */}
                    </div>
=======
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
>>>>>>> Stashed changes

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
