import React from 'react';
import UseStore from "../store/UseStore";
import {Spinner} from "flowbite-react";
import { Toaster , toast } from "react-hot-toast";

const ElectionSetup = () => {
    const [ loading , setLoading ] = React.useState(false);
  const { toggleState } = UseStore();

  const handleElectionScreen = ()=>{
    toggleState();
  }

  const handleSaved = ()=>{
      setLoading(true)
      toast.success("Updated Successfully",{
          style:{
              backgroundColor: "black",
              color:"white",
              fontFamily: "kanit",
          }

  });

      setTimeout(()=>{
            setLoading(false);
      },3000)
  }

  return (
    <section className="fixed h-screen inset-0 z-50 w-full bg-white flex p-4 gap-4 justify-start items-center flex-col">
        <Toaster position="top-right" />
        <div className="w-[80%] flex p-4 gap-4 z-60 bg-white/100 justify-start items-center flex-col flex h-full">
          <div className="w-full flex justify-end items-center p-4 h-[10%]">
            <svg onClick={handleElectionScreen} className="hover:cursor-pointer bg-bluerry text-white rounded-md shadow-lg shadow-gray-200 w-[3%] h-full" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
              <path fill="#fff" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
            </svg>
          </div>
          <div className="w-full h-[15%] flex justify-center items-center">
            <span className="font-kanit text-black text-center text-5xl capitalize">Setup an election system</span>
          </div>
            <div className="w-full h-80vh bg-gray-200">

            </div>
            <div className="w-full flex gap-5 justify-center items-center">
                <button onClick={handleElectionScreen} className="bg-red-500 font-kanit p-3 text-white rounded-lg hover:shadow-md hover:shadow-gray-200">
                    Discard
                </button>
                <button onClick={handleSaved} className="bg-bluerry font-kanit p-3 capitalize text-white rounded-lg hover:shadow-md hover:shadow-gray-200">
                    {
                        loading ? <Spinner/> : "Save election"
                    }

                </button>
            </div>
        </div>
    </section>
  );
}

export default ElectionSetup;