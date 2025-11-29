import { useParams } from "react-router-dom"; // 👈 Needed to get the ID from the URL
import { useProductDetails } from "../hooks/useProductDetails";
import { fiveStars, getStarClass } from "../utils/ratingUtils";
import StarIcon from "../components/StarIcon";
import calculateDiscountedPrice from "../utils/discountUtils";

function ProductInfoPage() {
  // Get the dynamic part of the URL (e.g., '1' from /products/1)
  const { productId } = useParams();

  // Fetch the data using the ID
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useProductDetails(productId);

  // --- Loading/Error State ---
  if (isLoading) {
    return (
      <div className="p-10 text-center text-xl text-blue-600">
        Loading product details...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-10 text-center text-xl text-red-600">
        Error: {error.message}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-10 text-center text-xl text-gray-600">
        Product not found.
      </div>
    );
  }

  const finalPrice = calculateDiscountedPrice(
    product.price,
    product.discountPercentage
  );
  const originalPriceFormatted = product.price.toFixed(2);
  const finalPriceFormatted = finalPrice.toFixed(2);

  const averageRating =
    product.reviews.reduce((sum, review) => sum + review.rating, 0) /
    product.reviews.length;

  // --- Success State (Display Details) ---
  return (
    <div className="container mx-auto p-6 lg:p-10 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <img
            src={
              product.images ? product.images[0] : "/src/assets/react.svg"
            }
            alt={product.title}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
          {/* Optionally, add a thumbnail gallery here using product.images */}
        </div>

        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {product.title}
          </h1>

          <div className="flex flex-wrap items-center space-x-2 text-sm">
            <span className="font-semibold text-gray-500">Category:</span>
            <span className="text-indigo-600 capitalize">
              {product.category}
            </span>
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-4 border-b pb-4">
            <div className="flex items-center space-x-1">
              {fiveStars.map((index) => (
                <StarIcon
                  key={index}
                  className={getStarClass(index, product.rating)}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-indigo-600">
              {product.rating.toFixed(2)}
            </span>
            <span className="text-gray-500">
              ({product.reviews?.length || 0} Reviews)
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-3">
              <span className="text-5xl font-extrabold text-green-600">
                ${finalPriceFormatted}
              </span>
              <span className="text-lg font-bold text-red-500 bg-red-100 px-3 py-1 rounded-full">
                {product.discountPercentage.toFixed(1)}% OFF
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2">
            <span className="text-xl font-semibold">Last Price:</span>
            <span className="text-xl text-gray-400 line-through">
              ${originalPriceFormatted}
            </span>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed pt-1">
            {product.description}
          </p>

          <div className="flex items-center gap-4 w-full">
            <div className="flex items-center">
              <label className="mr-2 text-sm font-medium text-gray-700">
                Quantity:
              </label>

              <select
                className="w-48 h-10 border border-gray-300 rounded-lg px-3 py-2 
                bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                 transition cursor-pointer shadow-sm"
                defaultValue={1}
              >
                {[...Array(Math.min(product.stock, 10)).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <span
              className={`ml-auto text-base font-semibold ${
                product.stock > 10 ? "text-green-600" : "text-orange-500"
              }`}
            >
              In Stock: {product.stock} units
            </span>
          </div>

          <div className="flex space-x-4 pt-4">
            <button
              className="flex-1 py-4 text-white bg-indigo-600 hover:bg-indigo-700 
              focus:ring-4 focus:ring-indigo-300 font-bold rounded-lg text-xl"
            >
              Add to Cart
            </button>
            <button
              className="flex-1 py-4 text-indigo-600 bg-white border-2 border-indigo-600 
              hover:bg-indigo-50 focus:ring-4 focus:ring-indigo-300 font-bold rounded-lg text-xl"
            >
              Buy Now
            </button>
          </div>

          <div className="pt-6 text-sm text-gray-600 space-y-2">
            <p>
              <strong>Shipping:</strong> {product.shippingInformation}
            </p>
            <p>
              <strong>Warranty:</strong> {product.warrantyInformation}
            </p>
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-4 border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>

        <div className="border rounded-lg p-6 flex flex-col sm:flex-row sm:items-center gap-6">
          <span className="text-5xl font-bold text-gray-800 mr-2">
            {averageRating.toFixed(2)}
          </span>
          <span className="text-xl text-gray-500">out of 5 stars</span>

          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-1 border rounded-md bg-red-500 text-white font-semibold">
              All
            </button>
            {[
              ["5 Star (1)", 5],
              ["4 Star (0)", 4],
              ["3 Star (0)", 3],
              ["2 Star (0)", 2],
              ["1 Star (0)", 1],
              ["With Comments (0)", "comments"],
              ["With Media (0)", "media"],
            ].map(([label, filter]) => (
              <button key={filter} className="px-4 py-1 border rounded-md">
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {product.reviews.map((review, index) => (
            <div
              key={index}
              className="p-4 border-b border-b-gray-300"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <img
                    src="/src/assets/react.svg"
                    className="w-10 h-10 rounded-full object-contain"
                  />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {review.reviewerName}
                  </h4>
                </div>

                <div className="flex flext-row items-center gap-2">
                  {fiveStars.map((starIndex) => (
                    <StarIcon
                      key={starIndex}
                      className={getStarClass(starIndex, review.rating)}
                    />
                  ))}

                  <span className="text-sm font-semibold text-gray-700">
                    {review.rating}.5
                  </span>
                </div>
              </div>
              <p className="italic text-gray-700">"{review.comment}"</p>
              <p className="text-xs text-gray-500 mt-2">
                Reviewed on: {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>

        {product.reviews.length === 0 && (
          <p className="text-gray-500">Be the first to leave a review!</p>
        )}
      </div>
    </div>
  );
}

export default ProductInfoPage;
