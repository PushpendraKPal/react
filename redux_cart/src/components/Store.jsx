import { useSelector } from "react-redux";
import StoreProduct from "./StoreProduct";

const Store = () => {
  const storeProducts = useSelector((state) => state.store.products);

  return (
    <div className="s_container">
      <h1>Shop</h1>
      {storeProducts.map((e) => {
        return <StoreProduct key={e.id} e={e} />;
      })}
    </div>
  );
};

export default Store;
