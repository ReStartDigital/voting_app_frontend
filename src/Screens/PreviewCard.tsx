import React, {useEffect} from "react";
import axios from "axios";
import { toast , Toaster } from "react-hot-toast";
import ShowCandidates from "../Reusable/ShowCandidates";

export interface Props {
    state?: string;
    title: string;
    start_date: string;
    end_date: string;
    id: string;
}

const PreviewCard: React.FunctionComponent<Props> = ({ title , state , start_date , end_date , id})=>{
    const [ display , setDisplay ] = React.useState(false);
    const [ loading , setLoading ] = React.useState(false);
    const [ data , setData ] = React.useState<any[]>([]);
    const token = sessionStorage.getItem("token");


    const handleClick = async(event: any)=>{
        console.log(id)
        sessionStorage.setItem("election" , id);

        /*
        * TODO:
        *  Make a GET request to fetch Ongoing election by electionId
        * */
        await fetchData();
        setDisplay(true);
    }


    const handleElection = ()=>{
        console.log(id);
        window.location.href = `/elections/active?id=${id}`;
    }

    useEffect(() => {
        if (display) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        const user_id = sessionStorage.getItem("user_id");
        if (!user_id) {
            window.location.href = "/login/user";
        };

    }, [display]);

    const fetchData = async()=>{
        try{
            const response = await axios.get(`http://localhost:6060/protected/router/get/candidates/${id}` ,
                {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            console.log(response.data)
            setData(response.data)
        }catch(error: any){
            console.log(error)
        }

    }

    const handleClose = (e: any)=>{
        setDisplay(false);
    }



    const user_id = sessionStorage.getItem("user_id");

    return(
        <div className="w-full h-[25%] border-2 border-gray-200 flex-col flex justify-between hover:cursor-pointer items-start p-4" >
            <Toaster position={"top-right"}/>
            <div className='w-full h-full flex justify-between hover:cursor-pointer items-start'>
                <div className='flex justify-start items-start flex-col'>
                    <span className='font-kanit uppercase'>Title</span>
                    <span className='font-kanit'>{title}</span>
                    <span className='font-kanit'>{state}...</span>
                </div>
                <div className='flex justify-start items-start flex-col'>
                    <span className='font-kanit uppercase flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                            <rect width="14" height="0" x="5" y="5" fill="#000">
                                <animate fill="freeze" attributeName="height" begin="0.6s" dur="0.2s" values="0;3" />
                            </rect>
                            <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path strokeDasharray="64" strokeDashoffset="64" d="M12 4h7c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1Z">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
                                </path>
                                <path strokeDasharray="4" strokeDashoffset="4" d="M7 4v-2M17 4v-2">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="4;0" />
                                </path>
                                <path strokeDasharray="12" strokeDashoffset="12" d="M7 11h10">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="12;0" />
                                </path>
                                <path strokeDasharray="8" strokeDashoffset="8" d="M7 15h7">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0" />
                                </path>
                            </g>
                        </svg>
                        Start Time</span>
                    <span className='font-kanit'>{start_date}</span>
                </div>
                <div className='flex justify-start items-start flex-col'>
                    <span className='font-kanit uppercase flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                <rect width="14" height="0" x="5" y="5" fill="#000">
                                    <animate fill="freeze" attributeName="height" begin="0.6s" dur="0.2s" values="0;3" />
                                </rect>
                                <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path strokeDasharray="64" strokeDashoffset="64" d="M12 4h7c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1Z">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
                                    </path>
                                    <path strokeDasharray="4" strokeDashoffset="4" d="M7 4v-2M17 4v-2">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="4;0" />
                                    </path>
                                    <path strokeDasharray="12" strokeDashoffset="12" d="M7 11h10">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="12;0" />
                                    </path>
                                    <path strokeDasharray="8" strokeDashoffset="8" d="M7 15h7">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0" />
                                    </path>
                                </g>
                            </svg>
                        End Time</span>
                    <span className='font-kanit'>{end_date}</span>
                </div>

                {display && (
                    <div className="fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-50"  onClick={(e) => e.stopPropagation()}>
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
                <button className="p-2 bg-black rounded-lg font-kanit text-white" onClick={handleElection}>launch</button>
                <button onClick={handleClick} className="p-2 bg-bluerry rounded-lg font-kanit text-white">View candidates</button>
            </div>
        </div>
    )
}

export default PreviewCard;