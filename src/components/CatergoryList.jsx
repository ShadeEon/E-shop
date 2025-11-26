import React, { useRef, useState, useEffect } from "react";
import { useProductCategories } from "../hooks/useProductCategories";
import placeholderIcon from "../assets/react.svg";

function CategoryList() {
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useProductCategories();

  const scrollRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkOverflow = () => {
      setShowButtons(el.scrollWidth > el.clientWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

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
    <div className="relative flex flex-col p-4 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>

      {showButtons && (
        <button
          onClick={() => scroll("prev")}
          className="absolute top-6 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-6 h-6 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
        </span>
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex flex-row gap-4 overflow-hidden scroll-smooth"
      >
        {Array.isArray(categories) &&
          categories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="flex flex-col items-center rounded-xl shadow-md 
              p-4 w-28 min-w-28 bg-gray-50 border border-gray-200 
              hover:bg-gray-100 hover:scale-105 transition-transform"
            >
              <img
                src={placeholderIcon}
                alt={category.name}
                className="w-18 h-16 object-cover mb-2"
              />
              <span className="text-sm pt-1 font-medium capitalize text-center break-words leading-tight line-clamp-2">
                {category.name}
              </span>
            </a>
          ))}
      </div>

      {showButtons && (
        <button
          onClick={() => scroll("next")}
          className="absolute top-6 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-6 h-6 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
        </span>
        </button>
      )}
    </div>
  );
}

export default CategoryList;
