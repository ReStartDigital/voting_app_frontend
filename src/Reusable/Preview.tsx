import React from "react";

const Preview:React.FunctionComponent = ()=>{
    return (
        <section className="fixed w-[70%] top-0 inset-0 h-[100%] z-30 flex justify-center items-center">
                <ul className='w-full h-full bg-white flex justify-start items-start 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-1 xs:p-0 flex-col'>
                    <li><a href="/" className='p-4 font-kanit active:text-orange-400 text-black active:underline flex '>Home</a></li>
                    <li><a href="/election" className='p-4 font-kanit text-black flex'>Election</a></li>
                    <li><a href="/about/team" className='p-4 font-kanit text-black flex'>About Us</a></li>
                    <li><a href="/security" className='p-4 font-kanit text-black flex'>Security</a></li>
                    <li><a href="/login/user" className='p-4 font-kanit text-black flex'>Log in</a></li>
                    <li><a href="/register/user" className='p-4 font-kanit text-black flex'>Sign up</a></li>

                </ul>
        </section>
    )
}


export default Preview;