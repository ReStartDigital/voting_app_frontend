import React from 'react';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AfterLogin from "./Components/AfterLogin";


const App:React.FunctionComponent = ()=>{
  return (
    <>
      <Header/>
      <Router>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/login/user" element={<Login/>} />
              <Route path="/register/user" element={<Register/>}/> 
              <Route path="/election" element={<AfterLogin/>} /> 
          </Routes>
      </Router>
    
  </>
  );
}

export default App;
