import React, { useState } from 'react';
import axios from "axios";
import { Spinner } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';



interface Option {
  email:string;
  handleVer: (value: boolean) => void;
}


type Valid = {
  verify: number;
}

const Verify: React.FC<Option> = ({ handleVer , email}) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '' , '', '']);
  const [ error , setError ] = useState("");
  const [ status , setstatus ] = useState<boolean>(false);
  const navigate = useNavigate();


  // Handle input change (for entering a digit)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
    let value = e.target.value;

    // If a valid single digit is entered, update the OTP and move to the next input
    if (value.length === 1 && !isNaN(Number(value))) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Focus the next input field if it's not the last one
      if (index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`)?.focus();
      }
    }
  };

  // Handle the backspace key (delete backward)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number): void => {
    if (e.key === 'Backspace') {
  
      if (otp[index] === '' && index > 0) {
        document.getElementById(`otp-input-${index - 1}`)?.focus();
      }
     
      if (otp[index] !== '') {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
    }
  };

  const handleVerify = async(event: React.MouseEvent<HTMLDivElement>) => {
    setstatus(true);
    const valid: Valid = {
      verify: parseInt(otp.join(''))
    }
    try{
        const response = await axios.post(`http://localhost:6060/auth/verify-otp?email=${email}&valid=${valid.verify}`,{ withCredentials: true})
        if(response.data.states === false){
           setError(response.data.message);
          handleVer(true);
           
        }else{
          setTimeout(()=>{
            setError(response.data.message);
          },300)
          setstatus(false)
          setError("")
          navigate("/login/user");
          handleVer(false);
        }
        
    }catch(err: any){
        console.log(err);
;    }
  };

  return (
    <section className="fixed w-full h-screen bg-opacity-50 inset-0 backdrop-blur-md bg-gray-100 flex justify-center items-center z-30">
      <div className="absolute inset-0 backdrop-blur-md bg-gray-50 z-0"></div>
      <div className="relative z-10 p-8 shadow shadow-gray-100 2xl:w-[40%] xl:w-[40%] lg:w-[60%] md:w-full sm:w-full xs:w-full xx: w-full h-[60%] flex justify-center items-center flex-col gap-4 rounded-xl">
        <span className='w-full text-red-500 font-Poppins text-center'>{error}</span>
        <span className="font-kanit text-center text-4xl">Verify your identity</span>
        <span className="font-kanit text-center">An OTP code has been sent to this number via your email</span>
        <div className="flex space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength={1}
              autoComplete='off'
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`OTP input ${index + 1}`}
            />
          ))}
        </div>
        <div
          className="bg-bluerry p-4 rounded-md 2xl:w-[20%] xl:w-[20%] lg:w-[30%] md:w-[40%] sm:w-[60%] xs:w-[60%] xx:w-[60%] flex justify-center items-center cursor-pointer"
          onClick={handleVerify}
        >
          <span className="font-kanit text-slate-100">
            {
              status ? (<Spinner/>) : "Verify"
            }</span>
        </div>
      </div>
    </section>
  );
};

export default Verify;
