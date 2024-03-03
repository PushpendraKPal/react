import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../store/store";

const Header = () => {
  const products = useSelector((state) => state.cart.products.length);
  const dispatch = useDispatch();
  return (
    <div className="sp_price h_container">
      <p>ReduxCart</p>
      <button
        onClick={() => dispatch(cartSliceActions.toggleCart())}
      >{`Cart ${products}`}</button>
    </div>
  );
};

export default Header;
