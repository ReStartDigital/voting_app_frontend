import React, { useEffect, useState } from "react";
import Title from "../Reusable/Title";
import UseStore from "../store/UseStore";
import ElectionForm from "../Screens/ElectionForm";
import axios from "axios";
import { format, parseISO } from "date-fns";
import FetchAdminElection, { Props } from "../Reusable/FetchAdminElection";
import {Alert, AlertDescription, AlertTitle} from "../components/ui/alert";
import {Terminal} from "lucide-react";
import {Skeleton} from "../components/ui/skeleton";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "../components/ui/hover-card";
import Cookie from "js-cookie";



const Launch = () => {
    const { initial, toggleState } = UseStore();
    const [data, setData] = useState<Props[]>([]);
    const [searchTerm, setSearchTerm] = useState(""); // 🔍 Search state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const id = Cookie.get("UUID")


    useEffect(() => {
        if (id ) {
            FetchElection();
        } else {
            setLoading(false);
            setError("User not authenticated");
        }
    }, []);


    const handleElectionScreen = () => {
        toggleState();
    };


    const formatDate = (isoString: string) => {
        if (!isoString) return "No Date Provided"; // ✅ Handle missing dates
        return format(parseISO(isoString), "MMM dd, yyyy hh:mm a"); // ✅ Format to readable format
    };

    const FetchElection = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await axios.get(
                `http://localhost:6060/protected/router/get/admin/election/${id}`,
                {
                    withCredentials: true,

                }
            );
            setData(response.data);
        } catch (error: any) {
            setError("Failed to fetch elections");
        } finally {
            setLoading(false);
        }
    };

    // 🔍 Filter elections based on search term
    const filteredElections = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="w-full h-80vh flex flex-col items-start">
            <div className="w-full relative">{initial && <ElectionForm />}</div>

            <Title
                icon="M5.752 12A13 13 0 0 0 8 14.248v4.002c0 .414.336.75.75.75a5 5 0 0 0 4.797-6.414a12.98 12.98 0 0 0 5.45-10.848a.75.75 0 0 0-.735-.735L18 1C13.634 1 9.77 3.153 7.414 6.453A5 5 0 0 0 1 11.25c0 .414.336.75.75.75zM13 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
                title="Launch"
            />

            <div className="flex justify-between items-center w-full p-3">
                {/* 🔍 Search Input */}
                <input
                    type="text"
                    placeholder="Search by title..."
                    className="w-1/3 p-2 border border-gray-300 focus:border-black rounded-md font-kanit"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <HoverCard>
                    <HoverCardTrigger>
                        <button
                            className="font-kanit text-white bg-bluerry p-4 flex justify-center items-center rounded-md"
                            onClick={handleElectionScreen}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 56 56">
                                <path
                                    fill="#fff"
                                    d="M46.586 9.45c-2.39-2.391-5.766-2.766-9.75-2.766H19.117c-3.937 0-7.312.375-9.703 2.765s-2.742 5.742-2.742 9.657v17.718c0 4.008.352 7.336 2.742 9.727s5.766 2.765 9.774 2.765h17.648c3.984 0 7.36-.375 9.75-2.765s2.742-5.719 2.742-9.727V19.176c0-4.008-.351-7.36-2.742-9.727M28 41.745a1.855 1.855 0 0 1-1.852-1.851V29.84h-10.03c-1.032 0-1.852-.844-1.852-1.828s.82-1.875 1.851-1.875h10.031V16.105c0-1.054.82-1.875 1.852-1.875c1.055 0 1.852.82 1.852 1.875v10.032h10.054c1.032 0 1.852.89 1.852 1.875c0 .984-.82 1.828-1.852 1.828H29.852v10.055A1.84 1.84 0 0 1 28 41.746"
                                />
                            </svg>
                            New Election
                        </button>
                    </HoverCardTrigger>
                    <HoverCardContent
                    className="font-kanit z-40"
                    >
                        Setup an election now
                    </HoverCardContent>
                </HoverCard>
                {/* ➕ Add New Election Button */}

            </div>

            <div className="w-full h-full flex flex-col gap-4 p-3 mb-4">
                {loading ? (
                    <Skeleton className="w-[100px] h-[20px] rounded-full" />
                ) : error ? (
                    <p className="text-center text-red-500 mt-5 font-kanit">{error}</p>
                ) : filteredElections.length > 0 ? (
                    filteredElections.map((item: Props, index: number) => (

                        <FetchAdminElection
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
                            No elections found
                        </AlertDescription>
                    </Alert>
                )}
            </div>
        </section>
    );
};

export default Launch;
