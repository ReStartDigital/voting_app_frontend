import React from "react";
const pic1 = require("../assets/images/Frame29.png");
const pic2 = require("../assets/images/Frame30.png");
const pic3 = require("../assets/images/Frame31.png");
const pic4 = require("../assets/images/Frame32.png");
const pic5 = require("../assets/images/security.png");
const pic6 = require("../assets/images/website.png");
const pic7 = require("../assets/images/privacypolicy.png");
const pic8 = require("../assets/images/comments.png");


const AfterLogin:React.FC = ()=>{
    return (
        <section className='w-full h-screen flex justify-start items-center flex-col overflow-x-hidden'>
            <div className='w-[88%] p-4 flex 2xl:flex-row  xl:flex-row lg:flex-row md:flex-col 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-8 sm:space-y-8 xs:space-y-8 xx:space-y-8 sm:flex-col xs:flex-col xx:flex-col justify-between items-center border-dashed border-b-2 border-need'>
                <button className='2xl:w-[20%] xl:w-[20%] lg:w-[50%] md:w-full sm:w-full xs:w-full xx:w-full bg-bluerry p-1 font-kanit text-white rounded-xl flex justify-center items-center'>
                    Start a voting process
                    <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 42C15.6 42 8 34.4 8 25C8 15.6 15.6 8 25 8C34.4 8 42 15.6 42 25C42 34.4 34.4 42 25 42ZM25 10C16.7 10 10 16.7 10 25C10 33.3 16.7 40 25 40C33.3 40 40 33.3 40 25C40 16.7 33.3 10 25 10Z" fill="white"/>
                        <path d="M24.7 34.7001L23.3 33.3L31.6 25L23.3 16.7L24.7 15.3L34.4 25L24.7 34.7001Z" fill="white"/>
                        <path d="M16 24H33V26H16V24Z" fill="white"/>
                    </svg>
                </button>
                <div className='flex 2xl:w-[18%] xl:w-[20%] lg:w-[20%] md:w-full sm:w-full xs:w-full xx:w-full justify-start items-center outline-dotted p-2 outline-need'>
                    <img src={pic1} alt='picture_1'/>
                    <img src={pic2} alt='picture_2'/>
                    <img src={pic3} alt='picture_3'/>
                    <span className='font-kanit text-need ml-2'>Need help?</span>
                </div>
            </div>
            <div className='w-full h-80vh  mt-8 relative'>
                <img src={pic4} alt="background-image" className="w-full 2xl:h-full xl:h-full lg:h-full md:h-[60%] sm:h-[60%] xs:h-[60%] xx:h-[60%] object-cover" />
                <div className='2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-full sm:w-full xs:w-full xx:w-full absolute top-[30%] left-[25%] flex justify-center items-center'>
                    <span className='text-white text-center font-kanit 2xl:text-8xl xl:text-8xl lg:text-6xl md:text-5xl sm:text-6xl xs:text-5xl xx:text-5xl capitalize'>
                        Online Voting, Made simple
                    </span>
                </div>
                <div className='w-full p-4 flex justify-center items-center'>
                    <div className='w-[89%] p-4 flex justify-start items-center border-dashed border-b-2 border-need'>

                    </div>
                </div>
                <div className="w-full h-20vh flex justify-center items-center">
                    <div className='w-[88%] flex flex-col'>
                        <span className='capitalize font-kanit text-bluerry'>why choose evote Restart</span>
                        <span className='uppercase text-need font-kanit 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-2xl xx:text-xl '>transform your approach to voting</span>
                    </div>
                   
                </div>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[88%] grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xx:grid-cols-1 gap-5'>
                    <div className="bg-subject rounded-lg h-full flex justify-between items-center p-4">
                            <div className='flex flex-col justify-center items-start'>
                                <div className="bg-subject h-full flex justify-between items-center">
                                    <div className='flex flex-col justify-center items-start'>
                                        <span className='text-bluerry text-3xl font-kanit'>Security System</span>
                                        <span className='font-need font-kanit'>
                                            We offer a service that allows people to make their decisions in a 100% secure way.
                                        </span>
                                    </div>
                                    <div>
                                        <img src={pic5} alt="security" className='w-full h-[60%] object-contain'/>
                                    </div>
                                </div>
                                <div className="w-full flex justify-start items-center">
                                    <span className='underline text-bluerry font-kanit text-xl flex hover:cursor-pointer'>
                                    <svg className='text-bluerry' width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25 42C15.6 42 8 34.4 8 25C8 15.6 15.6 8 25 8C34.4 8 42 15.6 42 25C42 34.4 34.4 42 25 42ZM25 10C16.7 10 10 16.7 10 25C10 33.3 16.7 40 25 40C33.3 40 40 33.3 40 25C40 16.7 33.3 10 25 10Z" fill="#064A7B"/>
                                        <path d="M24.7 34.7001L23.3 33.3L31.6 25L23.3 16.7L24.7 15.3L34.4 25L24.7 34.7001Z" fill="#064A7B"/>
                                        <path d="M16 24H33V26H16V24Z" fill="#064A7B"/>
                                    </svg>
                                    Read more
                                    </span>
                                </div>
                            </div>
                        </div>
                       
                        <div className="bg-subject rounded-lg h-full flex justify-between items-center p-4">
                            <div className='flex flex-col justify-center items-start'>
                                <div className="bg-subject h-full flex justify-between items-center">
                                    <div className='flex flex-col justify-center items-start'>
                                        <span className='text-bluerry text-3xl font-kanit'>EFFICIENT PLATFORM</span>
                                        <span className='font-need font-kanit'>
                                            Our services simplify the process, facilitate access, increase participation and reduce costs
                                        </span>
                                    </div>
                                    <div>
                                        <img src={pic6} alt="security" className='w-full h-full object-cover'/>
                                    </div>
                                </div>
                                <div className="w-full flex justify-start items-center">
                                    <span className='underline text-bluerry font-kanit text-xl flex hover:cursor-pointer'>
                                    <svg className='text-bluerry' width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25 42C15.6 42 8 34.4 8 25C8 15.6 15.6 8 25 8C34.4 8 42 15.6 42 25C42 34.4 34.4 42 25 42ZM25 10C16.7 10 10 16.7 10 25C10 33.3 16.7 40 25 40C33.3 40 40 33.3 40 25C40 16.7 33.3 10 25 10Z" fill="#064A7B"/>
                                        <path d="M24.7 34.7001L23.3 33.3L31.6 25L23.3 16.7L24.7 15.3L34.4 25L24.7 34.7001Z" fill="#064A7B"/>
                                        <path d="M16 24H33V26H16V24Z" fill="#064A7B"/>
                                    </svg>
                                    Read more
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-subject rounded-lg h-full flex justify-between items-center p-4">
                            <div className='flex flex-col justify-center items-start'>
                                <div className="bg-subject h-full flex justify-between items-center">
                                    <div className='flex flex-col justify-center items-start'>
                                        <span className='text-bluerry text-3xl font-kanit'>Assistance</span>
                                        <span className='font-need font-kanit'>
                                            In addition to the product, there is a Team of specialists, consultants of voting processes and election technologie
                                        </span>
                                    </div>
                                    <div>
                                        <img src={pic8} alt="security" className='w-full h-full object-cover'/>
                                    </div>
                                </div>
                                <div className="w-full flex justify-start items-center">
                                    <span className='underline text-bluerry font-kanit text-xl flex hover:cursor-pointer'>
                                    <svg className='text-bluerry' width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25 42C15.6 42 8 34.4 8 25C8 15.6 15.6 8 25 8C34.4 8 42 15.6 42 25C42 34.4 34.4 42 25 42ZM25 10C16.7 10 10 16.7 10 25C10 33.3 16.7 40 25 40C33.3 40 40 33.3 40 25C40 16.7 33.3 10 25 10Z" fill="#064A7B"/>
                                        <path d="M24.7 34.7001L23.3 33.3L31.6 25L23.3 16.7L24.7 15.3L34.4 25L24.7 34.7001Z" fill="#064A7B"/>
                                        <path d="M16 24H33V26H16V24Z" fill="#064A7B"/>
                                    </svg>
                                    Read more
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-subject rounded-lg h-full flex justify-between items-center p-4">
                            <div className='flex flex-col justify-center items-start'>
                                <div className="bg-subject h-full flex justify-between items-center">
                                    <div className='flex flex-col justify-center items-start'>
                                        <span className='text-bluerry text-3xl font-kanit'>Privacy</span>
                                        <span className='font-need font-kanit'>
                                            Our voting process is ruled by strict rules on the use, safekeeping, retention and deletion of information, and standardized and public procedures.
                                        </span>
                                    </div>
                                    <div>
                                        <img src={pic7} alt="security" className='w-full h-full object-cover'/>
                                    </div>
                                </div>
                                <div className="w-full flex justify-start items-center">
                                    <span className='underline text-bluerry font-kanit text-xl flex hover:cursor-pointer'>
                                    <svg className='text-bluerry' width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25 42C15.6 42 8 34.4 8 25C8 15.6 15.6 8 25 8C34.4 8 42 15.6 42 25C42 34.4 34.4 42 25 42ZM25 10C16.7 10 10 16.7 10 25C10 33.3 16.7 40 25 40C33.3 40 40 33.3 40 25C40 16.7 33.3 10 25 10Z" fill="#064A7B"/>
                                        <path d="M24.7 34.7001L23.3 33.3L31.6 25L23.3 16.7L24.7 15.3L34.4 25L24.7 34.7001Z" fill="#064A7B"/>
                                        <path d="M16 24H33V26H16V24Z" fill="#064A7B"/>
                                    </svg>
                                    Read more
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-50vh'>

                </div>
            </div>
        </section>
    )
}


export default AfterLogin;