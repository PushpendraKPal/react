import style from "./Product.module.css";
const Product = ({ item }) => {
  return (
    <div className={style.container}>
      <div>{item.name}</div>
      <div>{item.company}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
      <div className={style.btncontainer}>
        <button>Large {item.large}</button>
        <button>Medium {item.medium}</button>
        <button>Small {item.small}</button>
      </div>
    </div>
  );
};

export default Product;
