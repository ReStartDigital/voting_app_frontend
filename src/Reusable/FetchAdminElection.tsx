import React, {useEffect} from "react";
import CandidateForm from "./CandidateForm";
import axios from "axios";
import { toast , Toaster } from "react-hot-toast";

export interface Props {
    title: string;
    startTime: string;
    endTime: string;
    id: string;
}

const FetchAdminElection: React.FunctionComponent<Props> = ({ title , startTime , endTime , id})=>{
    const [ display , setDisplay ] = React.useState(false);
    const [ loading , setLoading ] = React.useState(false);
    const token = sessionStorage.getItem("token");
    const handleClick = (event: any)=>{
        console.log(id)
        setDisplay(true);
    }

   const handleCancel = (e: any)=>{
        setDisplay(false);
    }
    useEffect(() => {
        const user_id = sessionStorage.getItem("user_id");
        if (!user_id) {
            window.location.href = "/login/user";
        }
    }, []);


    const handleSubmit = async(formData: FormData)=>{
        console.log(formData);
        try{
            console.log(user_id);
            console.log(id);
            const response = await axios.post(`http://localhost:6060/protected/router/save/candidate/detail/${user_id}/${id}` , formData , {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            })
            console.log(response.data)

            toast.success("Updated successfully", {
                style:{
                    fontFamily: "kanit",
                    backgroundColor: "black",
                    color: "white"
                }
            });
        }catch(error: any){
            console.log(error)
        }
    }

    const handleUpdated = ()=>{
        setLoading(false);
    }

    const user_id = sessionStorage.getItem("user_id");

    return(
        <div className="w-full h-[25%] border-2 border-gray-200 flex justify-between hover:cursor-pointer items-start p-4" onClick={handleClick}>
            <Toaster position={"top-right"}/>
            <div className='flex justify-start items-start flex-col'>
                <span className='font-kanit uppercase'>Title</span>
                <span className='font-kanit'>{title}</span>
                <span className='font-kanit'>Waiting...</span>
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
                <span className='font-kanit'>{startTime}</span>
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
                <span className='font-kanit'>{endTime}</span>
            </div>

            {   display &&
                <div className="fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-full h-full p-8 overflow-auto">
                        <button
                            className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full"
                            onClick={() => setDisplay(false)}
                        >
                            ✖
                        </button>
                        <CandidateForm users={[{ id: user_id, name: "User" }]} elections={[{ id, title }]}
                                       onSubmit={handleSubmit}  Cancel={handleCancel} state={handleUpdated}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default FetchAdminElection;