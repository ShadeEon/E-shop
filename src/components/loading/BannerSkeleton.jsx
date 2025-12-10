const BannerSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 md:grid-rows-6 gap-1 h-[180px] sm:h-[180px] md:h-[260px] lg:h-[300px]">

      {/* Big Banner */}
      <div className="col-span-1 sm:col-span-2 md:col-span-6 md:row-span-4 lg:col-span-4 lg:row-span-6">
        <div className="w-full h-full bg-gray-200 animate-pulse rounded-xl"></div>
      </div>

      {/* Right Side Banners */}
      <div className="hidden md:block col-span-3 row-span-2 row-start-5 lg:col-span-2 lg:row-span-3 lg:col-start-5">
        <div className="w-full h-full bg-gray-200 animate-pulse rounded-xl"></div>
      </div>

      <div className="hidden md:block col-span-3 row-span-2 col-start-4 row-start-5 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-4">
        <div className="w-full h-full bg-gray-200 animate-pulse rounded-xl"></div>
      </div>

    </div>
  );
};

export default BannerSkeleton;
