import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../store/store";

const StoreProduct = ({ e }) => {
  let products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleBuy = (e) => {
    let arr = [...products];
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
      if (e.id === arr[i].id) flag = true;
    }
    if (flag) return alert("Product is already in cart");
    e.qty = 1;
    arr.push({ ...e });
    dispatch(cartSliceActions.setCart(arr));
  };

  return (
    <div className="sp_container">
      <p>{e.name}</p>
      <p>{e.category}</p>
      <div className="sp_price">
        <span>{`Rs ${e.price}/-`}</span>
        <button className="sp_btn" onClick={() => handleBuy({ ...e })}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default StoreProduct;
