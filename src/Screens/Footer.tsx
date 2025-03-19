import React from "react";
import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  // InstagramIcon,
} from "react-share";
const Logo = require("../assets/images/logo.png");

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="w-full bg-bluerry text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={Logo}
                alt="eVote Restart logo"
                className="h-14 w-auto"
              />
              <h2 className="text-2xl font-kanit font-bold">eVote Restart</h2>
            </div>
            <p className="text-gray-200 font-kanit text-sm leading-relaxed">
              Revolutionizing educational elections with secure, transparent,
              and accessible digital voting solutions.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/YourPageName"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon
                  size={32}
                  round
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="https://twitter.com/YourHandle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon
                  size={32}
                  round
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="https://www.linkedin.com/restart"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon
                  size={32}
                  round
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
              {/* <InstagramIcon
                size={32}
                round
                className="hover:opacity-80 transition-opacity"
              /> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-kanit font-semibold mb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["Elections", "/election"],
                ["Security", "/security"],
                ["Contact", "/contact-us"],
              ].map(([title, url]) => (
                <li key={title}>
                  <a
                    href={url}
                    className="text-gray-300 hover:text-white font-kanit text-sm flex items-center gap-2 transition-colors"
                  >
                    <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-kanit font-semibold mb-2">Legal</h3>
            <ul className="space-y-3">
              {[
                ["Terms & Conditions", "/terms"],
                ["Privacy Policy", "/privacy-policy"],
                ["Cookie Policy", "/cookie-policy"],
              ].map(([title, url]) => (
                <li key={title}>
                  <a
                    href={url}
                    className="text-gray-300 hover:text-white font-kanit text-sm flex items-center gap-2 transition-colors"
                  >
                    <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-kanit font-semibold mb-2">
              Contact Us
            </h3>
            <div className="space-y-3 text-gray-300 font-kanit text-sm">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 flex-shrink-0" />
                <p>
                  Kumasi - AK-040-6130
                  <br />
                  Ashanti Region, Ghana
                </p>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5" />
                <a
                  href="mailto:info.restartdigital@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  info.restartdigital@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +233 (0) 548-367-637
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-300 font-kanit text-sm">
            © {new Date().getFullYear()} eVote Restart. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="#"
              className="text-gray-300 hover:text-white font-kanit text-sm transition-colors"
            >
              Accessibility Statement
            </Link>
            <Link
              to="#"
              className="text-gray-300 hover:text-white font-kanit text-sm transition-colors"
            >
              GDPR Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
