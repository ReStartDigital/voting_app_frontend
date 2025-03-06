import React , { useState }  from 'react';
import axios from "axios";


type User = {
  email:string;
  password:string;

}

const Login: React.FC = () => {
<<<<<<< Updated upstream
  

  return (
    <section className="w-full h-80vh flex justify-center items-center flex-col">
      <span>login</span>
=======
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
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="hidden md:block bg-bluerry p-8">
            <div className="flex flex-col items-center justify-center h-full">
              <img src={Logo} alt="logo" className="w-32 mb-6" />
              <h2 className="text-3xl font-kanit font-bold text-white text-center">
                Welcome Back to eVote Restart
              </h2>
              <p className="text-gray-200 font-kanit text-center mt-4">
                Secure, transparent, and accessible voting solutions
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8">
            <h1 className="text-3xl font-kanit font-bold text-bluerry mb-6">
              Login to Your Account
            </h1>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-kanit text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bluerry focus:border-bluerry transition-all"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

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
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <a href="/forgot-password" className="text-sm font-kanit text-bluerry hover:text-blue-600">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-bluerry text-white font-kanit font-bold p-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {loading ? <Spinner /> : 'Login'}
              </button>

              <div className="text-center text-sm font-kanit text-gray-600">
                Don't have an account?{' '}
                <a href="/register/user" className="text-bluerry hover:text-blue-600">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    </section>
  );
};

export default Login;