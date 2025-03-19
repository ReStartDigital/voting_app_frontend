import React , { useEffect } from 'react';
import axios from "axios";
import Title from "../Reusable/Title";
import Cookie from "js-cookie";


const Overview:React.FunctionComponent = () => {
    const [ election, setElection ] = React.useState("0");
    const [ active , setActive ] = React.useState("0");

  const fetchData = async () => {
    try {
        const user_id = Cookie.get("UUID");
        if (!user_id) {
            return;
        }

        const response = await axios.get(`http://localhost:6060/protected/router/user?id=${user_id}`, {
            withCredentials: true,

        });
        // setStatus(response.data.states === true);
    } catch (e) {
        console.error("Error fetching protected route:", e);
     
    }
};


  const fetchElection = async()=>{
      const user_id = Cookie.get("UUID");
      if (!user_id) {
          return;
      }
      try{
          const response = await axios.get(`http://localhost:6060/protected/router/number/of/elections/${user_id}`, {
              withCredentials: true
          });
          setElection(response.data);
      }catch(e: any){
          // console.log(e)
      }

  }

    const fetchActiveElection = async()=>{
        const user_id = Cookie.get("UUID");
        if (!user_id) {
            return;
        }
        try{
            const response = await axios.get(`http://localhost:6060/protected/router/get/active/elections/${user_id}`, {
                withCredentials: true
            });
            console.log(response.data);
            setActive(response.data);
        }catch(e: any){
            console.log(e)
        }

    }
useEffect(()=>{
  fetchData();
  fetchElection();
  fetchActiveElection();
},[])


  return (
    <section className='w-full h-screen flex flex-col justify-start items-start'>
        <Title title={"overview"} icon={"M8 1.4L6 2.7V1H4v3L0 6.6l.6.8L8 2.6l7.4 4.8l.6-.8z M8 4L2 8v7h5v-3h2v3h5V8z"}/>
        <div className='flex justify-start items-center w-full h-10vh p-3'>
            <div className='flex justify-start items-center w-full h-10vh p-3 bg-lighter border-2 border-blueblue'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                  <path fill="#000" d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7M9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9z" />
                </svg>
              </div>
              <div>
                <span className='font-kanit'>
                  Manage elections effortlessly with real-time insights, secure authentication, and automated result processing.
                </span>
              </div>
            </div>
          </div>
        <div className='w-full h-50vh p-4'>
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-lighter p-8 h-48 rounded-lg shadow-md flex-col flex items-center justify-between">
                    <span className="font-kanit text-black flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 19q-2.925 0-4.962-2.037T1 12t2.038-4.962T8 5h8q2.925 0 4.963 2.038T23 12t-2.037 4.963T16 19zm.25-4h1.5v-2.25H12v-1.5H9.75V9h-1.5v2.25H6v1.5h2.25zm7.25 0H17V9h-3v1.5h1.5z"/>
                        </svg>
                        Total Elections
                    </span>
                    <span className="w-full flex justify-center items-center text-black font-bold font-kanit text-4xl">{election}</span>
                </div>
                <div className="bg-lighter p-8 h-48 rounded-lg shadow-md flex-col flex items-center justify-between">
                    <span className="font-kanit text-black flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                            <path fill="currentColor" d="M24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10S29.523 4 24 4M12.25 28A4.25 4.25 0 0 0 8 32.249V33c0 3.755 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44s8.15-.837 11.08-2.62C38.058 39.567 40 36.755 40 33v-.751A4.25 4.25 0 0 0 35.75 28z"/>
                        </svg>
                        Registered Voters
                    </span>
                    <span className="w-full flex justify-center items-center text-black font-bold font-kanit text-4xl">0</span>
                </div>
                <div className="bg-lighter p-8 h-48 rounded-lg shadow-md flex-col flex items-center justify-between">
                    <span className="font-kanit text-black flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"/>
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 4V2.5M17 4V2.5M2.5 9h19" opacity="0.5"/>
                            <path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/>
                        </g></svg>
                        Current Vote Turnout
                    </span>
                    <span className="w-full flex justify-center items-center text-black font-bold font-kanit text-4xl">0</span>
                </div>
                <div className="bg-lighter p-8 h-48 rounded-lg shadow-md flex-col flex items-center justify-between">
                    <span className="font-kanit text-black flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/>
                        </svg>
                        Ongoing Elections
                    </span>
                    <span className="w-full flex justify-center items-center text-black font-bold font-kanit text-4xl">{active}</span>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Overview;
