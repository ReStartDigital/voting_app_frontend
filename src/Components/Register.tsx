import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Verify from "../Reusable/Verfity";
import { Spinner } from "flowbite-react";
const Logo = require("../assets/images/logo.png");

export interface UserDetails {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword?: string;
  dateOfBirth: string;
}

const Register: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(false);
  const [state, setState] = useState(false);
  const [formData, setFormData] = useState<UserDetails>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const day = new Date();
      const convert: number =
        day.getFullYear() - new Date(formData.dateOfBirth).getFullYear();
      const first =
        formData.firstname.length > 3 && formData.firstname.length <= 20
          ? formData.firstname
          : toast.error("Name length must be greater than 3 characters");

      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        setLoading(false);
      } else if (convert < 18) {
        toast.error("Must be 18 or above");
        setLoading(false);
      } else {
        setLoading(true);
        const response = await axios.post(
          "http://localhost:6060/auth/register",
          formData,
          {
            withCredentials: true,
          }
        );

        if (response.data.states) {
          setDisplay(true);
          setLoading(false);
        }
      }
    } catch (err: any) {
      toast.error(err.response.data.message);
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setState(
      !!formData.email &&
        formData.password.length >= 8 &&
        !!formData.dateOfBirth &&
        !!formData.firstname &&
        !!formData.lastname &&
        !!formData.confirmPassword
    );
  };

  const handleVer = (value: boolean): void => {
    setDisplay(value);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Toaster position="bottom-right" />
        {display && <Verify handleVer={handleVer} email={formData.email} />}

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className="hidden md:block bg-bluerry p-8">
              <div className="flex flex-col items-center justify-center h-full">
                <img src={Logo} alt="logo" className="w-32 mb-6" />
                <h2 className="text-3xl font-kanit font-bold text-white text-center">
                  Join eVote Restart
                </h2>
                <p className="text-gray-200 font-kanit text-center mt-4">
                  Secure, transparent, and accessible voting solutions
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="p-8">
              <h1 className="text-3xl font-kanit font-bold text-bluerry mb-6">
                Create Your Account
              </h1>
              <form className="space-y-4">
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
                      placeholder="Enter your first name"
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
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

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
                      placeholder="Enter your password"
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
                      placeholder="Confirm your password"
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
                  disabled={loading || !state}
                  className={`w-full ${
                    state ? "bg-bluerry hover:bg-blue-700" : "bg-gray-300"
                  } text-white font-kanit font-bold p-3 rounded-lg transition-colors`}
                  onClick={handleSubmit}
                >
                  {loading ? <Spinner /> : "Sign Up"}
                </button>

                <div className="text-center text-sm font-kanit text-gray-600">
                  Already have an account?{" "}
                  <a
                    href="/login/user"
                    className="text-bluerry hover:text-blue-600"
                  >
                    Log In
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
