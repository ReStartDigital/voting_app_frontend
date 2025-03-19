import React, {useEffect} from "react";
import CandidateForm from "./CandidateForm";
import axios from "axios";
import { toast , Toaster } from "react-hot-toast";
import {Trash} from "lucide-react";
import {Alert} from "flowbite-react";

export interface Props {
    state?: string;
    title: string;
    start_date: string;
    end_date: string;
    id: string;
}

const FetchAdminElection: React.FunctionComponent<Props> = ({ title , state , start_date , end_date , id})=>{
    const [ display , setDisplay ] = React.useState(false);
    const [ loading , setLoading ] = React.useState(false);
    const [ deleted , setDeleted ] = React.useState(false);
    const token = sessionStorage.getItem("token");

    const handleClick = (event: any)=>{
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
            const response = await axios.post(`http://localhost:6060/protected/router/save/candidate/detail/${user_id}/${id}` , formData , {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            toast.success("Updated successfully", {
                style:{
                    fontFamily: "kanit",
                    backgroundColor: "black",
                    color: "white"
                }
            });
            setDisplay(false);
        }catch(error: any){
            // console.log(error)
        }
    }

    const handleDelete = async()=>{
        console.log(id);
        try{
            const response = await axios.delete(`http://localhost:6060/protected/router/get/election/delete/${id}` ,
                {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            setTimeout(()=>{
                setDeleted(true);
            },3000)
        }catch(e:any){
            console.log(e);
        }
    }

    const handleUpdated = ()=>{
        setLoading(false);
    }

    const user_id = sessionStorage.getItem("user_id");

    return(
        <div className="w-full h-[35%] border-2 border-gray-200 flex justify-between hover:cursor-pointer items-start p-4 flex-col" >
            <Toaster position={"top-right"}/>
            <div className="w-full h-full flex justify-between hover:cursor-pointer items-start">
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
                {
                    deleted &&
                    <Alert color="success">
                        <span className="font-kanit">Info alert!. Deleted Successfully.</span>
                    </Alert>
                }
            </div>
            <div className="w-full flex justify-between items-start">
                <button className='text-white capitalize rounded-md bg-bluerry font-kanit p-2' onClick={handleClick}>
                    add candidate
                </button>
               <Trash className="text-red-500" onClick={handleDelete}/>
            </div>
        </div>
    )
}

export default FetchAdminElection;