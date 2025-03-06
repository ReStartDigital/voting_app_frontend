import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  // Store icons in variables to ensure proper typing
  const MapIcon = FaMapMarkerAlt;
  const PhoneIcon = FaPhone;
  const EnvelopeIcon = FaEnvelope;

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-kanit font-bold bg-gradient-to-r from-bluerry to-blue-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-600 font-kanit">
            We're here to help and answer any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-kanit font-bold text-bluerry mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-bluerry rounded-full text-white mr-4">
                  <MapIcon className="text-xl" />
                </div>
                <div>
                  <h3 className="font-kanit font-semibold text-lg">
                    Our Office
                  </h3>
                  <p className="text-gray-600 font-kanit">
                    123 eVote Street,
                    <br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-bluerry rounded-full text-white mr-4">
                  <PhoneIcon className="text-xl" />
                </div>
                <div>
                  <h3 className="font-kanit font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600 font-kanit">
                    +1 (234) 567-8900
                    <br />
                    Mon - Fri, 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-bluerry rounded-full text-white mr-4">
                  <EnvelopeIcon className="text-xl" />
                </div>
                <div>
                  <h3 className="font-kanit font-semibold text-lg">Email</h3>
                  <p className="text-gray-600 font-kanit">
                    support@evoterestart.com
                    <br />
                    We respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-kanit font-bold text-bluerry mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-kanit text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bluerry focus:border-bluerry transition-all"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-kanit text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bluerry focus:border-bluerry transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-kanit text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bluerry focus:border-bluerry transition-all"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-bluerry text-white font-kanit font-bold p-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
