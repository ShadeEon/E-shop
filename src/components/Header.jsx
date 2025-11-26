import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky w-full bg-white">
      <nav className="max-w-8xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/src/assets/react.svg"
              alt="react logo"
              className="h-8 w-8 cursor-pointer"
            />
            <span className="text-xl font-semibold cursor-pointer">E-Shop</span>
          </Link>
          <div className="relative w-96 mx-auto">
            <div className="bg-white rounded-full border-2 border-gray-100 shadow-md h-10 flex items-center">
              <button
                type="submit"
                className="absolute left-4 text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="e.g Shoes, Speaker"
                className="w-full h-full pl-12 pr-4 bg-transparent outline-none rounded-full text-gray-700"
              />
            </div>
          </div>
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              to="/cart"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
                />
              </svg>
              Notifications
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
                />
              </svg>
              Orders
            </a>
          </li>
          <li>
            <Link
              to="/cart"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
                />
              </svg>
              Cart
            </Link>
          </li>
          <li>
            <div className="bg-black px-2 py-2 flex items-center rounded-full">
              <img
                src="/src/assets/react.svg"
                alt="react"
                className="h-6 w-6"
              />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header
