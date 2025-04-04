/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React , { useState , useEffect } from 'react';
import Title from "../Reusable/Title";
import imageCompression from 'browser-image-compression';
import axios from "axios";
import Cookie from "js-cookie";
import { Spinner } from 'flowbite-react';
import { Toaster , toast } from "react-hot-toast";
const background = require("../assets/images/background-images.jpg");


interface Form {
  firstName:string;
  lastName:string;
  email:string;
  organization:string;
  image?: File | null;
}

const Settings: React.FunctionComponent = () => {
  const [image, setImage] = React.useState<any>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<Form>({
    firstName: '',
    lastName:'',
    email: '',
    organization: '',
    image: null
  });

  const fetchData = async () => {
    try {
        const user_id = Cookie.get("UUID");
        if (!user_id) {
            return;
        }
        const response = await axios.get(`http://localhost:6060/protected/router/user?id=${user_id}`, {
            withCredentials: true,
        });
        if(response.data){
            setFormData(prev => ({ ...prev, ...response.data }));

        }
    } catch (e) {
        console.error("Error fetching protected route:", e);
    }
};

const fetchUserImage = async () => {
  try {
      const user_id = Cookie.get("UUID");
      if (!user_id ) {
          return;
      }

      const response = await axios.get(`http://localhost:6060/protected/router/images/${user_id}`, {
          withCredentials: true,
      });
      if(response.data){
          setFormData(prev => ({ ...prev, image:response.data.image , organization: response.data.organization }));

      };

      // setStatus(response.data.states === true);
  } catch (e: any) {
    setFormData(prev => ({ ...prev, image:e.response.data.image , organization: e.response.data.organization }));
  }
};

useEffect(()=>{
  fetchData();
  fetchUserImage();
},[])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      const options = { maxSizeMB: 0.5, maxWidthOrHeight: 800, useWebWorker: true };
      try {
        const compressedFile = await imageCompression(file, options);

        const blob = new Blob([compressedFile], { type: compressedFile.type });
        setFormData((prev) => ({ ...prev, image: compressedFile }));
        const reader = new FileReader();
        reader.onloadend = () => setImage(reader.result as string);
        reader.readAsDataURL(compressedFile);
       
      } catch (error) {
        //console.error("Image compression error:", error);
      }
    }
  };

  const handleDelete = async()=>{
    const user_id = Cookie.get("UUID")

    if (!user_id) {
        return;
    }

    const response = await axios.delete(`http://localhost:6060/protected/router/delete/account/${user_id}`, {
        withCredentials: true,
    });
    if(response.data){
        setFormData(prev => ({ ...prev, image:response.data.image , organization: response.data.organization }));

    };
  }
  
  const handleSubmit = async(e: React.FormEvent)=>{
    const id = Cookie.get("UUID");
    e.preventDefault();
    if (!formData.image) {
      alert("Please select a file before submitting.");
      return;
    }

    // Create form data object
    const formDataObj = new FormData();

    formDataObj.append("organization", formData.organization);

    if (formData.image) {
      formDataObj.append("image", formData.image)// Ensure file is a Blob/File

    }
 
    try {
      setLoading(true);
      const response = await axios.put(`http://localhost:6060/protected/router/upload/profile?id=${id}`, formDataObj, { withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          },
      });
      toast.success("Update Successful: " + response.data , {
          style: {
              backgroundColor: "black",
              fontFamily: "kanit",
              color: "white"
          }
      })
      setLoading(false);
    } catch (error: any) {
        toast.error("Update Error:: " + error?.response?.data , {
            style: {
                backgroundColor: "black",
                fontFamily: "kanit",
                color: "white"
            }
        })
      setLoading(false);
    }
  };


  return (
    <section className='w-full h-95vh flex justify-start items-start flex-col'>
        <Toaster position={"top-right"}/>
      <Title icon={"M10.825 22q-.675 0-1.162-.45t-.588-1.1L8.85 18.8q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.225-1.65q.1-.65.588-1.1T10.825 2h2.35q.675 0 1.163.45t.587 1.1l.225 1.65q.325.125.613.3t.562.375l1.55-.65q.625-.275 1.25-.05t.975.8l1.175 2.05q.35.575.2 1.225t-.675 1.075l-1.325 1q.025.175.025.338v.674q0 .163-.05.338l1.325 1q.525.425.675 1.075t-.2 1.225l-1.2 2.05q-.35.575-.975.8t-1.25-.05l-1.5-.65q-.275.2-.575.375t-.6.3l-.225 1.65q-.1.65-.587 1.1t-1.163.45zm1.225-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"} title={"Settings"}/>
      <div className="w-full h-full bg-white flex justify-center items-center relative">
          <div className='absolute inset-0 w-full h-full'>
              <img src={background} alt="" className="w-full h-full object-cover relative"/>
          </div>
          <div className="2xl:w-[60%] xl:w-[60%] lg:w-[70%] md:w-full sm:w-full xs:w-full xx:w-full absolute z-40 h-full bg-white flex-col flex justify-start items-start">
              <div className="w-full h-48 flex justify-center items-center">
                  <div className='rounded-full 2xl:w-[20%] xl:w-[20%] lg:w-[40%] md:w-[70%] sm:w-[40%] xx:w-[35%] xs:w-[38%] h-[90%] bg-gray-300 flex justify-center items-center relative'>
                  {formData.image ? (
                        <img src={`data:image/jpeg;base64,${formData.image}`} alt="Preview" className="w-full h-full object-cover rounded-full" />
                      ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="96px" height="96px" viewBox="0 0 24 24">
                        <path fill="#000" d="M17.755 14a2.25 2.25 0 0 1 2.248 2.25v.918a2.75 2.75 0 0 1-.512 1.598c-1.546 2.164-4.07 3.235-7.49 3.235c-3.422 0-5.945-1.072-7.487-3.236a2.75 2.75 0 0 1-.51-1.596v-.92A2.25 2.25 0 0 1 6.253 14zM12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10" />
                      </svg>
                      )}
                    
                    <div className='flex justify-end items-start w-full absolute bottom-4 right-0'>
                      <form>
                        <label htmlFor="file" className='hover:cursor-pointer'>
                          <svg className='bg-gray-300 shadow-lg shadow-gray-500 rounded-full p-1' xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
                            <path fill="#000" d="M9.75 13a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" />
                            <path fill="#000" fillRule="evenodd" d="M7.474 7.642A3.14 3.14 0 0 1 10.616 4.5h2.768a3.14 3.14 0 0 1 3.142 3.142a.03.03 0 0 0 .026.029l2.23.18c.999.082 1.82.82 2.007 1.805a22.1 22.1 0 0 1 .104 7.613l-.097.604a2.505 2.505 0 0 1-2.27 2.099l-1.943.157a56.6 56.6 0 0 1-9.166 0l-1.943-.157a2.505 2.505 0 0 1-2.27-2.1l-.097-.603c-.407-2.525-.371-5.1.104-7.613a2.226 2.226 0 0 1 2.007-1.804l2.23-.181a.03.03 0 0 0 .026-.029M12 9.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" clipRule="evenodd" />
                          </svg>
                        </label>
                        <input accept="image/*" required type="file" onChange={handleImageChange} className="hidden hover:cursor-pointer" id="file"/>
                      </form>
                    </div>
                  </div>
              </div>
              <div className='w-full h-full flex justify-center items-center'>
                  <form className='w-[90%] h-full bg-white flex gap-4 space-y-5 justify-start items-start flex-col p-4'>
                    <div className="w-full h-[15%]">
                      <label className='font-kanit capitalize'>First Name</label>
                      <input type="text" value={formData.firstName} name='firstName' onChange={handleInputChange} required className="w-full h-full focus:ring-0 border-none bg-gray-100 font-kanit focus:outline-bluerry rounded-xl"/>
                    </div>
                    <div className="w-full h-[15%]">
                      <label className='font-kanit capitalize'>Last Name</label>
                      <input type="text" value={formData.lastName} name='lastName' onChange={handleInputChange} required className="w-full h-full focus:ring-0 border-none bg-gray-100 font-kanit focus:outline-bluerry rounded-xl"/>
                    </div>
                    <div className="w-full h-[15%]">
                      <label className='font-kanit capitalize'>Organization / School</label>
                      <input type="text" value={formData.organization} name='organization' onChange={handleInputChange} required className="w-full h-full focus:ring-0 border-none bg-gray-100 font-kanit focus:outline-bluerry rounded-xl"/>
                    </div>
                    <div className="w-full h-[15%]">
                      <label className='font-kanit capitalize'>Email Address</label>
                      <input type="email" required value={formData.email} name='email' onChange={handleInputChange} className="w-full h-full focus:ring-0 border-none bg-gray-100 font-kanit focus:outline-bluerry rounded-xl"/>
                    </div>
                    <div className="w-full flex justify-between">
                      <button className="bg-bluerry rounded-lg font-kanit text-white p-3" type='submit' onClick={handleSubmit}>
                        {
                          loading ? <Spinner/> : " Save Settings"
                        }
                       </button>
                      <span className='font-kanit hover:cursor-pointer text-red-500 p-4 capitalize' onClick={handleDelete}>close account</span>
                    </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
  );
}

export default Settings;
