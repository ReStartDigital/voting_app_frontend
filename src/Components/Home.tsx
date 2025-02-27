/* eslint-disable react/jsx-no-undef */
import React from "react";
const Details = require("../assets/images/detail.png");


const Home:React.FunctionComponent = ()=>{


    return (
        <section className="w-full h-full flex justify-start items-center flex-col overflow-x-hidden">
            <div className='w-full h-full flex justify-center items-center p-4 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse xx:flex-col-reverse'>
                <div className="w-full 2xl:h-60vh xl:h-60vh lg:h-full md:h-full sm:h-full xs:h-full xx:h-full flex justify-start p-4 items-start flex-col gap-2">
                    <div className=''>
                         <span className='2xl:text-6xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-3xl xx:text-3xl text-bluerry font-kanit font-bold'>Secure and Easy Voting</span>
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
            {/* <div className='w-full bg-red-500'>
               <input type='text' placeholder="" className='font-kanit '/>
            </div> */}
       </section>
    )
}

export default Home;