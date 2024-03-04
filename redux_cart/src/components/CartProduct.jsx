import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../store/store";

const CartProduct = ({ e }) => {
  let products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleQuantityChange = ({ e, change }) => {
    let arr = [...products];
    let arr1 = [];
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
      if (e.id === arr[i].id) {
        if (change === "sub") {
          if (e.qty > 1) {
            e.qty = e.qty - 1;
            arr1.push({ ...e });
          } else {
            continue;
          }
        } else {
          e.qty = e.qty + 1;
          arr1.push({ ...e });
        }
      } else {
        arr1.push({ ...arr[i] });
      }
    }
    dispatch(cartSliceActions.setCart(arr1));
  };

  return (
    <div className="sp_container">
      <div className="sp_price">
        <p>{e.name}</p>
        <p>{`Rs ${e.price}/-`}</p>
      </div>
      <div className="sp_price">
        <span>{`X ${e.qty}`}</span>
        <div>
          <button
            className="sp_btn"
            onClick={() => handleQuantityChange({ e: { ...e }, change: "sub" })}
          >
            -
          </button>
          <button
            className="sp_btn"
            onClick={() => handleQuantityChange({ e: { ...e }, change: "add" })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
