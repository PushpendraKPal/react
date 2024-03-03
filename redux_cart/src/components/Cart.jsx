import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.products);

  const total = cartProducts.reduce((t, n) => {
    return t + n.price * n.qty;
  }, 0);

  return (
    <div className="s_container">
      <h1>Cart</h1>
      {cartProducts.map((e) => {
        return <CartProduct key={e.id} e={e} />;
      })}
      <div>
        <p>{`Total: Rs ${total}/-`}</p>
      </div>
    </div>
  );
};

export default Cart;
