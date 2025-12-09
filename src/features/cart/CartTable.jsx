import CartItems from "./CartItems";

const CartTable = () => {
  return (
    <div className="w-full bg-slate-50 rounded-xl">
      {/* Header row */}
      <div className="grid grid-cols-12 font-semibold uppercase text-xs border-b p-4 text-gray-600">
        <div className="col-span-6 flex items-center gap-2">
          <input
            id="checkbox-all"
            type="checkbox"
            className="w-4 h-4 border rounded-sm"
          />
          <label htmlFor="checkbox-all" className="select-none tracking-wide">
            Product
          </label>
        </div>

        <div className="col-span-2 text-center">Unit Price</div>
        <div className="col-span-2 text-center">Quantity</div>
        <div className="col-span-2 text-center">Action</div>
      </div>

       {/* Company section */}
       <CartItems />
    </div>
  );
};

export default CartTable;