import { Link } from "react-router-dom";
import CartModal from "../../features/cart/CartModal";

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
            <span className="text-xl font-bold cursor-pointer text-[#6246ea]">
              E-Shop
            </span>
          </Link>

          <form className="flex flex-[2] w-full px-4">
            <div className="w-full max-w-[600px] min-w-[200px]">
              <div className="relative">
                <input
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Search for products..."
                />
                <button
                  className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </form>

          <ul className="flex items-center space-x-4">
            <li className="p-2">
              <Link to="/orders" className="flex items-center gap-1">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.02734 17.8999C9.02734 19.2806 7.90806 20.3999 6.52734 20.3999C5.14663 20.3999 4.02734 19.2806 4.02734 17.8999C4.02734 16.5192 5.14663 15.3999 6.52734 15.3999C7.90806 15.3999 9.02734 16.5192 9.02734 17.8999Z"
                    fill="black"
                    className="my-path"
                  ></path>
                  <path
                    d="M18.0273 17.8999C18.0273 19.2806 16.9081 20.3999 15.5273 20.3999C14.1466 20.3999 13.0273 19.2806 13.0273 17.8999C13.0273 16.5192 14.1466 15.3999 15.5273 15.3999C16.9081 15.3999 18.0273 16.5192 18.0273 17.8999Z"
                    fill="black"
                    className="my-path"
                  ></path>
                  <path
                    d="M13.1797 3.88717V14.537C12.5813 14.9552 12.0997 15.5291 11.7937 16.1999L10.2579 16.1999C9.61186 14.7839 8.18375 13.7998 6.52578 13.7998C5.15181 13.7998 3.93569 14.4757 3.19173 15.513C3.14226 15.4713 3.09389 15.427 3.04667 15.3798C2.58036 14.9135 2.39208 14.3343 2.30693 13.701C2.22651 13.1029 2.22654 12.3507 2.22656 11.4548V8.34484C2.22654 7.44893 2.22651 6.69683 2.30693 6.09872C2.39208 5.46538 2.58036 4.88627 3.04667 4.41996C3.51298 3.95365 4.09209 3.76537 4.72543 3.68022C5.32354 3.5998 6.07574 3.59983 6.97165 3.59985H10.0816C10.9775 3.59983 11.7296 3.5998 12.3277 3.68022C12.6257 3.72029 12.9118 3.7832 13.1797 3.88717Z"
                    fill="black"
                    className="my-path"
                  ></path>
                  <path
                    d="M8.35888 16.1999L6.9717 16.1999C6.09553 16.1999 5.35694 16.1999 4.76536 16.1247C5.21718 15.6766 5.83915 15.3998 6.52578 15.3998C7.25001 15.3998 7.90231 15.7078 8.35888 16.1999Z"
                    fill="black"
                    className="my-path"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.7797 13.8675C15.0216 13.823 15.271 13.7998 15.5258 13.7998C17.1384 13.7998 18.5336 14.7308 19.2031 16.0847C19.2434 16.0802 19.2829 16.0753 19.3218 16.07C19.9496 15.9856 20.5164 15.8 20.9719 15.3445C21.4274 14.889 21.613 14.3222 21.6974 13.6944C21.7774 13.0997 21.7774 12.3506 21.7774 11.4522L21.7773 10.3004L21.7775 10.234C21.7781 9.96239 21.7788 9.66978 21.6826 9.3894C21.5864 9.10901 21.4062 8.87848 21.2389 8.66445L21.1981 8.61211L19.6622 6.63744L19.6155 6.5771C19.427 6.33344 19.2244 6.07153 18.9414 5.90099C18.854 5.84834 18.7622 5.80344 18.667 5.76679C18.3586 5.64806 18.0275 5.64897 17.7195 5.6498L17.6431 5.64994L17.6017 5.64994C16.8795 5.64992 16.277 5.64991 15.7911 5.70305C15.4326 5.74226 15.0936 5.81403 14.7797 5.95942V13.8675ZM17.5273 9.59991C17.9692 9.59991 18.3273 9.95808 18.3273 10.3999V12.3999C18.3273 12.8417 17.9692 13.1999 17.5273 13.1999C17.0855 13.1999 16.7273 12.8417 16.7273 12.3999V10.3999C16.7273 9.95808 17.0855 9.59991 17.5273 9.59991Z"
                    fill="black"
                    className="my-path"
                  ></path>
                  <path
                    d="M14.7797 16.1999H14.8266V16.1499L17.3112 16.1499C16.8575 15.687 16.2252 15.3998 15.5258 15.3998C15.2659 15.3998 15.0153 15.4395 14.7797 15.513V16.1999Z"
                    fill="black"
                    className="my-path"
                  ></path>
                </svg>
                <span className="hidden sm:flex text-[#2b2c34] hover:text-[#6246ea] text-sm">
                  Orders
                </span>
              </Link>
            </li>

            <li className="relative group p-2">
              <Link to="/cart" className="flex items-center gap-1">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.7898 2.86467C3.71515 2.42919 3.30161 2.13669 2.86613 2.21134C2.43065 2.28599 2.13815 2.69953 2.2128 3.13501L2.727 6.13502L4.18502 13.9301C4.32338 14.67 4.44054 15.2965 4.59805 15.7919C4.76565 16.319 5.00524 16.7889 5.445 17.1541C5.88477 17.5192 6.39076 17.6683 6.93969 17.7361C7.45556 17.7999 8.09288 17.7999 8.8456 17.7998H15.6717C16.4245 17.7999 17.0619 17.7999 17.5778 17.7361C18.1267 17.6683 18.6327 17.5192 19.0725 17.154C19.5123 16.7888 19.7519 16.3189 19.9194 15.7917C20.0769 15.2963 20.1941 14.6698 20.3324 13.9298L20.9134 10.8223C21.109 9.77641 21.2716 8.90725 21.3016 8.21136C21.3332 7.48019 21.228 6.79061 20.7469 6.21112C20.2657 5.63163 19.6072 5.40151 18.8827 5.29815C18.1931 5.19977 17.3088 5.1998 16.2448 5.19983L4.19011 5.19984L3.7898 2.86467Z"
                    fill="black"
                    className="my-path"
                  ></path>
                  <path
                    d="M8.43008 19.5C8.43008 19.0581 8.07191 18.7 7.63008 18.7C7.18825 18.7 6.83008 19.0581 6.83008 19.5C6.83008 20.7913 7.9004 21.8 9.17294 21.8C10.4455 21.8 11.5158 20.7913 11.5158 19.5C11.5158 19.0581 11.1576 18.7 10.7158 18.7C10.274 18.7 9.91579 19.0581 9.91579 19.5C9.91579 19.8655 9.6046 20.2 9.17294 20.2C8.74127 20.2 8.43008 19.8655 8.43008 19.5Z"
                    fill="black"
                    className="my-path"
                  ></path>
                  <path
                    d="M14.602 19.5C14.602 19.0581 14.2438 18.7 13.802 18.7C13.3601 18.7 13.002 19.0581 13.002 19.5C13.002 20.7913 14.0723 21.8 15.3448 21.8C16.6173 21.8 17.6877 20.7913 17.6877 19.5C17.6877 19.0581 17.3295 18.7 16.8877 18.7C16.4458 18.7 16.0877 19.0581 16.0877 19.5C16.0877 19.8655 15.7765 20.2 15.3448 20.2C14.9131 20.2 14.602 19.8655 14.602 19.5Z"
                    fill="black"
                    className="my-path"
                  ></path>
                </svg>
                <span className="hidden sm:flex text-[#2b2c34] hover:text-[#6246ea] text-sm">
                  Cart
                </span>
              </Link>

              <CartModal />
            </li>

            <li className="relative group">
              <div
                className="text-center flex justify-center rounded-full cursor-pointer 
              relative w-10 h-10 bg-gray-100 border-2 border-solid border-gray-500 
              items-center rounded-full'>"
              >
                <button
                  type="button"
                  className="relative inline-flex items-center p-2.5 text-sm font-medium text-center text-white rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.9998 7C15.9998 9.20914 14.2089 11 11.9998 11C9.79067 11 7.99981 9.20914 7.99981 7C7.99981 4.79086 9.79067 3 11.9998 3C14.2089 3 15.9998 4.79086 15.9998 7Z"
                      stroke="#4B5563"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M11.9998 14C9.15153 14 6.65091 15.3024 5.23341 17.2638C4.48341 18.3016 4.10841 18.8204 4.6654 19.9102C5.2224 21 6.1482 21 7.99981 21H15.9998C17.8514 21 18.7772 21 19.3342 19.9102C19.8912 18.8204 19.5162 18.3016 18.7662 17.2638C17.3487 15.3024 14.8481 14 11.9998 14Z"
                      stroke="#4B5563"
                      strokeWidth="1.6"
                    />
                  </svg>
                  <span className="sr-only">User Profile</span>

                  <div className="absolute inline-flex items-center justify-center py-1 px-1 text-xs font-normal text-white bg-gray-300 border-2 border-white rounded-full -bottom-1 -right-1.5">
                    <svg
                      className="w-2 h-2 stroke-gray-900"
                      viewBox="0 0 12 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>

              <div
                className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg p-3
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transform scale-95 group-hover:scale-100 transition-all duration-200
                2xl:hidden z-50"
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
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
