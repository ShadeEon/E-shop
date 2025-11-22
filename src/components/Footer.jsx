import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-full mx-auto px-8 py-4 bg-slate-300 justify-between rounded-3xl">
        <div className="flex flex-col md:flex-row max-w-8xl mx-auto gap-8 md:gap-16">
          
          <div className="flex-1 flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/src/assets/react.svg"
                alt="react logo"
                className="h-8 w-8"
              />
              <span className="max-w-xl text-xl font-semibold">E-Shop</span>
            </div>
            <div>
              <p className="mt-2 max-w-2xl text-sm">
                To bring you even more entertainment, dont miss out on Shopee
                Prizes! Play your favorite games on the Shopee app like Shopee
                Bubble and Shopee Candy to win mind-blowing prizes.
              </p>
            </div>
            <div className="flex space-x-2">
              <img
                src="/src/assets/react.svg"
                alt="react logo"
                className="h-8 w-8"
              />
              <img
                src="/src/assets/react.svg"
                alt="react logo"
                className="h-8 w-8"
              />
              <img
                src="/src/assets/react.svg"
                alt="react logo"
                className="h-8 w-8"
              />
            </div>
          </div>
          
          <div className="flex-1 flex flex-row justify-center gap-16">
            <div className="flex flex-col">
              <h1 className="font-bold text-black text-lg">Customer Service</h1>
              <ul className="my-2 text-base space-y-2">
                <li>
                  <a href="#" className="text-zinc-500 hover:text-black hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-500 hover:text-black hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-500 hover:text-black hover:underline">
                    Contacts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-500 hover:text-black hover:underline">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-black text-lg">About E-Shop</h1>
              <ul className="my-2 text-base space-y-2">
                <li>
                  <a href="#" className="text-zinc-500 hover:text-black hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-500 hover:text-black hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-500 hover:text-black hover:underline">
                    Contacts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-500 hover:text-black hover:underline">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-zinc-400" />
        <div className="flex justify-between text-sm">
          <p className="text-zinc-500">
            &copy; 2025 E-Commerce Shop, Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="outline-none text-zinc-500 hover:text-black hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="outline-none text-zinc-500 hover:text-black hover:underline">
              Terms of Service
            </a>
            <a href="#" className="outline-none text-zinc-500 hover:text-black hover:underline">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
