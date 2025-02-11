import React , { useState } from 'react';
const Logo = require("../assets/images/logo.png")

export interface UserDetails {
    first_name: string;
    last_name:string;
    email: string;
    password: string;
    confirmPassword?:string;
    dateOfBirth: string;
}


const Register:React.FunctionComponent = ()=>{
    const [ formData , setFormData ] = useState<UserDetails>({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        confirmPassword:"",
        dateOfBirth: ""
    })

    const handleSubmit = ()=>{

    }


        const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
            e.preventDefault();
            const { value, name , type} = e.target;
            setFormData({
             ...formData,
              [name] : value,
            })

        }
            
    
    return(
        <section className="w-full h-screen flex justify-center items-center flex-col">
        <div className='2xl:w-[50%] xl:w-[50%] lg:w-[70%] md:w-[80%] sm:w-full xs:w-full xx:w-full h-full flex justify-center items-center'>
            <form className='flex justify-start items-center 2xl:w-[60%] xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full xx:w-full gap-5 h-full flex-col shadow-lg shadow-gray-200 rounded-md'>
               <div className="w-full flex justify-center items-center">
                  <img src={Logo} alt="logo" className='object-cover' />
               </div>
               <span className='text-center font-kanit text-bluerry font-bold uppercase text-4xl'>Sign-up</span>
               <div className='w-[90%] flex justify-center items-center'>
                  <input name="first_name" value={formData.first_name} onChange={handleChange} className='w-full p-4 bg-gray-100 flex justify-center items-center font-kanit rounded-xl focus:outline-bluerry' type="text" placeholder='First Name' required/>
               </div>
               <div className='w-[90%] flex justify-center items-center'>
                  <input name="last_name" value={formData.last_name} onChange={handleChange} className='w-full p-4 bg-gray-100 flex justify-center items-center font-kanit rounded-xl focus:outline-bluerry' type="text" placeholder='Last Name' required/>
               </div>
               <div className='w-[90%] flex justify-center items-center'>
                  <input name="email" value={formData.email} onChange={handleChange} className='w-full p-4 bg-gray-100 flex justify-center items-center font-kanit rounded-xl focus:outline-bluerry' type="email" placeholder='Email' required/>
               </div>
               <div className='w-[90%] flex justify-center items-center'>
                  <input name="password" value={formData.password} onChange={handleChange} className='w-full p-4 bg-gray-100 flex justify-center items-center font-kanit rounded-xl focus:outline-bluerry' type="password" placeholder='Enter your password' required/>
               </div>
               <div className='w-[90%] flex justify-center items-center'>
                  <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className='w-full p-4 bg-gray-100 flex justify-center items-center font-kanit rounded-xl focus:outline-bluerry' type="password" placeholder='Confirm password' required/>
               </div>
               <div className='w-[90%] flex justify-center items-center'>
                  <input className='w-full p-4 bg-gray-100 flex justify-center items-center font-kanit rounded-xl focus:outline-bluerry' type="date" placeholder='Enter your password' required/>
               </div>
               <button type='submit' className='w-[90%] flex justify-center font-kanit font-bold text-white rounded-xl bg-gradient-to-r from-log via-black/90 to-log p-4 to-bluerry items-center'>
                    Sign-up
               </button>
            </form>
        </div>
    </section>
    )
}

export default Register;