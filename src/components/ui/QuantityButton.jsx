import { useState } from "react";

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="col-span-2 flex justify-center items-center">
      {/* Minus button */}
      <button
        className={`p-1 ${
          quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={decrement}
        disabled={quantity === 1}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M8 12h8"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Quantity input */}
      <input
        value={quantity}
        type="number"
        readOnly
        className="w-14 text-center border rounded-md py-1"
      />

      {/* Plus button */}
      <button className="p-1" onClick={increment}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M12 8v8M8 12h8"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default QuantityButton;
