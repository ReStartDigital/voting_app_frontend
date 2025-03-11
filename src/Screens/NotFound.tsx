import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                {...{ className: "bg-white p-8 rounded-3xl text-center flex flex-col items-center" }}
            >
                {/* SVG Illustration */}
                <svg
                    className="w-52 h-52 mb-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12Zm4-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm6 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-3.5 4.5a3.5 3.5 0 0 1 7 0 .75.75 0 0 1-1.5 0 2 2 0 0 0-4 0 .75.75 0 0 1-1.5 0Z"
                        fill="#ff6b6b"
                    />
                </svg>

                {/* Title */}
                <h1 className="text-5xl font-kanit font-bold text-gray-800">404</h1>
                <p className="text-gray-600 font-kanit text-lg mt-2">
                    Oops! The page you are looking for does not exist.
                </p>

                {/* Back to Home Button */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    {...{ className:"mt-6" }}
                >
                    <Link
                        to="/"
                        className="px-6 py-3 text-lg text-white bg-black font-kanit rounded-xl shadow-md  transition-all"
                    >
                        Go Home
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
