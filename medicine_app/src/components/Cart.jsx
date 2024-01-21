import { AppCxt } from "../store/AppContext";

const Cart = () => {
  const { state } = AppCxt();

  const total = state.cart.reduce((add, ele) => {
    return add + +ele.quantity * +ele.price;
  }, 0);
  return (
    <div>
      <h2>Cart</h2>
      <div>
        {state.cart.map((e) => {
          return (
            <div>
              <div>{e.name}</div>
              <div>{e.price}</div>
              <div>{e.quantity}</div>
              <div>{+e.quantity * +e.price}</div>
              <div>Total Price: {total}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
