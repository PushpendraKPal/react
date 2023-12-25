import "../App.css";

const Cart = ({ cart }) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  let total = cartElements.reduce((sum, e) => {
    return sum + e.quantity * e.price;
  }, 0);

  function handleClick() {
    cart((prev) => !prev);
  }

  return (
    <div className="cart">
      <button onClick={handleClick}>X</button>
      <h1>Cart</h1>
      <div className="cart_Item">
        <h3>Item</h3>
        <h3>Price</h3>
        <h3>Qunatity</h3>
      </div>
      {cartElements.map((e) => {
        return (
          <div className="cart_Item">
            <div>{e.title}</div>
            <div>$ {e.price}</div>
            <div>{e.quantity}</div>
          </div>
        );
      })}
      <div className="cart_Item">
        <div></div>
        <h4>Total = ${total}</h4>
        <div>
          <button>Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
