import React from 'react';

const MainBanner = () => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-6 md:grid-rows-6 lg:grid-cols-6 lg:grid-rows-6 h-auto md:h-[260px] sm:h-200px">
      {/* Main Banner */}
      <div className="col-span-1 sm:col-span-2 md:col-span-6 md:row-span-4 md:row-start-1 lg:col-span-4 lg:row-span-6 lg:row-start-1">
        <img
          src="/src/assets/react.svg"
          alt="Main Banner"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Left Bottom Banner */}
      <div className="hidden col-span-1 sm:col-span-2 md:col-span-3 md:row-span-2 md:row-start-5 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-auto">
        <img
          src="/src/assets/react.svg"
          alt="Banner 2"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Right Bottom Banner */}
      <div className="hidden col-span-1 sm:col-span-2 md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-5 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-4">
        <img
          src="/src/assets/react.svg"
          alt="Banner 3"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default MainBanner;
