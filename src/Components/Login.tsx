import React , { useState }  from 'react';
import axios from "axios";


type User = {
  email:string;
  password:string;

}

const Login: React.FC = () => {
  

  return (
    <section className="w-full h-80vh flex justify-center items-center flex-col">
      <span>login</span>
    </section>
  );
}

export default Login;
