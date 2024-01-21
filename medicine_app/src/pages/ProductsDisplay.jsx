import ProductItem from "../components/ProductItem";
import { AppCxt } from "../store/AppContext";

const ProductsDisplay = () => {
  const { state, updateMedicine } = AppCxt();

  return (
    <div>
      {state.medicines.map((e) => (
        <ProductItem item={e} key={e._id} />
      ))}
    </div>
  );
};

export default ProductsDisplay;
