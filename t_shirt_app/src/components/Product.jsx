import style from "./Product.module.css";

const Product = ({ item }) => {
  const largeHandler = () => {};
  const mediumHandler = () => {};
  const smallHandler = () => {};
  return (
    <div className={style.container}>
      <div>{item.name}</div>
      <div>{item.company}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
      <div className={style.btncontainer}>
        <button onClick={largeHandler}>Large {item.large}</button>
        <button onClick={mediumHandler}>Medium {item.medium}</button>
        <button onClick={smallHandler}>Small {item.small}</button>
      </div>
    </div>
  );
};

export default Product;
