import React from "react";
const Logo = require("../assets/images/logo.png");

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="w-full bg-bluerry text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="logo" className="h-12 w-auto" />
              <span className="text-2xl font-kanit font-bold">
                eVote Restart
              </span>
            </div>
            <p className="text-gray-300 font-kanit text-sm">
              Revolutionizing the way schools conduct elections with secure,
              transparent, and accessible voting solutions.
            </p>
            <div className="flex space-x-4">{/* Social Media Icons */}</div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-kanit font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white font-kanit text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/election"
                  className="text-gray-300 hover:text-white font-kanit text-sm"
                >
                  Election
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  className="text-gray-300 hover:text-white font-kanit text-sm"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-gray-300 hover:text-white font-kanit text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-xl font-kanit font-bold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/terms"
                  className="text-gray-300 hover:text-white font-kanit text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white font-kanit text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/cookie-policy"
                  className="text-gray-300 hover:text-white font-kanit text-sm"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-kanit font-bold">Contact Us</h3>
            <div className="space-y-2 text-gray-300 font-kanit text-sm">
              <p>123 Election Street</p>
              <p>Voting City, VC 12345</p>
              <p>Email: info@evoterestart.com</p>
              <p>Phone: +1 (234) 567-890</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 font-kanit text-sm">
          © {new Date().getFullYear()} eVote Restart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
