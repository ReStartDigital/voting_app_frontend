import React from 'react';
const photo = require('../assets/images/Frame65.png');
const Phoneimg = require('../assets/images/Frame63.png');
const security = require('../assets/images/Frame64.png');

const Security = () => {
    return (
        <section className='w-full h-full px-4 md:px-8'>
            {/* Hero Section */}
            <section className='w-full flex flex-col items-center gap-5'>
                <div className='w-full h-full'>
                    <img src={Phoneimg} alt='Security' className='w-full h-auto object-cover' />
                </div>
            </section>

            {/* Title */}
            <div className='w-full flex justify-center items-center py-6'>
                <span className='text-bluerry text-2xl text-center font-kanit'>Secure Decision-Making Service</span>
            </div>

            {/* Description */}
            <section className='flex flex-col items-center px-3 text-center'>
                <div className='w-full md:w-[70%]'>
          <span className='font-kanit text-need text-xl leading-relaxed'>
            In today's digital age, making informed decisions can be a daunting task. With the rise of cyber threats and data breaches, it's essential to ensure that your decision-making process is secure and protected.
          </span>
                </div>
            </section>

            {/* Security Image & Text */}
            <div className='w-full mt-8 flex flex-col md:flex-row justify-center items-center p-4 gap-6'>
                <img src={security} alt='Security Image' className='w-full md:w-1/3 h-auto max-w-full object-cover' />
                <span className='font-kanit text-need text-xl leading-relaxed text-center md:text-left w-full md:w-1/2'>
          At eVote Restart, we understand the importance of security and confidentiality. That's why we offer a service that allows individuals to make decisions in a 100% secure environment.
        </span>
            </div>

            {/* How it Works Section */}
            <section className='w-full flex flex-col items-center py-6'>
                <div className='w-full flex justify-center'>
                    <span className='text-bluerry font-kanit text-3xl text-center'>How It Works</span>
                </div>
                <div className='w-full md:w-[75%] mt-4'>
                    <ul className='space-y-3 text-xl text-need font-kanit'>
                        <li><strong>1. End-to-End Encryption:</strong> Your data is encrypted, ensuring only you can read it.</li>
                        <li><strong>2. Secure Servers:</strong> Our servers are protected with robust physical and digital security measures.</li>
                        <li><strong>3. Two-Factor Authentication:</strong> Only authorized individuals can access your account.</li>
                        <li><strong>4. Regular Security Audits:</strong> We continuously test for vulnerabilities.</li>
                    </ul>
                </div>
            </section>

            {/* Trust Section */}
            <section className='flex flex-col md:flex-row justify-center items-center w-full p-4 gap-6'>
                <div className='w-full md:w-1/2 text-center md:text-left'>
                    <div className='w-full flex justify-center md:justify-start py-4'>
                        <span className='text-bluerry font-kanit text-3xl'>Trust Us with Your Decision-Making Needs</span>
                    </div>
                    <span className='text-xl text-black font-kanit leading-relaxed'>
            At eVote Restart, we're committed to providing a secure and reliable decision-making service. Our team of experts is dedicated to ensuring that your data is protected and your decisions are informed.
          </span>
                </div>
                <div className='w-full md:w-1/3 flex justify-center'>
                    <img src={photo} alt='Decision-Making' className='w-full h-auto max-w-full object-cover' />
                </div>
            </section>
        </section>
    );
}

export default Security;
