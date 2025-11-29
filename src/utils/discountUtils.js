const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
};

export default calculateDiscountedPrice;