import StarIcon from "../../components/ui/StarIcon";
import { fiveStars, getStarClass } from "../../utils/ratingUtils";

const ProductReview = ({ product }) => {
  if (!product.reviews || product.reviews.length === 0) {
    return (
      <div className="mt-16 pt-4 border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
        <p className="text-gray-500">Be the first to leave a review!</p>
      </div>
    );
  }
  
  const averageRating =
    product.reviews.reduce((sum, review) => sum + review.rating, 0) /
    product.reviews.length;

  return (
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
          <div key={index} className="p-4 border-b border-b-gray-300">
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
    </div>
  );
};

export default ProductReview;
