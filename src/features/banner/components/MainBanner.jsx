import { useEffect, useState } from "react";
import { fetchBanners } from "../services/bannerService";
import { useAutoSlider } from "../hooks/useAutoSlider";
import BannerSkeleton from "../../../components/loading/BannerSkeleton"

const MainBanner = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetchBanners();
      setBanners(data);
      setTimeout(() => setLoading(false), 1200);
    };
    load();
  }, []);

  const bigBannerList = banners.slice(0, 5); // 5 images autoplay
  const { index, next, prev, goTo } = useAutoSlider(bigBannerList.length, 3500);

  // Show loading placeholder if not enough banners
  if (loading || banners.length < 3) {
    return <BannerSkeleton />;
  }

  const sideBanner1 = banners[5]?.download_url;
  const sideBanner2 = banners[6]?.download_url;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 md:grid-cols-6 md:grid-rows-6 gap-1 h-[180px] sm:h-[180px] md:h-[260px] lg:h-[300px]">

      <div className="relative col-span-1 sm:col-span-2 md:col-span-6 md:row-span-4 lg:col-span-4 lg:row-span-6">
        {bigBannerList.map((banner, i) => (
          <img
            key={banner.id}
            src={`https://picsum.photos/id/${banner.id}/1200/400`}
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-700 ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          onClick={prev}
          className="absolute top-1/2 left-1 -translate-y-1/2 text-white px-2 py-2 rounded-full"
        >
          <span
            className="inline-flex items-center justify-center w-8 h-8 
          rounded-full bg-black/30 group-hover:bg-black/50"
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </span>
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 right-1 -translate-y-1/2 text-white px-2 py-2 rounded-full"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/30 group-hover:bg-black/50">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {bigBannerList.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === i ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => goTo(i)}
            ></button>
          ))}
        </div>
      </div>

      {sideBanner1 && (
        <div className="hidden md:block col-span-3 row-span-2 row-start-5 lg:col-span-2 lg:row-span-3 lg:col-start-5">
          <img
            src={sideBanner1}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}
      {sideBanner2 && (
        <div className="hidden md:block col-span-3 row-span-2 col-start-4 row-start-5 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-4">
          <img
            src={sideBanner2}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  );

  function nextTo(i) {
    const { setIndex } = useAutoSlider(bigBannerList.length, 3500);
    setIndex(i);
  }
};

export default MainBanner;