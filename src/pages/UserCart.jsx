import { useState } from "react";
import VoucherModal from "../components/VoucherModal.jsx";

const UserCart = () => {
  const [showVoucher, setShowVoucher] = useState(false);
  return (
    <section className="flex flex-row p-4 gap-2 items-start">
      <div className="w-full p-4 bg-slate-50 rounded-lg">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="uppercase tracking-wider border-b-2 dark:border-neutral-600">
            <tr>
              <th scope="col" className="px-2 py-4">
                <div class="flex items-center">
                  <input
                    id="bordered-checkbox-1"
                    type="checkbox"
                    value=""
                    name="bordered-checkbox"
                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                  />
                  <label
                    for="bordered-checkbox-1"
                    class="select-none w-full ms-2 text-heading"
                  >
                    Product
                  </label>
                </div>
              </th>
              <th scope="col" className="text-center px-2 py-4">
                Unit Price
              </th>
              <th scope="col" className="text-center px-2 py-4">
                Quantity
              </th>
              <th scope="col" className="text-center px-2 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-2 py-4">
                <div class="flex items-center gap-3">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                  />
                  <span>Company Name juggernut</span>
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-6">
                <div className="flex items-start gap-3">
                  <div class="flex items-center gap-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                    />
                    <img
                      src="/src/assets/react.svg"
                      alt="product-image"
                      className="w-14 h-14 rounded-md object-contain"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm font-medium">React Product 1</span>
                    <span className="text-sm text-gray-500">Perfumes</span>
                    <span className="text-sm text-gray-500">Size: M</span>
                  </div>
                </div>
              </td>

              <td className="text-center px-2 py-4">
                <span className="text-sm font-medium">$99.99</span>
              </td>

              <td className="px-2 py-4">
                <div className="flex flex-row justify-center items-center">
                  <button>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.9404 2.19971H13.06C14.8949 2.19969 16.3533 2.19968 17.4959 2.35329C18.6738 2.51166 19.6351 2.84639 20.3943 3.6056C21.1535 4.3648 21.4882 5.32606 21.6466 6.50402C21.8002 7.64658 21.8002 9.10502 21.8002 10.9398V13.0596C21.8002 14.8944 21.8002 16.3528 21.6466 17.4954C21.4882 18.6734 21.1535 19.6346 20.3943 20.3938C19.6351 21.153 18.6738 21.4878 17.4959 21.6461C16.3533 21.7997 14.8949 21.7997 13.0601 21.7997H10.9403C9.10551 21.7997 7.64707 21.7997 6.50451 21.6461C5.32654 21.4878 4.36529 21.153 3.60608 20.3938C2.84688 19.6346 2.51215 18.6734 2.35378 17.4954C2.20016 16.3528 2.20018 14.8944 2.2002 13.0596L2.2002 10.9399C2.20018 9.10502 2.20016 7.64658 2.35378 6.50402C2.51215 5.32606 2.84688 4.3648 3.60608 3.6056C4.36529 2.84639 5.32654 2.51166 6.50451 2.35329C7.64707 2.19968 9.10552 2.19969 10.9404 2.19971ZM8.00012 11.1998C7.55829 11.1998 7.20012 11.5579 7.20012 11.9998C7.20012 12.4416 7.55829 12.7998 8.00012 12.7998H16.0001C16.4419 12.7998 16.8001 12.4416 16.8001 11.9998C16.8001 11.5579 16.4419 11.1998 16.0001 11.1998H8.00012Z"
                        fill="black"
                        className="my-path"
                      ></path>
                    </svg>
                  </button>
                  <input
                    defaultValue={1}
                    type="number"
                    className="w-12 text-center border rounded-md py-1"
                    disabled
                  />
                  <button>
                    <svg
                      width="32px"
                      height="32px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.9404 2.19971H13.06C14.8949 2.19969 16.3533 2.19968 17.4959 2.35329C18.6738 2.51166 19.6351 2.84639 20.3943 3.6056C21.1535 4.3648 21.4882 5.32606 21.6466 6.50402C21.8002 7.64658 21.8002 9.10502 21.8002 10.9398V13.0596C21.8002 14.8944 21.8002 16.3528 21.6466 17.4954C21.4882 18.6734 21.1535 19.6346 20.3943 20.3938C19.6351 21.153 18.6738 21.4878 17.4959 21.6461C16.3533 21.7997 14.8949 21.7997 13.0601 21.7997H10.9403C9.10551 21.7997 7.64707 21.7997 6.50451 21.6461C5.32655 21.4878 4.36529 21.153 3.60608 20.3938C2.84688 19.6346 2.51215 18.6734 2.35378 17.4954C2.20016 16.3528 2.20018 14.8944 2.2002 13.0596V10.9399C2.20018 9.10503 2.20016 7.64658 2.35378 6.50402C2.51215 5.32606 2.84688 4.3648 3.60608 3.6056C4.36529 2.84639 5.32655 2.51166 6.50451 2.35329C7.64707 2.19968 9.10552 2.19969 10.9404 2.19971ZM12.8002 7.99951C12.8002 7.55768 12.4421 7.19951 12.0002 7.19951C11.5584 7.19951 11.2002 7.55768 11.2002 7.99951L11.2002 11.1995H8.00024C7.55842 11.1995 7.20024 11.5577 7.20024 11.9995C7.20024 12.4413 7.55842 12.7995 8.00024 12.7995H11.2002V15.9995C11.2002 16.4413 11.5584 16.7995 12.0002 16.7995C12.4421 16.7995 12.8002 16.4413 12.8002 15.9995V12.7995H16.0002C16.4421 12.7995 16.8002 12.4413 16.8002 11.9995C16.8002 11.5577 16.4421 11.1995 16.0002 11.1995H12.8002V7.99951Z"
                        fill="black"
                        className="my-path"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>

              <td className="text-center px-2 py-4">
                <span className="cursor-pointer text-red-600 hover:text-red-800">
                  Remove
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

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
          <button
            className="text-blue-700"
            onClick={() => setShowVoucher(true)}
          >
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
      </div>

      {showVoucher && <VoucherModal onClose={() => setShowVoucher(false)} />}
    </section>
  );
};

export default UserCart;
