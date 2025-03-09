import React from 'react';
const pic1 = require("../assets/images/Frame29.png");
const pic2 = require("../assets/images/Frame30.png");
const pic3 = require("../assets/images/Frame31.png");

interface Props {
    title: string;
    icon: string;
}

const Title:React.FunctionComponent<Props> = ({ title , icon }) => {
  return (
    <section className='w-full 2xl:h-10vh xl:h-10vh lg:h-10vh md:h-20vh sm:h-20vh xs:h-20vh xx:h-20vh shadow-lg shadow-gray-100'>
            <div className='w-full p-4 flex 2xl:flex-row h-full  xl:flex-row lg:flex-row md:flex-col 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-8 sm:space-y-8 xs:space-y-8 xx:space-y-8 sm:flex-col xs:flex-col xx:flex-col justify-between items-center'>
                <div className='2xl:w-[16%] xl:w-[20%] lg:w-[50%] md:w-full sm:w-full xs:w-full xx:w-full gap-4 p-1 align-middle font-kanit text-white rounded-xl flex justify-center items-center'>
                    <svg className="text-black w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d={icon} />
                    </svg> 
                    <span className='text-black font-kanit text-2xl capitalize'>{title}</span>
            </div>
            <div className='flex 2xl:w-[22%] xl:w-[20%] lg:w-[20%] md:w-full sm:w-full xs:w-full xx:w-full justify-start items-center outline-dotted p-2 outline-need'>
                <img src={pic1} alt='picture_1'/>
                <img src={pic2} alt='picture_2'/>
                <img src={pic3} alt='picture_3'/>
                <span className='font-kanit text-need ml-2'>Need help?</span>
            </div>
        </div>
    </section>
  )
}

export default Title;
