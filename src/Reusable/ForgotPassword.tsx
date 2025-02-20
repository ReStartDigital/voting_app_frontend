import { useState } from "react";
import axios from "axios";



type EmailProps = {
    email:string
}

const Forgotpassword = () => {
  const [formData, setFormData] = useState<EmailProps>({
    email: ""
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const { name , value } = e.target;
    setFormData({
        ...formData , 
        [name]: value
    })
  }

  const handleSubmit = async(e: any) => {
    try{
        e.preventDefault();
        if (!formData.email.includes("@")) {
        setError("Please enter a valid email address");
        return;
        };
        sessionStorage.setItem("user_email", formData.email);
        const response = await axios.put(`http://localhost:6060/auth/forgot-password`, formData , { withCredentials: true });
        console.log(response.data);
        setError("");
    }catch(e: any){
        console.log(e);
        setError(e.response?.data?.message || "An error occurred");
    }
    
  };

  return (
    <div className="w-full flex justify-center flex-col items-center h-80vh">
        <div>
            <span className="font-kanit text-4xl">Enter email used when creating your account.</span>
        </div>
      <form className="p-4 w-80">
        <label className="block mb-2 text-sm font-kanit text-gray-700">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-1 font-kanit rounded-md focus:ring focus:ring-bluerry"
            required
          />
        </label>
        {error && <p className="text-red-500 text-sm mb-2 font-kanit">{error}</p>}
        <button
          type="submit"
          className="w-full bg-bluerry font-kanit text-white py-2 rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forgotpassword;
