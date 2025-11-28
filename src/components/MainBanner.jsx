const MainBanner = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 md:grid-cols-6 md:grid-rows-6 gap-1 h-[180px] sm:h-[180px] md:h-[260px] lg:h-[300px]">
      
      <div className="col-span-1 sm:col-span-2 md:col-span-6 md:row-span-4 md:row-start-1 lg:col-span-4 lg:row-span-6 lg:row-start-1">
        <img
          src="/src/assets/react.svg"
          alt="Main Banner"
          className="w-full h-[180px] sm:h-[180px] md:h-full lg:h-full object-contain rounded-xl"
        />
      </div>

      <div className="hidden md:block col-span-3 row-span-2 row-start-5 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-auto">
        <img
          src="/src/assets/react.svg"
          alt="Banner 2"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      <div className="hidden md:block col-span-3 row-span-2 col-start-4 row-start-5 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-4">
        <img
          src="/src/assets/react.svg"
          alt="Banner 3"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
    </div>
  );
};

export default MainBanner;
