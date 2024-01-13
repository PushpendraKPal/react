import { useProduct } from "../context/ProductContext";

const Cart = () => {
  const { state } = useProduct();
  const total = state.cart.reduce((acc, curr) => {
    return (
      acc + curr.lq * curr.price + curr.mq * curr.price + curr.sq * curr.price
    );
  }, 0);
  return <div>Cart: {state.counter}</div>;
};

export default Cart;
