import React , { useState } from 'react';


const Register:React.FunctionComponent = ()=>{
<<<<<<< Updated upstream
    return(
        <section className="w-full h-full flex justify-center items-center p-3">
           <span>Register</span>  
        </section>
    )
}
=======
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
       
    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center">
            <Toaster position='bottom-right' />
            {display && <Verify handleVer={handleVer} email={formData.email} />}
            
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image Section */}
                    <div className="hidden md:block bg-bluerry p-8">
                        <div className="flex flex-col items-center justify-center h-full">
                            <img src={Logo} alt="logo" className="w-32 mb-6" />
                            <h2 className="text-3xl font-kanit font-bold text-white text-center">
                                Join eVote Restart
                            </h2>
                            <p className="text-gray-200 font-kanit text-center mt-4">
                                Be part of the revolution in secure and transparent voting systems
                            </p>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="p-8">
                        <h1 className="text-3xl font-kanit font-bold text-bluerry mb-6">
                            Create Your Account
                        </h1>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-kanit text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bluerry focus:border-bluerry transition-all"
                                        type="text"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-kanit text-gray-700 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bluerry focus:border-bluerry transition-all"
                                        type="text"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-kanit text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bluerry focus:border-bluerry transition-all"
                                    type="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-kanit text-gray-700 mb-2">
                                        Password
                                    </label>
                                    <input
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bluerry focus:border-bluerry transition-all"
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-kanit text-gray-700 mb-2">
                                        Confirm Password
                                    </label>
                                    <input
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bluerry focus:border-bluerry transition-all"
                                        type="password"
                                        placeholder="Confirm Password"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-kanit text-gray-700 mb-2">
                                    Date of Birth
                                </label>
                                <input
                                    value={formData.dateOfBirth}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bluerry focus:border-bluerry transition-all"
                                    type="date"
                                    name="dateOfBirth"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full bg-bluerry text-white font-kanit font-bold p-3 rounded-lg hover:bg-blue-700 transition-colors ${
                                    loading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                                onClick={handleSubmit}
                            >
                                {loading ? <Spinner /> : "Create Account"}
                            </button>

                            <p className="text-center text-gray-600 font-kanit">
                                Already have an account?{' '}
                                <a href="/login/user" className="text-bluerry hover:underline">
                                    Log in
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
>>>>>>> Stashed changes

export default Register;