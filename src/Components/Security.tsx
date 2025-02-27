import React from 'react';
const photo = require('../assets/images/Frame65.png');
const Phoneimg = require('../assets/images/Frame63.png');
const security = require('../assets/images/Frame64.png');



const Security = () => {

  return (
    <section className='w-full h-full'>
        <section className='w-full h-full flex flex-col justify-center items-center gap-5'>
            <div className='w-full h-15vh flex flex-col justify-center items-center'>
                <span className='text-4xl font-bold text-bluerry font-font-kanit'>Security system</span>
            </div>
           
           <div className="w-full">
               <img src={Phoneimg} alt="Security" className='object-cover w-full h-[80%]'/>
           </div>
       </section>
       <div className='w-full h-15vh flex justify-center items-center'>
            <span className='text-bluerry text-2xl text-center font-kanit'>Secure Decisions-Making Service</span>
       </div>
       <section className='flex flex-col justify-center items-center px-3'>
           <div className='w-[70%] flex justify-center items-center'>
              <span className='font-kanit text-need text-center text-2xl'>In today's digital age, making informed decisions can be a daunting task. 
              With the rise of cyber threats and data breaches, 
              it's essential to ensure that your decision-making process is secure and protected.</span>
           </div>           
       </section>
        <div className='w-full mt-8 flex justify-center items-center'>
               <div className="w-[80%] flex justify-center items-center p-4 gap-4">
                <img src={security} alt="secuirty-image" className='object-cover object-center h-96'/>
                <span className='font-kanit text-need text-center text-2xl'>At eVote Restart, we understand the importance of security and confidentiality. That's why we offer a service that allows individuals to make decisions in a 100% secure environment.</span>
               </div> 
        </div>
       <section className='w-full h-full flex flex-col justify-center items-center'>
        <div className='w-full h-15vh flex justify-center items-center'>
            <span className='text-bluerry mt-4 font-kanit text-4xl text-center'>How it works</span>
        </div>
        <div className='w-[75%]'>     
           <div className='w-full'>
               <p className="font-kanit text-xl text-need">Our secure decision-making service utilizes state-of-the-art encryption technology to protect your data. Here's how it works:</p>
               <p className='mt-4 text-xl text-need font-kanit'>1. End-to-End Encryption: Our platform uses end-to-end encryption, ensuring that your data is scrambled and unreadable to anyone except you.</p>
               <p className="font-kanit text-xl text-need">2. Secure Servers: Our servers are housed in secure facilities with robust physical and digital security measures.</p>
               <p className="font-kanit text-xl text-need">3. Two-Factor Authentication: We require two-factor authentication to ensure that only authorized individuals can access your account.</p>
               <p className="font-kanit text-xl text-need">4. Regular Security Audits: Our system undergoes regular security audits to identify and address potential vulnerabilities.</p>
           </div>
        </div>
       </section>
      
       <section className='flex justify-center items-center '>
        <div className='flex justify-center items-center w-[80%] p-4 gap-5'>
            <div className="w-full h-full">
                 <div className='w-full h-15vh flex justify-center items-center'>
                    <span className='text-bluerry font-kanit text-3xl'>Trust Us with Your Decision-Making Needs</span>
                </div>
               <span className='text-xl text-black font-kanit'>At eVote Restart, we're committed to providing a secure and reliable decision-making service. 
                Our team of experts is dedicated to ensuring that your data is protected and your decisions are informed.</span>
           </div>
           <div className="w-full h-full flex justify-center items-center">
               <img src={photo} alt="image2" className='w-[507] h-96 object-cover' />
           </div>
        </div>
          
       </section>
    </section>
);

}

export default Security;
