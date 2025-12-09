const CartModal = () => {
  return (
    <div
      className="hidden flex-col md:group-hover:flex animate-zoomInDown absolute 
              left-0 md:left-auto md:right-0 mt-2 w-[92vw] md:w-[420px] max-w-[95vw] 
            bg-white shadow-lg border border-gray-200 rounded-md p-4 z-50"
    >
      <div className="absolute -top-2 right-6 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-200"></div>
      <div className="flex items-center justify-between pb-2 border-b border-gray-400">
        <h1 className="text-base font-bold">Recently Added</h1>
        <span className="text-sm text-gray-600">Items: 3</span>
      </div>

      <div className="overflow-y-auto max-h-[42vh] divide-y divide-gray-200 border-b border-gray-200">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <img
              src="/src/assets/react.svg"
              alt="product-image"
              className="w-14 h-14 rounded-md object-contain"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">React Product 1</span>
              <span className="text-sm text-gray-500">Perfumes</span>
              <span className="text-sm text-gray-500">Size: M</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6">
            <span className="inline-block w-24 text-center max-w-full font-semibold text-indigo-600">
              $29.99
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <img
              src="/src/assets/react.svg"
              alt="product-image"
              className="w-14 h-14 rounded-md object-contain"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">React Product 1</span>
              <span className="text-sm text-gray-500">Perfumes</span>
              <span className="text-sm text-gray-500">Size: M</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6">
            <span className="inline-block w-24 text-center max-w-full font-semibold text-indigo-600">
              $29.99
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <img
              src="/src/assets/react.svg"
              alt="product-image"
              className="w-14 h-14 rounded-md object-contain"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">React Product 1</span>
              <span className="text-sm text-gray-500">Perfumes</span>
              <span className="text-sm text-gray-500">Size: M</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6">
            <span className="inline-block w-24 text-center max-w-full font-semibold text-indigo-600">
              $29.99
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <img
              src="/src/assets/react.svg"
              alt="product-image"
              className="w-14 h-14 rounded-md object-contain"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">React Product 1</span>
              <span className="text-sm text-gray-500">Perfumes</span>
              <span className="text-sm text-gray-500">Size: M</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6">
            <span className="inline-block w-24 text-center max-w-full font-semibold text-indigo-600">
              $29.99
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-3 rounded-md text-sm font-medium">
          View Shopping Cart
        </button>
      </div>
    </div>
  );
};

export default CartModal;
