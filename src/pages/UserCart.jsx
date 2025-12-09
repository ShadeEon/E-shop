import CartSummary from "../features/cart/CartSummary";
import CartTable from "../features/cart/CartTable";

const UserCart = () => {
  return (
    <section className="flex flex-row p-4 gap-2 items-start">
      <CartTable />
      <CartSummary />
    </section>
  );
};

export default UserCart;
