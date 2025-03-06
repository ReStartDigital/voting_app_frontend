import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Election from "./Components/election";
import Terms from "./Components/terms";
import Forgotpassword from "./Reusable/ForgotPassword";
import Security from "./Components/Security";
import ChangePassword from "./Reusable/ChangePassword";
import Dashboard from "./AuthComponents/Dashboard";
import { useLocation } from "react-router-dom";
import Protect from "./Reusable/Protect";
import AfterLogin from "./Components/AfterLogin";

const RenderHeader = () => {
  const location = useLocation();

  // Hide header on dashboard routes
  if (
    location.pathname.startsWith("/admin/dashboard") ||
    location.pathname.startsWith("/user/default/page")
  ) {
    return null;
  }
  return <Header />;
};

const App: React.FC = () => {
  return (
    <Router>
      <RenderHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/login/user" element={<Login />} />
        <Route path="/register/user" element={<Register />} />
        <Route path="/election" element={<Election />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/security" element={<Security />} />
        <Route
          path="/change/password/user/vote-app/reset-password"
          element={<ChangePassword />}
        />
        <Route
          path="/admin/dashboard/*"
          element={
            <Protect>
              <Dashboard />
            </Protect>
          }
        />
        <Route
          path="/user/default/page"
          element={
            <Protect>
              <AfterLogin />
            </Protect>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
