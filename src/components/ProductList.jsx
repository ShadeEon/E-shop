import React from 'react';
import { useAllProducts } from '../hooks/useAllProducts';
import { fiveStars, getStarClass } from '../utils/ratingUtils'; // 👈 Import utility

const StarIcon = (props) => (
    <svg 
        className={`w-5 h-5 ${props.className}`} 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        fill="currentColor" 
        viewBox="0 0 24 24"
    >
        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
    </svg>
);

function ProductList() {
  const { data: products, isLoading, isError, error } = useAllProducts();

  // --- Loading/Error State (using basic visibility for safety) ---
  if (isLoading) {
    return <div className="p-4 bg-blue-100 rounded-lg text-blue-800">Loading products...</div>;
  }
  if (isError) {
    return <div className="p-4 bg-red-100 text-red-700 rounded-lg">Error loading products: {error.message}</div>;
  }
  if (!products || products.length === 0) {
    return <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg">No products found.</div>;
  }


  // --- Success State ---
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
        {products.map((product) => (
          <div 
            key={product.id} 
            // Mapping your custom classes to standard Tailwind classes
            className="w-full max-w-sm bg-white p-6 border border-gray-200 rounded-xl shadow-md transition-shadow hover:shadow-lg"
          >
            
            <a href={`/products/${product.id}`}>
              <img 
                // Use the first image from the 'images' array or a placeholder
                src={product.images ? product.images[0] : '/path/to/placeholder.png'} 
                alt={product.title} 
                className="rounded-lg mb-6 w-full h-48 object-cover" 
              />
            </a>
            
            <div>
              {/* --- Rating Section --- */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {/* Map over the 5 stars and set color based on the product rating */}
                  {fiveStars.map((index) => (
                    <StarIcon 
                        key={index} 
                        className={getStarClass(index, product.rating)} 
                    />
                  ))}
                </div>
                {/* Display the actual rating value */}
                <span className="bg-green-100 border border-green-300 text-green-800 text-xs font-medium px-1.5 py-0.5 rounded-sm">
                  {product.rating.toFixed(1)} out of 5
                </span>
              </div>
              
              {/* --- Product Title and Description --- */}
              <a href={`/products/${product.id}`}>
                <h5 className="text-xl text-gray-900 font-semibold tracking-tight line-clamp-2 h-14">
                  {product.title}
                </h5>
              </a>
              <p className="text-sm text-gray-500 mt-2 line-clamp-3 h-14">
                {product.description}
              </p>
              
              {/* --- Price and Action Button --- */}
              <div className="flex items-center justify-between mt-6">
                <span className="text-3xl font-extrabold text-gray-900">
                  ${product.price.toFixed(0)}
                </span>
                <button 
                  type="button" 
                  className="inline-flex items-center text-white bg-indigo-600 hover:bg-indigo-700 
                             focus:ring-4 focus:ring-indigo-300 shadow-sm font-medium leading-5 rounded-lg 
                             text-sm px-3 py-2 focus:outline-none"
                >
                  <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/></svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default ProductList