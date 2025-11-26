import React from "react";

const NavDeals = () => {
  return (
    <nav className="flex flex-row max-w-8xl mx-auto px-4 py-2 bg-slate-600 gap-14">
      <div className="flex items-center gap-2">
        <button class="relative group">
          <div class="relative flex overflow-hidden items-center justify-center w-[32px] h-[32px] transform transition-all  hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
              <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
              <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>
              <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
              </div>
            </div>
          </div>
        </button>

        <span className="text-white text-lg font-bold">All</span>
      </div>

      <div className="flex flex-row items-center">
        <ul className="flex flex-row gap-10">
          <li>
            <a href="#" className="flex items-center font-bold text-white hover:text-blue-400">
              Special Offer
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center font-bold text-white hover:text-blue-400">
              Deals
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center font-bold text-white hover:text-blue-400">
              Sell
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavDeals;
