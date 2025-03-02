/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
const pic1 = require("../assets/images/Frame75.png")
const pic2 = require("../assets/images/Frame77.png");
const pic3 = require("../assets/images/Frame81.png");
const pic4 = require("../assets/images/Frame83.png")
const pic5 = require("../assets/images/Frame84.png");
const pic6 = require("../assets/images/Frame85.png");
const pic7 = require("../assets/images/Frame86.png")


const Election: React.FC= ()=>{

    return (
        <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div className="relative w-full h-[400px]">
          <img
            src={pic1}
            alt="Students using eBallot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold font-kanit">eBallot for Schools</h1>
          </div>
        </div>
  
        {/* Voting System Features */}
        <div className="container mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <img src={pic2} alt="Students Voting" className="w-full h-80 object-cover rounded-lg" />
            <div>
              <h2 className="2xl:text-6xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl xx:text-4xl font-bold mb-4 font-kanit text-need">Voting system designed for students.</h2>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="text-blue-500 mr-2 font-kanit">✔</span><span className="font-kanit">Create unlimited <a href="#" className="text-blue-500 underline">online ballots</a></span></li>
                <li className="flex items-center"><span className="text-blue-500 mr-2 font-kanit">✔</span><span className="font-kanit">Collect responses from eligible voters</span></li>
                <li className="flex items-center"><span className="text-blue-500 mr-2 font-kanit">✔</span><span className="font-kanit">Review results and make decisions – no app required</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12 bg-blue-900 text-white rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-bold font-kanit mb-4">Move beyond counting hands and scanning ballots.</h2>
            <p className='font-kanit'>You might be surprised how easy and inexpensive secure online voting can be for your school. You’ll have a better experience building and managing votes, and it’s less wasteful than paper ballots.</p>
          </div>
          <img src={pic3} alt="Students using laptop for voting" className="w-full h-80 object-cover rounded-lg" />
        </div>
      </div>
  
        {/* Why Choose eVote Restart? */}
        <div className="container mx-auto">
          <h2 className="2xl:text-6xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl xx:text-4xl font-bold text-center mb-6 font-kanit text-bluerry">Why Choose eVote Restart for your School?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 relative rounded-lg">
              <img src={pic4} alt="SRC Voting" className="w-full h-full object-cover rounded-lg" />
              <p className="text-center mt-2 font-kanit text-5xl absolute bottom-8 left-6 text-white">SRC Voting</p>
            </div>
            <div className="p-4 rounded-lg relative">
              <img src={pic5} alt="Department Voting" className="w-full h-full object-cover rounded-lg" />
              <p className="text-center mt-2 font-kanit absolute bottom-8 left-6 text-5xl text-white">Department Voting</p>
            </div>
            <div className="p-4 relative rounded-lg">
              <img src={pic6} alt="SRC Voting" className="w-full h-full object-cover rounded-lg" />
              <p className="absolute bottom-8 left-6 text-center text-white mt-2 text-5xl font-kanit">Awards Voting</p>
            </div>
            <div className="p-4 rounded-lg relative">
              <img src={pic7} alt="Department Voting" className="w-full h-full object-cover rounded-lg" />
              <p className="absolute bottom-8 left-6 text-center text-white text-5xl z-50 mt-2 font-kanit">Club Voting</p>
            </div>
          </div>
        </div>

        <div className="relative bg-bluerry text-white shadow-lg h-full overflow-hidden">
        {/* SVG Wave on Top */}

    {/* Content */}
    <div className="container mx-auto px-6 py-12 ">
        <h2 className="text-2xl font-bold text-center mb-6 font-kanit">
        All the tools needed to build and manage school votes.
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-white">
        <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
            <span className='font-kanit'>Voter Notification</span>
            <span>&#8250;</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
            <span className='font-kanit'>Branded Voter portals</span>
            <span>&#8250;</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
            <span className='font-kanit'>One-click links</span>
            <span>&#8250;</span>
            </div>
        </div>
        <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
            <span className='font-kanit'>Anonymity options</span>
            <span>&#8250;</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
            <span className='font-kanit'>Candidate profiles</span>
            <span>&#8250;</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
            <span className='font-kanit'>Web Access</span>
            <span>&#8250;</span>
            </div>
        </div>
        </div>
    </div>

    </div>
</div>
    );
}

export default Election;

