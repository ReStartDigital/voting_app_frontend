import React from 'react';
const Logo = require("../assets/images/logo.png");



const Header:React.FunctionComponent = ()=>{
    const [ display , setDisplay ] = React.useState<boolean>(false);

     const registerHandler = ()=>{
        window.location.href="/register/user";
     }

     const loginHandler = ()=>{
        window.location.href = "/login/user";
     }

     const handleHome = ()=>{
        window.location.href = "/";
     }
     const handleClick = ()=>{
        setDisplay(!display);
     }

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

                </div>
        </section>
    )
}

export default Header;