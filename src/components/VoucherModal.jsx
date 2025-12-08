const VoucherModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold mb-4">Enter Voucher Code</h2>

        <input
          type="text"
          className="w-full border p-2 rounded mb-4"
          placeholder="Type your voucher..."
        />

        <button
          className="bg-indigo-600 text-white w-full py-2 rounded mt-2"
          onClick={onClose}
        >
          Apply Voucher
        </button>
      </div>
    </div>
  );
};

export default VoucherModal;