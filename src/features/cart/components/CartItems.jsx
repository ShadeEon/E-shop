import QuantityButton from "../../../components/ui/QuantityButton";

const CartItems = () => {
  return (
    <div className="border-b">
      {/* Company row */}
      <div className="border-b p-4 bg-gray-100">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 border rounded-sm" />
          <img
            src="/src/assets/react.svg"
            alt="company-logo"
            className="w-6 h-6 object-contain ml-2"
          />
          <span className="font-medium">Aeon Corporation</span>
        </div>
      </div>

      {/* Product rows for this company */}
      <div className="space-y-4 p-4 bg-gray-100">
        {/* Product row */}
        <div className="grid grid-cols-12 items-center gap-4">
          {/* Product info */}
          <div className="col-span-6 flex items-center gap-4">
            <input type="checkbox" className="w-4 h-4 border rounded-sm" />
            <img
              src="/src/assets/react.svg"
              alt="product-image"
              className="w-20 h-20 rounded-md object-contain bg-white"
            />
            <div className="flex flex-col justify-center space-y-1">
              <span className="text-base font-semibold">React Product 1</span>
              <span className="text-sm text-gray-500">Category: Perfumes</span>
              <span className="text-sm text-gray-500">Size: M</span>
            </div>
          </div>

          {/* Price */}
          <div className="col-span-2 space-x-2 text-center">
            <span className="line-through">9.99</span>
            <span className="text-lg font-semibold">9.99</span>
          </div>

          {/* Quantity */}
          <QuantityButton />

          {/* Remove */}
          <div className="col-span-2 text-center">
            <button className="cursor-pointer text-red-600 hover:text-red-800 text-sm">
              Remove
            </button>
          </div>
        </div>

        {/* Additional product rows can be added here */}
      </div>
    </div>
  );
};

export default CartItems;
