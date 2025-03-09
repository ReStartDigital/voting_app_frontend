/* eslint-disable react/jsx-no-undef */
import { useState } from "react";
import axios from "axios";
import useTextStore from "../store/UseTextStore";
import { Spinner } from "flowbite-react";
import { EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const Logo = require("../assets/images/logo.png");

type EmailProps = {
  email: string;
};

const ForgotPassword = () => {
  const [formData, setFormData] = useState<EmailProps>({
    email: "",
  });
  const [error, setError] = useState<string>("");
  const { text, setText } = useTextStore();
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (!formData.email.includes("@")) {
        setError("Please enter a valid email address");
        return;
      }
      const response = await axios.put(
        `http://localhost:6060/auth/forgot-password`,
        formData,
        { withCredentials: true }
      );
      setText(response.data.message);
      setError("");
    } catch (e: any) {
      console.log(e);
      setError(e.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
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
              Password Recovery
            </h1>
            <p className="text-gray-600 font-kanit mt-2 text-center">
              Enter your email to reset your password
            </p>
          </div>

          {text && (
            <div className="mb-6 p-4 bg-green-50 rounded-lg flex items-center gap-3">
              <CheckCircleIcon className="w-5 h-5 text-green-600" />
              <p className="text-green-700 font-kanit text-sm">{text}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-kanit text-bluerry mb-2">
                Email Address
              </label>
              <div className="relative">
                <EnvelopeIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bluerry/50 focus:border-bluerry transition-all"
                  type="email"
                  placeholder="restartdigital@gmail.com"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-bluerry text-white font-kanit font-bold p-4 rounded-xl transition-all ${
                loading ? "opacity-90" : "hover:bg-blue-700"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <Spinner className="w-5 h-5" />
                  <span>Processing...</span>
                </div>
              ) : (
                "Reset Password"
              )}
            </button>

            <div className="text-center text-sm font-kanit text-gray-600">
              Remember your password?{" "}
              <Link
                to="/login/user"
                className="text-bluerry hover:text-blue-700 font-semibold"
              >
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
