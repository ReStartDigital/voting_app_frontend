import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Verify from "../Reusable/Verfity";
import { Spinner } from "flowbite-react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
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
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col items-center mb-8">
            <img
              src={Logo}
              alt="eVote Logo"
              className="w-20 h-20 mb-4 object-contain"
            />
            <h1 className="text-3xl font-kanit font-bold text-bluerry">
              Create Your Account
            </h1>
            <p className="text-gray-600 font-kanit mt-2">
              Join our secure voting community
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-kanit text-bluerry mb-2">
                    First Name
                  </label>
                  <input
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full p-3.5 border border-gray-200 font-kanit rounded-xl focus:ring-2 focus:ring-bluerry/50 focus:border-bluerry transition-all"
                    type="text"
                    placeholder="Kwame"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-kanit text-bluerry mb-2">
                    Last Name
                  </label>
                  <input
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full p-3.5 border font-kanit  border-gray-200 rounded-xl focus:ring-2 focus:ring-bluerry/50 focus:border-bluerry transition-all"
                    type="text"
                    placeholder="Boakye"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-kanit text-bluerry mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3.5 border font-kanit border-gray-200 rounded-xl focus:ring-2 focus:ring-bluerry/50 focus:border-bluerry transition-all"
                  type="email"
                  placeholder="restartdigital@gmail.com"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-kanit text-bluerry mb-2">
                    Password
                  </label>
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3.5 border font-kanit border-gray-200 rounded-xl focus:ring-2 focus:ring-bluerry/50 focus:border-bluerry transition-all"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-kanit text-bluerry mb-2">
                    Confirm Password
                  </label>
                  <input
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-3.5 border font-kanit border-gray-200 rounded-xl focus:ring-2 focus:ring-bluerry/50 focus:border-bluerry transition-all"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-kanit text-bluerry mb-2">
                  Date of Birth
                </label>
                <input
                  value={formData.dateOfBirth}
                  className="w-full p-3.5 border font-kanit border-gray-200 rounded-xl focus:ring-2 focus:ring-bluerry/50 focus:border-bluerry transition-all"
                  type="date"
                  name="dateOfBirth"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !state}
              className={`w-full ${
                state ? " hover:bg-blue-700" : "bg-bluerry"
              } w-full bg-bluerry text-white font-kanit font-bold p-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2`}
              onClick={handleSubmit}
            >
              {loading ? (
                <>
                  <Spinner className="w-5 h-5" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <CheckCircleIcon className="w-5 h-5" />
                  <span>Create Account</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm font-kanit text-gray-600">
            Already have an account?{" "}
            <a
              href="/login/user"
              className="text-bluerry hover:text-blue-700 font-kanit transition-colors"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
      {display && <Verify handleVer={handleVer} email={formData.email} />}
    </section>
  );
};

export default Register;
