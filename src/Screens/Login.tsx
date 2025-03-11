import React, { useState } from "react";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { LockClosedIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
// import Logo from "../assets/images/logo.png";

type User = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<User>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:6060/auth/login",
        formData,
        { withCredentials: true }
      );

      if (response.data.token && response.data.userId) {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("user_id", response.data.userId);
        window.location.href = "/user/default/page";
      } else {
        setErrorMessage(response?.data?.message || "Login failed");
      }
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "An error occurred");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col items-center mb-8">
            {/* <img
              src={Logo}
              alt="eVote Logo"
              className="w-24 h-24 mb-4 object-contain"
            /> */}
            <h1 className="text-3xl font-kanit font-bold text-bluerry">
              Welcome Back
            </h1>
            <p className="text-gray-600 font-kanit mt-2">
              Secure access to your voting dashboard
            </p>
          </div>

          {errorMessage && (
            <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-kanit text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <EnvelopeIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 font-kanit border border-gray-300 rounded-lg focus:ring-2 focus:ring-bluerry/50 focus:border-bluerry transition-all"
                  type="email"
                  placeholder="restartdigital@gmail.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-kanit text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <LockClosedIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 font-kanit border border-gray-300 rounded-lg focus:ring-2 focus:ring-bluerry/50 focus:border-bluerry transition-all"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <a
                href="/forgot-password"
                className="text-sm font-kanit text-bluerry hover:text-blue-700 transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-bluerry text-white font-kanit font-bold p-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <LockClosedIcon className="w-5 h-5" />
                  Sign In
                </>
              )}
            </button>

            <p className="text-center text-sm font-kanit text-gray-600">
              Don't have an account?{" "}
              <a
                href="/register/user"
                className="text-bluerry hover:text-blue-700 font-semibold"
              >
                Create account
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
