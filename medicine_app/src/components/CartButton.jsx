import { AppCxt } from "../store/AppContext";

const CartButton = () => {
  const { state, getCart } = AppCxt();
  return <button onClick={getCart}>Cart: {state.cart.length}</button>;
};
export default CartButton;
