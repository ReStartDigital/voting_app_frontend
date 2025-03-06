import React from "react";

const Terms: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-kanit font-bold bg-gradient-to-r from-bluerry to-blue-600 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-gray-600 font-kanit">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-kanit font-bold text-bluerry mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 font-kanit mb-6">
              Welcome to eVote Restart. These terms and conditions outline the
              rules and regulations for the use of our platform.
            </p>

            <h2 className="text-2xl font-kanit font-bold text-bluerry mb-4">
              2. Acceptance of Terms
            </h2>
            <p className="text-gray-600 font-kanit mb-6">
              By accessing this platform, we assume you accept these terms and
              conditions. Do not continue to use eVote Restart if you do not
              agree to all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl font-kanit font-bold text-bluerry mb-4">
              3. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="text-gray-600 font-kanit mb-2">
                You must be at least 18 years old to use our services
              </li>
              <li className="text-gray-600 font-kanit mb-2">
                You are responsible for maintaining the confidentiality of your
                account
              </li>
              <li className="text-gray-600 font-kanit mb-2">
                You agree to use the platform only for lawful purposes
              </li>
            </ul>

            <h2 className="text-2xl font-kanit font-bold text-bluerry mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-600 font-kanit mb-6">
              Unless otherwise stated, eVote Restart and/or its licensors own
              the intellectual property rights for all material on the platform.
              All intellectual property rights are reserved.
            </p>

            <h2 className="text-2xl font-kanit font-bold text-bluerry mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-600 font-kanit mb-6">
              In no event shall eVote Restart, nor any of its officers,
              directors, and employees, be held liable for anything arising out
              of or in any way connected with your use of this platform.
            </p>

            <h2 className="text-2xl font-kanit font-bold text-bluerry mb-4">
              6. Changes to Terms
            </h2>
            <p className="text-gray-600 font-kanit mb-6">
              We reserve the right to modify these terms at any time. We will
              notify users of any changes by posting the new terms on this page.
            </p>

            <h2 className="text-2xl font-kanit font-bold text-bluerry mb-4">
              7. Governing Law
            </h2>
            <p className="text-gray-600 font-kanit">
              These terms and conditions are governed by and construed in
              accordance with the laws of [Your Country/State] and you
              irrevocably submit to the exclusive jurisdiction of the courts in
              that location.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center text-gray-600 font-kanit">
          If you have any questions about these Terms, please contact us at{" "}
          <a
            href="mailto:support@evoterestart.com"
            className="text-bluerry hover:text-blue-600"
          >
            support@evoterestart.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Terms;
