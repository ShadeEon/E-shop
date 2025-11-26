export const fiveStars = [0, 1, 2, 3, 4];

/**
 * Returns a Tailwind class for a star based on the product rating.
 * @param {number} starIndex - The index of the current star (0-4).
 * @param {number} rating - The product's rating (e.g., 4.94).
 * @returns {string} Tailwind class for star color.
 */
export const getStarClass = (starIndex, rating) => {
    // Check if the star index is less than the rounded-down rating value
    if (starIndex < Math.floor(rating)) {
        return 'text-yellow-400'; // Full star color
    }
    // Note: To handle half stars, you'd need more complex logic/SVG.
    // We'll stick to full star coloring for simplicity here.
    return 'text-gray-300'; // Empty star color
}