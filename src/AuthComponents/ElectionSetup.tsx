import React from 'react';
import UseStore from "../store/UseStore";

const ElectionSetup = () => {
  const { toggleState } = UseStore();

  const handleElectionScreen = ()=>{
    toggleState();
  }

  return (
    <section className="fixed h-screen inset-0 z-50 bg-white w-full flex p-4 justify-start items-center flex-col">
      <div className="w-full flex justify-end items-center p-4 h-[10%]">
        <svg onClick={handleElectionScreen} className="hover:cursor-pointer bg-bluerry text-white rounded-md shadow-lg shadow-gray-200 w-[5%] h-full" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
          <path fill="#fff" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
        </svg>
      </div>
      <div className="w-full h-[15%] flex justify-center items-center">
        <span className="font-kanit text-black text-center text-5xl">Upload user details for your election</span>
      </div>
    </section>
  );
}

export default ElectionSetup;