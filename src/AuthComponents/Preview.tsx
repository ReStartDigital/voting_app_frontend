import React, { useEffect, useState } from 'react';
import Title from '../Reusable/Title';
import axios from "axios";
import Profile from "../Components/Profile";

const Preview = () => {
    const [data, setData] = useState<any[]>([]);
    const electionId = sessionStorage.getItem('user_id');
    const token = sessionStorage.getItem('token');

    async function fetchData() {
        if (!electionId || !token) {
            console.warn("Missing electionId or token");
            return;
        }

        try {
            const response = await axios.get(
                `http://localhost:6060/protected/router/get/candidates/${electionId}`,
                {
                    withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            console.log(response.data);
            setData(response.data);
        } catch (error: any) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        (async () => {
            await fetchData();
        })();
    }, []);  // ✅ Fix: Empty dependency array to prevent infinite re-renders

    return (
        <section className="w-full h-screen flex flex-col items-start">
            <Title
                icon="M4.998 7.78C6.729 6.345 9.198 5 12 5s5.27 1.345 7.002 2.78a12.7 12.7 0 0 1 2.096 2.183c.253.344.465.682.618.997c.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997a12.7 12.7 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19s-5.27-1.345-7.002-2.78a12.7 12.7 0 0 1-2.096-2.183a6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.7 12.7 0 0 1 4.998 7.78M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"
                title="Preview"
            />
            <div className="w-full h-[80vh] grid grid-cols-4 gap-4 p-4">
                {data.length > 0 ? (
                    data.map((item: any, index: number) => (
                        <div key={index} className="bg-gray-100 h-[50%] rounded-lg shadow-md">
                           <Profile image={item.image} name={item.name} manifesto={item.manifesto} title={item.electionId.title} position={item.position}/>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 font-kanit">No candidates available.</p>
                )}
            </div>
        </section>
    );
}

export default Preview;
