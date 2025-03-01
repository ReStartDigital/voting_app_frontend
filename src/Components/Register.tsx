import React , { useState } from 'react';
import axios from "axios";
import { toast , Toaster } from "react-hot-toast";
import Verify from '../Reusable/Verfity';
import { Spinner } from 'flowbite-react';
const Logo = require("../assets/images/logo.png")

export interface UserDetails {
    firstname: string;
    lastname:string;
    email: string;
    password: string;
    confirmPassword?:string;
    dateOfBirth: string;
}



const Register:React.FunctionComponent = ()=>{
   const [loading , setLoading ] = useState<boolean>(false);
   const [ display , setDisplay ] = useState<boolean>(false);
   const [ state , setState ] = useState(false);
    const [ formData , setFormData ] = useState<UserDetails>({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:"",
        dateOfBirth: ""
    })

   //  useEffect(()=>{
   //    setDisplay(true);
   //  },[])

    const handleSubmit = async(e: any)=>{
      try{
         e.preventDefault();
         const day = new Date();
         const convert: number  = day.getFullYear() - new Date(formData.dateOfBirth).getFullYear();
         const first = formData.firstname.length > 3 && formData.firstname.length <= 20 ? formData.firstname : toast.error("Name length must greater than 3 characters");
         if (formData.password !== formData.confirmPassword){
             toast.error("Passwords do not match");
             setLoading(false);
         }else if(convert < 18){
             toast.error("Must be 18 or above")
             setLoading(false)
         }else{
             setLoading(true);
              const response = await axios.post("http://localhost:6060/auth/register" , formData,{ withCredentials: true }) //insert backend url here
              console.log(response.data);
            if(response.data.states){
               setDisplay(true);
               console.log(response.data)
               setLoading(false);
                 //toast.error(response.data.state)
                 //setLoading(false);
            }
            // else{
            //  setLoading(false);
            //  toast.success("Registration successfull")
            //  window.location.href = "/login/user";
            // }
         }
     }catch(err:any){
         toast.error(err.response.data.message)
         setLoading(false)
     }
    }


        const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
            e.preventDefault();
            const { value, name } = e.target;
            setFormData({
             ...formData,
              [name] : value,
            })
         
             if (formData.email && formData.password.length >= 8 && formData.dateOfBirth === null && formData.firstname === null && formData.lastname === null && formData.confirmPassword === null) {
               setState(false);
             } else {
               setState(true); 
             }

        }

        const handleVer = (value: boolean):void=>{
         setDisplay(value);
       }
     
            
    
    return(
        <section className="w-full h-screen flex justify-center items-center flex-col">
         <Toaster position='bottom-right'/>
         {
          display && <Verify handleVer={handleVer} email={formData.email}/> 
        }
        <div className='2xl:w-[50%] xl:w-[50%] lg:w-[70%] md:w-[80%] sm:w-full xs:w-full xx:w-full h-full flex justify-center items-center'>
            <form className='flex justify-start items-center 2xl:w-[60%] xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full xx:w-full gap-5 h-full flex-col shadow-lg shadow-gray-200 rounded-md'>
               <div className="w-full flex justify-center items-center">
                  <img src={Logo} alt="logo" className='object-cover' />
               </div>
               <span className='text-center font-kanit text-bluerry font-bold uppercase text-4xl'>Sign-up</span>
               <div className='w-[90%] flex justify-center items-center'>
                  <input name="firstname" value={formData.firstname} onChange={handleChange} className='w-full focus:ring-0 p-4 bg-gray-100 border-none flex justify-center items-center font-kanit rounded-xl outline-none focus:outline-bluerry' type="text" placeholder='First Name' required/>
               </div>
               <div className='w-[90%] flex justify-center items-center'>
                  <input name="lastname" value={formData.lastname} onChange={handleChange} className='w-full p-4 focus:ring-0 bg-gray-100 border-none flex justify-center items-center font-kanit  outline-none rounded-xl focus:outline-bluerry' type="text" placeholder='Last Name' required/>
               </div>
               <div className='w-[90%] flex justify-center items-center'>
                  <input name="email" value={formData.email} onChange={handleChange} className='w-full p-4 focus:ring-0 bg-gray-100 flex border-none justify-center items-center font-kanit outline-none rounded-xl focus:outline-bluerry' type="email" placeholder='Email' required/>
               </div>
               <div className='w-[90%] flex justify-center items-center'>
                  <input name="password" value={formData.password} onChange={handleChange} className='w-full p-4 focus:ring-0 bg-gray-100 border-none flex justify-center items-center outline-none font-kanit rounded-xl focus:outline-bluerry' type="password" placeholder='Enter your password' required/>
               </div>
               <div className='w-[90%] flex justify-center items-center'>
                  <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className='w-full focus:ring-0 border-none p-4 bg-gray-100 flex justify-center outline-none items-center font-kanit rounded-xl focus:outline-bluerry' type="password" placeholder='Confirm password' required/>
               </div>
               <div className='w-[90%] flex justify-center items-center'>
                  <input value={formData.dateOfBirth} className='w-full p-4 bg-gray-100 flex justify-center focus:ring-0 items-center font-kanit rounded-xl focus:outline-bluerry border-none outline-none' type="date" placeholder='Enter your password' name='dateOfBirth' onChange={handleChange}required/>
               </div>
               
               <button type='submit' disabled={loading} className={`w-[90%] ${state ? "bg-gradient-to-r from-log via-black/90 to-log" : "bg-gray-200"  } flex justify-center font-kanit font-bold text-white rounded-xl  p-4  items-center`} onClick={handleSubmit}>
               {
                  loading ? <Spinner/> : " Sign-up"
               }
                   
               </button>
            </form>
        </div>
    </section>
    )
}

export default Register;