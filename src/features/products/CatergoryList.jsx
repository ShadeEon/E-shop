import React, { useRef, useState, useLayoutEffect } from "react";
import { useProductCategories } from "../../hooks/useProductCategories";
import placeholderIcon from "../../assets/react.svg";

function CategoryList() {
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useProductCategories();

  const scrollRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);
  
  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkOverflow = () => {
      setShowButtons(el.scrollWidth > el.clientWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [categories]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const amount = el.clientWidth * 0.8; // scroll 80% of width each time

    el.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-4">Categories</h1>
        <p>Loading categories...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col p-4 text-red-600">
        <h1 className="text-2xl font-bold mb-4">Categories</h1>
        <p>Error fetching categories: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col p-4 bg-[#fffffe] rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>

      {showButtons && (
        <button
          onClick={() => scroll("prev")}
          className="absolute top-36 left-2 z-30 flex items-center justify-center transform 
          -translate-y-1/2 cursor-pointer"
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
      )}

      <div
        ref={scrollRef}
        className="flex flex-row py-4 gap-4 overflow-hidden scroll-smooth"
      >
        {Array.isArray(categories) &&
          categories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="flex flex-col items-center rounded-xl shadow-md p-2 
              bg-[#d1d1e9] border border-gray-200 hover:bg-[#e45858] hover:text-[#fffffe] hover:scale-105 
              transition-transform flex-[0_0_calc(50%-1rem)] sm:flex-[0_0_calc(33.33%-1rem)] 
              md:flex-[0_0_calc(20%-1rem)] lg:flex-[0_0_calc(10%-0.9rem)]"
            >
              <img
                src={placeholderIcon}
                alt={category.name}
                className="w-full h-20 object-contain mb-2 rounded"
              />
              <span className="text-xs text-[#2b2c34] font-medium capitalize 
              text-center break-words leading-tight line-clamp-2">
                {category.name}
              </span>
            </a>
          ))}
      </div>

      {showButtons && (
        <button
          onClick={() => scroll("next")}
          className="absolute top-36 right-2 z-30 flex items-center justify-center transform -translate-y-1/2 cursor-pointer"
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
      )}
    </div>
  );
}

export default CategoryList;
