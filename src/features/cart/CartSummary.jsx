import { useState } from "react";
import VoucherModal from "./voucher/VoucherModal";

const CartSummary = () => {
  const [showVoucher, setShowVoucher] = useState(false);
  return (
    <div className="w-96 h-fit border rounded-lg p-4 shadow-md bg-white flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Order Summary</h2>

      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>$99.99</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Shipping</span>
        <span>$22</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Product Discount</span>
        <span>$22</span>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span>Voucher</span>
        <button className="text-blue-700" onClick={() => setShowVoucher(true)}>
          Select or enter code
        </button>
      </div>

      <hr />

      <div className="flex justify-between text-sm">
        <span>Saved</span>
        <span className="text-red-700">-$22</span>
      </div>

      <div className="flex justify-between text-base font-bold">
        <span>Total (1 item)</span>
        <span>$22</span>
      </div>

      <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium">
        Proceed to Checkout
      </button>
      {showVoucher && <VoucherModal onClose={() => setShowVoucher(false)} />}
    </div>
  );
};

export default CartSummary;