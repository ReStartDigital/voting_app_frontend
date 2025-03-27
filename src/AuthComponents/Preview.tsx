import React, { useEffect, useState } from "react";
import Title from "../Reusable/Title";
import axios from "axios";
import { Props } from "../Reusable/FetchAdminElection";
import { Toaster, toast } from "react-hot-toast";
import { format } from "date-fns";
import PreviewCard from "../Screens/PreviewCard";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Terminal } from "lucide-react";
import Cookie from "js-cookie";
import {Skeleton} from "../components/ui/skeleton";

const Preview = () => {
    const [data, setData] = useState<Props[]>([]);
    const [candidate, setCandidate] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const electionId = Cookie.get("UUID");

    const fetchElection = async () => {
        if (!electionId) {
            toast.error("Missing Election ID",{
                style: {
                    backgroundColor: "black",
                    fontFamily: "kanit",
                    color: "red"
                }
            });
            return;
        }

        try {
            const response = await axios.get(
                `http://localhost:6060/protected/router/get/admin/election/${electionId}`,
                { withCredentials: true }
            );
            setData(response.data);
        } catch (error) {
            console.error("Error fetching election:", error);
            toast.error("Failed to fetch election details." , {
                style: {
                    backgroundColor: "black",
                    fontFamily: "kanit",
                    color: "red"
                }
            });
        }
    };

    const fetchCandidates = async () => {
        if (!electionId) return;

        try {
            const response = await axios.get(
                `http://localhost:6060/protected/router/get/candidates/${electionId}`,
                { withCredentials: true }
            );
            setCandidate(response.data);
        } catch (error) {
            console.error("Error fetching candidates:", error);
            toast.error("Failed to fetch candidates.", {
                style: {
                    backgroundColor: "black",
                    fontFamily: "kanit",
                    color: "red"
                }
            });
        }
    };

    useEffect(() => {
        (async () => {
            await Promise.allSettled([fetchElection(), fetchCandidates()]);
            setLoading(false);
        })();
    }, []);

    const formatDate = (isoString: string) => format(new Date(isoString), "MMM dd, yyyy hh:mm a");

    return (
        <section className="w-full h-screen flex flex-col items-start">
            <Toaster position="top-right" />
            <Title
                icon="M4.998 7.78C6.729 6.345 9.198 5 12 5s5.27 1.345 7.002 2.78a12.7 12.7 0 0 1 2.096 2.183c.253.344.465.682.618.997c.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997a12.7 12.7 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19s-5.27-1.345-7.002-2.78a12.7 12.7 0 0 1-2.096-2.183a6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.7 12.7 0 0 1 4.998 7.78M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"
                title="Preview"
            />

            <div className="w-full h-[80vh] flex justify-start items-start flex-col gap-4 p-4">
                {loading ? (
                    <><Skeleton className="w-full h-64 rounded-lg"/><Skeleton className="w-2/3 h-48"/><Skeleton
                        className="w-1/2 h-4"/><Skeleton className="w-full h-20"/></>
                ) : data.length > 0 ? (
                    data.map((item, index) => (
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
                        <AlertTitle className="font-kanit">Election</AlertTitle>
                        <AlertDescription className="font-kanit">
                            No Candidates Available
                        </AlertDescription>
                    </Alert>
                )}
            </div>
        </section>
    );
};

export default Preview;
