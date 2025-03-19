import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import ShowCandidates from "../Reusable/ShowCandidates";


export interface Props {
    state?: string;
    title: string;
    start_date: string;
    end_date: string;
    id: string;
}

const PreviewCard: React.FunctionComponent<Props> = ({ title, state, start_date, end_date, id }) => {
    const [display, setDisplay] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any[]>([]);

    // Fetch Candidates and their votes
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:6060/protected/router/get/candidates/${id}`, {
                withCredentials: true,
            });

            // Fetch votes for each candidate
            const candidatesWithVotes = await Promise.all(response.data.map(async (candidate: any) => {
                try {
                    const votesResponse = await axios.get(`http://localhost:6060/protected/router/get/candidate/votes/${candidate.id}`, {
                        withCredentials: true
                    });
                    console.log(votesResponse.data);
                    return { ...candidate, votes: votesResponse.data };
                } catch (error) {
                    console.error(`Failed to fetch votes for ${candidate.name}`, error);
                    return { ...candidate, votes: 0 }; // Default to 0 if there's an error
                }
            }));

            setData(candidatesWithVotes);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch candidates");
        } finally {
            setLoading(false);
        }
    };

    // Handle Modal Toggle
    const handleClick = async () => {
        await fetchData();
        setDisplay(true);
    };

    // Navigate to election page
    const handleElection = () => {
        window.location.href = `/elections/active?id=${id}`;
    };

    useEffect(() => {
        document.body.style.overflow = display ? "hidden" : "auto";
    }, [display]);

    return (
        <div className="w-full h-[25%] border-2 border-gray-200 flex-col flex justify-between hover:cursor-pointer items-start p-4">
            <Toaster position={"top-right"} />
            <div className="w-full h-full flex justify-between hover:cursor-pointer items-start">
                <div className="flex justify-start items-start flex-col">
                    <span className="font-kanit uppercase">Title</span>
                    <span className="font-kanit">{title}</span>
                    <span className="font-kanit">{state}...</span>
                </div>
                <div className="flex justify-start items-start flex-col">
                    <span className="font-kanit uppercase">Start Time</span>
                    <span className="font-kanit">{start_date}</span>
                </div>
                <div className="flex justify-start items-start flex-col">
                    <span className="font-kanit uppercase">End Time</span>
                    <span className="font-kanit">{end_date}</span>
                </div>

                {display && (
                    <div className="fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-50" onClick={(e) => e.stopPropagation()}>
                        <div className="bg-white w-full h-full p-8 overflow-auto">
                            <button
                                className="absolute top-4 font-kanit right-4 bg-black text-white px-4 py-2 rounded"
                                onClick={() => setDisplay(false)}
                            >
                                Close
                            </button>

                            {display && (
                                <ShowCandidates candidates={data} onClose={() => setDisplay(false)} />
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className="w-full flex justify-between items-center space-x-5">
                <button className="p-2 bg-black rounded-lg font-kanit text-white" onClick={handleElection}>Launch</button>
                <button onClick={handleClick} className="p-2 bg-bluerry rounded-lg font-kanit text-white">
                    {loading ? "Loading..." : "View Candidates"}
                </button>
            </div>
        </div>
    );
};

export default PreviewCard;
