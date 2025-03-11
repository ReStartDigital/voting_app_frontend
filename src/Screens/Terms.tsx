import React from "react";
import {
  DocumentTextIcon,
  CheckBadgeIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  ScaleIcon,
  ArrowUpIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const Terms: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center justify-center bg-bluerry/10 p-4 rounded-2xl">
            <ScaleIcon className="w-12 h-12 text-bluerry" />
          </div>
          <h1 className="text-4xl md:text-5xl font-kanit font-bold text-bluerry">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600 font-kanit">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>


        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <div
              id="section-1"
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <DocumentTextIcon className="w-8 h-8 text-bluerry" />
                <h2 className="text-2xl font-kanit font-bold text-gray-800">
                  1. Introduction
                </h2>
              </div>
              <p className="text-gray-600 font-kanit leading-relaxed">
                Welcome to eVote Restart. These terms govern your use of our
                secure voting platform. By accessing our services, you agree to
                these terms in full.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div
              id="section-2"
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <CheckBadgeIcon className="w-8 h-8 text-bluerry" />
                <h2 className="text-2xl font-kanit font-bold text-gray-800">
                  2. Acceptance of Terms
                </h2>
              </div>
              <p className="text-gray-600 font-kanit leading-relaxed">
                Your access to and use of eVote Restart constitutes acceptance
                of these terms. If you disagree with any part, you must
                immediately discontinue use of our services.
              </p>
            </div>

            {/* User Responsibilities */}
            <div
              id="section-3"
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <UserCircleIcon className="w-8 h-8 text-bluerry" />
                <h2 className="text-2xl font-kanit font-bold text-gray-800">
                  3. User Responsibilities
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Must be at least 18 years old",
                  "Maintain account confidentiality",
                  "Use platform lawfully",
                  "Report suspicious activity",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 text-bluerry rounded-full flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-600 font-kanit">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="space-y-12">
            {/* Intellectual Property */}
            <div
              id="section-4"
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-bluerry" />
                <h2 className="text-2xl font-kanit font-bold text-gray-800">
                  4. Intellectual Property
                </h2>
              </div>
              <p className="text-gray-600 font-kanit leading-relaxed">
                All platform content, trademarks, and digital assets remain the
                exclusive property of eVote Restart. Unauthorized use or
                distribution is strictly prohibited.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div
              id="section-5"
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <ScaleIcon className="w-8 h-8 text-bluerry" />
                <h2 className="text-2xl font-kanit font-bold text-gray-800">
                  5. Liability Limitations
                </h2>
              </div>
              <p className="text-gray-600 font-kanit leading-relaxed">
                eVote Restart shall not be liable for indirect, incidental, or
                consequential damages arising from platform use. We maintain
                maximum protection under applicable law.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-bluerry/10 p-8 rounded-2xl border border-bluerry/20">
              <h3 className="text-xl font-kanit font-semibold text-bluerry mb-4">
                Need Clarification?
              </h3>
              <p className="text-gray-700 font-kanit mb-4">
                Our legal team is available to answer your questions:
              </p>
              <a
                href="mailto:support@evoterestart.com"
                className="inline-flex items-center text-bluerry hover:text-blue-700 font-kanit font-semibold"
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                legal@evoterestart.com
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-bluerry text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Terms;
