import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../store/store";

const StoreProduct = ({ e }) => {
  let products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleBuy = (e) => {
    let arr = [...products];
    let flag = false;
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
      if (e.id === arr[i].id) {
        flag = true;
        arr1.push({ ...arr[i], qty: arr[i].qty + 1 });
      } else {
        arr1.push({ ...arr[i] });
      }
    }
    if (!flag) {
      arr1.push({ ...e, qty: 1 });
    }
    dispatch(cartSliceActions.setCart(arr1));
  };

  return (
    <div className="sp_container">
      <p>{e.name}</p>
      <p>{e.category}</p>
      <div className="sp_price">
        <span>{`Rs ${e.price}/-`}</span>
        <button className="sp_btn" onClick={() => handleBuy({ ...e })}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default StoreProduct;
