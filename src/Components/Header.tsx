import React, { useState } from "react";
import { Link } from "react-router-dom";
const Logo = require("../assets/images/logo.png");

const NAV_ITEMS = [
  { name: "Election", path: "/election" },
  { name: "Contact", path: "/contact-us" },
  { name: "Security", path: "/security" },
  { name: "Terms", path: "/terms" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const renderNavLink = (item: (typeof NAV_ITEMS)[0]) => (
    <Link
      key={item.name}
      to={item.path}
      className="text-bluerry font-kanit px-4 py-2 lg:hover:text-blue-700 transition-colors"
      onClick={() => setMenuOpen(false)}
    >
      {item.name}
    </Link>
  );

  return (
    <>
      <header className="w-full h-20 bg-white border-b border-gray-100 fixed top-0 left-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={Logo} alt="eVote Restart logo" className="h-12 w-auto" />
            <span className="text-2xl font-kanit font-bold text-bluerry">
              eVote Restart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map(renderNavLink)}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login/user"
              className="px-6 py-2.5 font-kanit text-bluerry hover:bg-bluerry/10 rounded-lg transition-all"
            >
              Log in
            </Link>
            <Link
              to="/register/user"
              className="px-6 py-2.5 bg-bluerry text-white font-kanit rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-bluerry hover:bg-gray-100 rounded-lg"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Updated Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-40 pt-20 h-screen">
            <div className="container mx-auto px-4 h-full flex flex-col">
              <nav className="flex flex-col gap-2 py-4 border-t border-gray-100">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="py-3 px-4 text-bluerry font-kanit text-lg hover:bg-gray-50 rounded-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Updated Auth Links with correct paths */}
              <div className="flex flex-col gap-4 mt-auto pb-8">
                <Link
                  to="/login/user" // Match your App.tsx route
                  className="w-full py-3 text-center font-kanit text-bluerry border-2 border-bluerry rounded-lg hover:bg-bluerry/5"
                  onClick={() => setMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/register/user" // Match your App.tsx route
                  className="w-full py-3 text-center bg-bluerry text-white font-kanit rounded-lg hover:bg-blue-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Header;
