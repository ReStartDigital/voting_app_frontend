import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

// For mixed icon types
interface ContactIcon {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
  label: string;
}

// SVG icon component
const MapPin: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props}>{/* ... */}</svg>
);

// FontAwesome icon with explicit typing
const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = FaPhone;

// Using different icon types
const contactMethods: ContactIcon[] = [
  { icon: MapPin, label: "Address" },
  { icon: PhoneIcon, label: "Phone" },
  { icon: "📧", label: "Email" } // Emoji fallback
];

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
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-3 bg-bluerry rounded-full text-white mr-4">
                    {typeof method.icon === "string" ? (
                      <span>{method.icon}</span>
                    ) : (
                      <method.icon className="text-xl" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-kanit font-semibold text-lg">
                      {method.label}
                    </h3>
                    <p className="text-gray-600 font-kanit">
                      {method.label === "Address" ? (
                        "123 eVote Street, Tech City, TC 12345"
                      ) : method.label === "Phone" ? (
                        "+1 (234) 567-8900 Mon - Fri, 9:00 AM - 5:00 PM"
                      ) : (
                        "support@evoterestart.com We respond within 24 hours"
                      )}
                    </p>
                  </div>
                </div>
              ))}
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
