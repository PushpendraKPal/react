const Electronics = ({ products, setProducts }) => {
  const hcProducts = products.filter((ele) => ele.category === "healthcare");

  const handleDelete = (id) => {
    const newProducts = products.filter((ele) => ele.id !== id);
    setProducts(() => [...newProducts]);
  };
  return (
    <div>
      <h3>Electronics Products</h3>
      {hcProducts.map((ele) => (
        <div>
          <div>{ele.id}</div>
          <div>{ele.price}</div>
          <div>{ele.name}</div>
          <div>{ele.description}</div>
          <div>{ele.category}</div>
          <button onClick={() => handleDelete(ele.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Healthcare;
