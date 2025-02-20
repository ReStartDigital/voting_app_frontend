import React from 'react';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Election from './Components/election';
import Forgotpassword from './Reusable/ForgotPassword';
import Security from './Components/Security';
import ChangePassword from './Reusable/ChangePassword';




const App:React.FunctionComponent = ()=>{
  return (
    <>
      <Header/>
      <Router>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/login/user" element={<Login/>} />
              <Route path="/register/user" element={<Register/>}/> 
              <Route path="/election" element={<Election/>} /> 
              <Route path="/forgot-password" element={<Forgotpassword/>} />
              <Route path='/security' element={<Security/>}/>
              <Route path='/change/password/user/vote-app' element={<ChangePassword/>}/>
          </Routes>
      </Router>
    
  </>
  );
}

export default App;
