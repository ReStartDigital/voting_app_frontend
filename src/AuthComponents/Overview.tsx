import React , { useEffect } from 'react';
import axios from "axios";
import Title from "../Reusable/Title";


const Overview:React.FunctionComponent = () => {

  const fetchData = async () => {
    try {
        const user_id = sessionStorage.getItem("user_id");
        const token = sessionStorage.getItem("token");
        if (!user_id && !token) {
            return;
        }

        const response = await axios.get(`http://localhost:6060/protected/router/user?id=${user_id}`, {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`
            }
        });
        if(response.data){
            console.log(response?.data)
        };
        console.log(response.data);
        // setStatus(response.data.states === true);
    } catch (e) {
        console.error("Error fetching protected route:", e);
     
    }
};

useEffect(()=>{
  fetchData();
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
    </section>
  );
}

export default Overview;
