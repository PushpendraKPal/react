import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../store/store";

const ShowCart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleCartToogle = () => {
    dispatch(cartSliceActions.toggleCart());
  };
  return (
    <div className="sp_price">
      <p>ReduxCart</p>
      <button onClick={handleCartToogle}>{`Cart (${products.length})`}</button>
    </div>
  );
};

export default ShowCart;
