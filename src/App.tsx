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
import Dashboard from './AuthComponents/Dashboard';
import { useLocation } from 'react-router-dom';

 const RenderHeader = ()=>{
    const navigate = useLocation();
    if(navigate.pathname === "/admin/dashboard/election"){
      return null;
    };
    return <Header/>;
  }


const App:React.FunctionComponent = ()=>{
  
 
  return (
      <Router> 
        <RenderHeader/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/login/user" element={<Login/>} />
              <Route path="/register/user" element={<Register/>}/> 
              <Route path="/election" element={<Election/>} /> 
              <Route path="/forgot-password" element={<Forgotpassword/>} />
              <Route path='/security' element={<Security/>}/>
              <Route path='/change/password/user/vote-app/reset-password' element={<ChangePassword/>}/>
              <Route path='/admin/dashboard/election' element={<Dashboard/>}/>
          </Routes>
      </Router>
  );
}

export default App;
