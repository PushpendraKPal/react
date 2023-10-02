import "../Input/Input.css";

const Product = ({ title, ele, handleDelete }) => {
  return (
    <div className="product">
      <div>{`ID: ${ele.id}`}</div>
      <div>{`Price: ${ele.price}`}</div>
      <div>{`Name: ${ele.name}`}</div>
      <div>{`Description: ${ele.description}`}</div>
      <div>{`Category: ${ele.category}`}</div>
      <button onClick={() => handleDelete(ele.id)}>Delete</button>
    </div>
  );
};

export default Product;
