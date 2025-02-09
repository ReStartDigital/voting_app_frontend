/* eslint-disable react/jsx-no-undef */
import React from "react";
const Details = require("../assets/images/detail.png");


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

export default Home;