import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#fffffe] shadow">
      <nav className="max-w-8xl mx-auto px-4 py-4 flex flex-col  md:items-center md:justify-between">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/src/assets/react.svg"
              alt="react logo"
              className="h-8 w-8 cursor-pointer"
            />
            <span className="text-xl font-bold cursor-pointer text-[#6246ea]">E-Shop</span>
          </Link>

          <ul className="hidden lg:flex items-center space-x-6">
            <li>
              <Link
                to="/cart"
                className="flex items-center gap-1"
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
                <span className="text-[#2b2c34] hover:text-[#6246ea] text-sm">Orders</span>
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="flex items-center gap-1"
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
                <span className="text-[#2b2c34] hover:text-[#6246ea] text-sm">Notifications</span>
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="flex items-center gap-1"
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
                <span className="text-[#2b2c34] hover:text-[#6246ea] text-sm">Cart</span>
              </Link>
            </li>
            <li className="relative group">
              <div className="bg-black px-2 py-2 flex items-center rounded-full cursor-pointer">
                <img
                  src="/src/assets/react.svg"
                  alt="react"
                  className="h-6 w-6"
                />
              </div>
            </li>
          </ul>

          <div className="flex items-center space-x-4 lg:hidden">
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
            </Link>

            <Link
              to="/notifications"
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
            </Link>

            <div className="relative group">
              <div className="bg-black flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:scale-105 transition-transform">
                <img
                  src="/src/assets/react.svg"
                  alt="profile"
                  className="h-6 w-6"
                />
              </div>

              <div
                className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg p-3 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transform scale-95 group-hover:scale-100 transition-all duration-200 
                lg:hidden z-50"
              >
                <nav className="flex flex-col space-y-2 text-gray-700">
                  <Link
                    to="/notifications"
                    className="hover:text-black hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    Notifications
                  </Link>
                  <Link
                    to="/orders"
                    className="hover:text-black hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    Orders
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <form className="w-full max-w-4xl mx-auto mt-4 md:mt-2">
          <div className="flex shadow-xs rounded-lg overflow-hidden">
            <button
              type="button"
              className="inline-flex items-center shrink-0 z-10 text-body bg-[#6246ea] text-[#fffffe] border border-gray-300 hover:bg-[#e45858] hover:text-[#fffffe] font-medium rounded-l-lg text-sm px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <svg
                className="w-4 h-4 mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
                />
              </svg>
              All categories
              <svg
                className="w-4 h-4 ml-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            <input
              type="search"
              id="search-dropdown"
              className="px-3 py-2.5 bg-gray-200 border-t border-b border-gray-300 text-gray-700 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full placeholder-gray-500"
              placeholder="Search for products"
              required
            />

            <button
              type="submit"
              className="inline-flex items-center bg-[#6246ea] text-[#fffffe] hover:bg-[#e45858] hover:text-[#fffffe] font-medium rounded-r-lg text-sm px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <svg
                className="w-4 h-4 mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
              Search
            </button>
          </div>
        </form>
      </nav>
    </header>
  );
};

export default Header;
