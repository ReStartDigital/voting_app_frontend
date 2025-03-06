import React from "react";
import {
  FaShieldAlt,
  FaLock,
  FaServer,
  FaUserCheck,
  FaClipboardCheck,
} from "react-icons/fa";
const photo = require("../assets/images/Frame65.png");
const Phoneimg = require("../assets/images/Frame63.png");
const security = require("../assets/images/Frame64.png");

interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const Security = () => {
  const features: Feature[] = [
    {
      icon: FaShieldAlt,
      title: "End-to-End Encryption",
      description: "Your data is scrambled and unreadable to anyone except you",
    },
    {
      icon: FaLock,
      title: "Secure Servers",
      description:
        "Housed in facilities with robust physical and digital security",
    },
    {
      icon: FaUserCheck,
      title: "Two-Factor Auth",
      description:
        "Ensures only authorized individuals can access your account",
    },
    {
      icon: FaServer,
      title: "Regular Audits",
      description: "Continuous security checks to identify vulnerabilities",
    },
    {
      icon: FaClipboardCheck,
      title: "Compliance",
      description: "Meets all industry security standards and regulations",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-kanit font-bold bg-gradient-to-r from-bluerry to-blue-600 bg-clip-text text-transparent">
            Our Security System
          </h1>
          <p className="mt-4 text-lg text-gray-600 font-kanit">
            Protecting your decisions with state-of-the-art security measures
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-bluerry mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-kanit font-semibold text-bluerry mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-kanit">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-kanit font-bold text-bluerry mb-8 text-center">
            How Our Security Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={security}
                alt="Security"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 font-kanit text-lg">
                At eVote Restart, we understand the importance of security and
                confidentiality. That's why we offer a service that allows
                individuals to make decisions in a 100% secure environment.
              </p>
              <div className="space-y-4">
                {[
                  "Military-grade encryption for all data",
                  "Continuous monitoring and threat detection",
                  "Regular penetration testing",
                  "Compliance with GDPR and other regulations",
                  "Secure data storage and transmission",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-bluerry rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-kanit">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-bluerry rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-kanit font-bold mb-4">
                Trust Us with Your Decision-Making Needs
              </h2>
              <p className="text-gray-200 font-kanit">
                Our team of experts is dedicated to ensuring that your data is
                protected and your decisions are informed.
              </p>
            </div>
            <div>
              <img
                src={photo}
                alt="Security"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
