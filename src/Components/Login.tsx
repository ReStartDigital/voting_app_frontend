import React , { useState }  from 'react';
import axios from "axios";
import ChangeState from '../store/UseChangeState';
import { Spinner } from 'flowbite-react';
const Logo = require("../assets/images/logo.png");


type User = {
  email:string;
  password:string;

}

const Login: React.FC = () => {
  const { text, setLogMessage } = ChangeState();
  const [ loading , setLoading ] = useState<boolean>(false);
    const [ formData , setFormData ] = useState<User>({
        email:"",
        password:"",
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
      e.preventDefault();
      const { value, name } = e.target;
      setFormData({
       ...formData,
        [name] : value,
      })

  }

    const handleSubmit = async(e: any)=>{
      try{
        setLoading(true);
        e.preventDefault();
        const response = await axios.post("http://localhost:6060/auth/login", formData , { withCredentials: true })
        console.log(response.data);
        if(response.data.token && response.data.userId){
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("user_id", response.data.userId);
          
          setLoading(false);
          window.location.href = "/user/default/page";
        }else{
          setLogMessage(response?.data?.password || response?.data?.message);
          setLoading(false)
        }
      }
      catch(error: any){
        setLogMessage(error.response?.data?.password || error.response?.data?.message);
        setLoading(false);
        console.error(error);
      }
        
    }


  return (
    <section className="w-full h-80vh flex justify-center items-center flex-col">
        <div className='2xl:w-[50%] xl:w-[50%] lg:w-[70%] md:w-[80%] sm:w-full xs:w-full xx:w-full h-[90%] flex justify-center items-center'>
            <form className='flex justify-start items-center 2xl:w-[60%] xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full xx:w-full gap-5 h-full flex-col shadow-lg shadow-gray-200 rounded-md'>
               <div className="w-full flex justify-center items-center">
                  <img src={Logo} alt="logo" className='object-cover' />
               </div>
               <span className='text-center font-kanit text-bluerry font-bold uppercase text-4xl'>Log-in</span>
               <div className='w-full flex justify-center items-center'>
                  <span className='text-red-500 text-center font-kanit'>{text}</span>
               </div>
               <div className='w-[90%] flex justify-center items-center'>
                  <input name='email' value={formData.email} onChange={handleChange} className='w-full p-4 bg-gray-100 focus:ring-0 border-none flex justify-center items-center font-kanit rounded-xl focus:outline-bluerry' type="email" placeholder='Email' required/>
               </div>
               <div className='w-[90%] flex justify-center items-center'>
                  <input name="password" onChange={handleChange} value={formData.password} className='w-full p-4 focus:ring-0 border-none bg-gray-100 flex justify-center items-center font-kanit rounded-xl focus:outline-bluerry' type="password" placeholder='Enter your password' required/>
               </div>
               <div className='w-[90%] flex justify-end items-center'>
                  <a href='/forgot-password' rel="noopener noreferer" className='font-kanit text-bluerry'>forgot password?</a>
               </div>
               <button type='submit' className='w-[90%] flex justify-center font-kanit font-bold text-white rounded-xl bg-gradient-to-r from-log via-black/90 to-log p-4 items-center' onClick={handleSubmit}>
               {
                  loading ? (<Spinner/>) : "Log-in"
               }
                    
               </button>
            </form>
        </div>
    </section>
  );
}

export default Login;
