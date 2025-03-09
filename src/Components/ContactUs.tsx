import React, { useState } from "react";
// import { HiMapPin, HiPhone, HiEnvelope } from "react-icons/hi2";
import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: MapPinIcon,
      label: "Our Office",
      value: "123 eVote Street, Tech City, TC 12345",
      color: "bg-blue-100",
    },
    {
      icon: PhoneIcon,
      label: "Phone Support",
      value: "+1 (234) 567-8900",
      sub: "Mon-Fri, 9:00 AM - 5:00 PM",
      color: "bg-green-100",
    },
    {
      icon: EnvelopeIcon,
      label: "Email Support",
      value: "support.restartdigital@gmail.com",
      sub: "Response within 24 hours",
      color: "bg-purple-100",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-kanit font-bold text-bluerry">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 font-kanit max-w-2xl mx-auto">
            Connect with us through multiple channels - we're here to help you
            with any questions or support needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-kanit font-bold text-gray-800 mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <div
                      className={`${method.color} p-3 rounded-lg text-bluerry`}
                    >
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-kanit font-semibold text-lg text-gray-800">
                        {method.label}
                      </h3>
                      <p className="text-gray-600 font-kanit">{method.value}</p>
                      {method.sub && (
                        <p className="text-sm text-gray-500 font-kanit mt-1">
                          {method.sub}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Connections */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-kanit font-semibold text-gray-800 mb-4">
                  Instant Messaging
                </h3>
                <div className="flex gap-4">
                  <Link
                    to="#"
                    className="p-3 bg-blue-100 text-bluerry rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <ChatBubbleLeftRightIcon className="w-6 h-6" />
                  </Link>
                  <Link
                    to="#"
                    className="p-3 bg-purple-100 text-bluerry rounded-lg hover:bg-purple-200 transition-colors"
                  >
                    <PaperAirplaneIcon className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-kanit font-bold text-gray-800 mb-8">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-kanit text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bluerry/50 focus:border-bluerry transition-all"
                    placeholder="Kwame Boakye"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-kanit text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bluerry/50 focus:border-bluerry transition-all"
                    placeholder="restartdigital@gmail.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-kanit text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bluerry/50 focus:border-bluerry transition-all"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-bluerry text-white font-kanit font-bold p-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <EnvelopeIcon className="w-5 h-5" />
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
