import React, { useEffect, useState } from 'react';
import Title from '../Reusable/Title';
import axios from "axios";
import FetchAdminElection, {Props} from "../Reusable/FetchAdminElection";
import {format} from "date-fns";
import PreviewCard from "../Screens/PreviewCard";
import {Alert, AlertDescription, AlertTitle} from "../components/ui/alert";
import {Terminal} from "lucide-react";


const Preview = () => {
    const [data, setData] = useState<Props[]>([]);
    const [ candidate , setCandidate ] = useState<any[]>([]);
    const electionId = sessionStorage.getItem('user_id');
    const id = sessionStorage.getItem('user_id');
    const token = sessionStorage.getItem('token');

    const FetchElection = async () => {
        try {
            const response = await axios.get(
                `http://localhost:6060/protected/router/get/admin/election/${id}`,
                {
                    withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            console.log(response.data);
            setData(response.data)
        } catch (error: any) {
            console.log(error);
        } finally {

        }
    };


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
            setCandidate(response.data);
        } catch (error: any) {
            console.error("Error fetching data:", error);
        }
    }

    const formatDate = (isoString: string) => {
        return format(new Date(isoString), "MMM dd, yyyy hh:mm a");
    };


    useEffect(() => {
        if (!id || !token) {
            console.warn("Missing userId or token");
            return;
        }

        (async () => {
            await Promise.all([FetchElection(), fetchData()]); // ✅ Fetch both concurrently
        })();
    }, []); // ✅ Prevents infinite loops
// ✅ Fix: Empty dependency array to prevent infinite re-renders

    return (
        <section className="w-full h-screen flex flex-col items-start">
            <Title
                icon="M4.998 7.78C6.729 6.345 9.198 5 12 5s5.27 1.345 7.002 2.78a12.7 12.7 0 0 1 2.096 2.183c.253.344.465.682.618.997c.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997a12.7 12.7 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19s-5.27-1.345-7.002-2.78a12.7 12.7 0 0 1-2.096-2.183a6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.7 12.7 0 0 1 4.998 7.78M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"
                title="Preview"
            />
            <div className="w-full h-[80vh] flex justify-start items-start flex-col gap-4 p-4">
                {data.length > 0 ? (
                    data.map((item: any, index: number) => (

                            <PreviewCard
                                key={index}
                                title={item.title}
                                start_date={formatDate(item.start_date)}
                                end_date={formatDate(item.end_date)}
                                id={item.id}
                                state={item.state}
                            />

                    ))
                ) : (
                    <Alert>
                        <Terminal className="h-4 w-4" />
                        <AlertTitle className="font-kanit"
                        >Election</AlertTitle>
                        <AlertDescription className="font-kanit"
                        >
                            No Candidates Available
                        </AlertDescription>
                    </Alert>
                )}
            </div>
        </section>
    );
}

export default Preview;
