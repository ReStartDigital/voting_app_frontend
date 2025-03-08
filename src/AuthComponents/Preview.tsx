import React from 'react';
import Title from '../Reusable/Title';

const Preview = () => {
  return (
    <section className='w-full h-screen flex justify-start items-start flex-col'>
      <Title icon={"M4.998 7.78C6.729 6.345 9.198 5 12 5s5.27 1.345 7.002 2.78a12.7 12.7 0 0 1 2.096 2.183c.253.344.465.682.618.997c.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997a12.7 12.7 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19s-5.27-1.345-7.002-2.78a12.7 12.7 0 0 1-2.096-2.183a6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.7 12.7 0 0 1 4.998 7.78M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"} title={"Preview"}/>
        <span className='font-kanit text-6xl'>Preview</span>
    </section>
  );
}

export default Preview;
