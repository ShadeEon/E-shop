import CartSummary from "../features/cart/components/CartSummary";
import CartTable from "../features/cart/components/CartTable";

const UserCart = () => {
  return (
    <section className="flex flex-row p-4 gap-2 items-start">
      <CartTable />
      <CartSummary />
    </section>
  );
};

export default UserCart;
