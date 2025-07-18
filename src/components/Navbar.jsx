import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import resailogo from "../assets/resailogo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(null);
  const location = useLocation();

  // 🧹 Close menus when navigating
  useEffect(() => {
    setIsMoreOpen(null);
    setIsMenuOpen(false);
  }, [location]);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/research-guide", label: "Research Guide" },
    { path: "/carrer", label: "Careers" },
    { path: "/page2", label: "Innovation Hub" },
  ];

  const moreMenu = [
    { path: "/events", label: "Events & Webinars" },
    { path: "/community", label: "Community & Forums" },
    { path: "/membership", label: "Membership & Subscription" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/news", label: "News" },
    { path: "/resources", label: "Resources" },
  ];

  const contactMenu = [
    { path: "/login", label: "🔐 Login" },
    { path: "/query", label: "📬 Send Query" },
  ];

  return (
    <nav
      className="bg-gradient-to-r from-[#f5e9ff] via-[#ddbfff] to-[#d8aaf7] border-b-4 border-[#9900cc] sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 pl-2 pr-4">
        <div className="flex items-center gap-3">
          <img src={resailogo} alt="RESA Logo" className="h-24 w-auto" />
          <h1 className="hidden sm:block italic font-medium text-lg text-[#5b2b9d]">
            Research Based Experiential Learning
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center ml-10">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                className="font-bold text-gray-900 hover:text-[#6b21a8] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Discover Dropdown */}
          <li className="relative">
            <button
              onClick={() =>
                setIsMoreOpen(isMoreOpen === "discover" ? null : "discover")
              }
              className="font-bold text-gray-900 flex items-center gap-1 hover:text-[#6b21a8]"
            >
              Discover ▾
            </button>
            {isMoreOpen === "discover" && (
              <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded shadow-lg w-52 mt-1 z-50">
                {moreMenu.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="block px-4 py-2 hover:bg-purple-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Contact Us Dropdown */}
          <li className="relative">
            <button
              onClick={() =>
                setIsMoreOpen(isMoreOpen === "contact" ? null : "contact")
              }
              className="font-bold text-gray-900 flex items-center gap-1 hover:text-[#6b21a8]"
            >
              Contact Us ▾
            </button>
            {isMoreOpen === "contact" && (
              <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded shadow-lg w-44 mt-1 z-50">
                {contactMenu.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="block px-4 py-2 hover:bg-purple-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-[#6b21a8] focus:outline-none focus:ring-2 focus:ring-[#6b21a8] rounded"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-300 shadow-md px-4 pb-4 pt-2">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className="text-lg font-bold text-gray-900 hover:text-[#6b21a8] block"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Discover Mobile */}
            <li>
              <button
                onClick={() =>
                  setIsMoreOpen(isMoreOpen === "discover" ? null : "discover")
                }
                className="text-lg font-bold text-gray-900 flex items-center gap-1 hover:text-[#6b21a8]"
              >
                Discover ▾
              </button>
              {isMoreOpen === "discover" && (
                <ul className="mt-2 border border-gray-300 rounded p-3 bg-white shadow-md">
                  {moreMenu.map((item, idx) => (
                    <li key={idx} className="py-1">
                      <Link
                        to={item.path}
                        className="block hover:text-[#6b21a8]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Contact Us Mobile */}
            <li>
              <button
                onClick={() =>
                  setIsMoreOpen(isMoreOpen === "contact" ? null : "contact")
                }
                className="text-lg font-bold text-gray-900 flex items-center gap-1 hover:text-[#6b21a8]"
              >
                Contact Us ▾
              </button>
              {isMoreOpen === "contact" && (
                <ul className="mt-2 border border-gray-300 rounded p-3 bg-white shadow-md">
                  {contactMenu.map((item, idx) => (
                    <li key={idx} className="py-1">
                      <Link
                        to={item.path}
                        className="block hover:text-[#6b21a8]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
