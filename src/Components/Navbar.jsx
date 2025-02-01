


import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashMode from "./Mode";

export default function Navbar({ toggleDarkMode, darkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
  
<nav
  className={`p-4 ${darkMode ? "bg-cyan-900" : "bg-cyan-700"} transition-colors duration-300`}
> 


      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          
          <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 text-white text-xl font-bold">CodeSync</div>
          </div>

          
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link
              to="/"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="/signup"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Sign Up
            </Link>


            
            <Link
              to="/login"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Log In
            </Link>

            

            <Link
              to="/Allfunctions"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Functions
            </Link>
            <DashMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          </div>

         
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
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
        </div>
      </div>

      
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="/signup"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Log In
            </Link>
            <div className="block">
              <DashMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}


