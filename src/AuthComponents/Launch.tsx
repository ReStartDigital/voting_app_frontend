import React from 'react';
import Title from '../Reusable/Title';

const Launch = () => {
  return (
    <section className='w-full h-80vh flex justify-start flex-col items-start'>
      <Title icon={"M5.752 12A13 13 0 0 0 8 14.248v4.002c0 .414.336.75.75.75a5 5 0 0 0 4.797-6.414a12.98 12.98 0 0 0 5.45-10.848a.75.75 0 0 0-.735-.735L18 1C13.634 1 9.77 3.153 7.414 6.453A5 5 0 0 0 1 11.25c0 .414.336.75.75.75zM13 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4"} title={"Launch"}/>
      <div className='flex justify-end items-center w-full h-10vh p-3'>
          <button className='font-kanit text-white bg-bluerry p-4 flex justify-center items-center rounded-md'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 56 56">
              <path fill="#fff" d="M46.586 9.45c-2.39-2.391-5.766-2.766-9.75-2.766H19.117c-3.937 0-7.312.375-9.703 2.765s-2.742 5.742-2.742 9.657v17.718c0 4.008.352 7.336 2.742 9.727s5.766 2.765 9.774 2.765h17.648c3.984 0 7.36-.375 9.75-2.765s2.742-5.719 2.742-9.727V19.176c0-4.008-.351-7.36-2.742-9.727M28 41.745a1.855 1.855 0 0 1-1.852-1.851V29.84h-10.03c-1.032 0-1.852-.844-1.852-1.828s.82-1.875 1.851-1.875h10.031V16.105c0-1.054.82-1.875 1.852-1.875c1.055 0 1.852.82 1.852 1.875v10.032h10.054c1.032 0 1.852.89 1.852 1.875c0 .984-.82 1.828-1.852 1.828H29.852v10.055A1.84 1.84 0 0 1 28 41.746" />
            </svg>
           New Election
          </button>
      </div>
      <div className='flex justify-start items-center w-full h-10vh p-3'>
        <div className='flex justify-start items-center w-full h-10vh p-3 bg-lighter border-2 border-blueblue'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
              <path fill="#000" d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7M9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9z" />
            </svg>
          </div>
          <div>
            <span className='font-kanit'>
              You are currently signed up for the demo plan. 
              This plan gives you full functionality but restricts the number of votes in your elections to 20
            </span>
          </div>
        </div>
          
      </div>
    </section>
  );
}

export default Launch;
