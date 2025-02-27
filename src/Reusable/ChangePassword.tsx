import React , { useState } from 'react';
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Spinner } from 'flowbite-react';

type Details = {
    password: string,
    confirmPassword?: string,
}

const ChangePassword = () => {
    const [formData, setFormData ] = useState<Details>({
        password: "",
        confirmPassword: ""
    });
  const [error, setError] = useState<string>("");
  const [ loading , setLoading ] = useState<boolean>(false);
  const [ searchParams ] = useSearchParams();
  const token = searchParams.get("token");

  const handleSubmit = async(e: any) => {
    try{
        setLoading(true);
        e.preventDefault();
        if(formData.password !== formData.confirmPassword){
          setError("Password must be equal");
          setLoading(false);
          return;
        };
        const response = await axios.post(`http://localhost:6060/auth/reset-password?token=${token}`, formData , { withCredentials: true});
        console.log(response.data);
        setLoading(false);
        setError("");
    }catch(e: any){
      console.error(e);
    }
    
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const { name , value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    })
  }
  return (
    <div className="w-full flex justify-center flex-col items-center h-80vh">
    <div>
        <span className="font-kanit text-4xl">Reset Password</span>
    </div>
  <form className="p-4 w-80">
    <label className="block mb-2 text-sm font-kanit text-gray-700">
      New Password:
      <input
        type="password"
        name='password'
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 mt-1 font-kanit rounded-md focus:ring focus:ring-bluerry"
        required
      />
    </label>
    <label className="block mb-2 text-sm font-kanit text-gray-700">
      Confirm Password:
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="w-full p-2 mt-1 font-kanit rounded-md focus:ring focus:ring-bluerry"
        required
      />
    </label>
    {error && <p className="text-red-500 text-sm mb-2 font-kanit">{error}</p>}
    <button
      type="submit"
      className="w-full bg-bluerry font-kanit text-white py-2 rounded-md"
        onClick={handleSubmit}>
      {
        loading ? (<Spinner/>) : "Submit"
      }
    </button>
  </form>
</div>
  )
}

export default ChangePassword;
