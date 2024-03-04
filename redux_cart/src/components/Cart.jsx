import { useDispatch, useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { useEffect } from "react";
import { cartSliceActions } from "../store/store";

const Cart = ({ setNotification }) => {
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const total = cartProducts.reduce((t, n) => {
    return t + n.price * n.qty;
  }, 0);

  useEffect(() => {
    const getCart = async () => {
      try {
        console.log("Hello Cart");
        setNotification("Sending");
        const getResponse = await fetch(
          "https://reactcart-e848e-default-rtdb.firebaseio.com/cart.json"
        );
        const getData = await getResponse.json();
        console.log(getData);
        if (getData.err) {
          setNotification("Error");
        } else {
          console.log(getData);
          dispatch(cartSliceActions.setCart(getData));
          setNotification("Success");
        }
      } catch (err) {
        console.log(err);
        setNotification("Error");
      }
    };
    getCart();
  }, []);
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
