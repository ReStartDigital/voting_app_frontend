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
        <span className='text-6xl font-kanit'>Overview</span>
    </section>
  );
}

export default Overview;
