import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { cartSliceActions } from "./store/store";

function App() {
  const cart = useSelector((state) => state.cart.products);

  const [notification, setNotification] = useState("Pending");
  const [initial, setInitial] = useState(false);
  const show = useSelector((state) => state.cart.show);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCart = async (cart) => {
      try {
        setNotification("Sending");
        const response = await fetch(
          "https://reactcart-e848e-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cart),
          }
        );
        const data = response.json();
        if (data.err) {
          setNotification("Error");
        } else {
          setNotification("Success");
        }
      } catch (err) {
        setNotification("Error");
      }
    };

    if (initial === 2) sendCart(cart);
    if (initial === 1) setInitial(2);
  }, [cart]);

  useEffect(() => {
    const getCart = async () => {
      try {
        console.log("Hello Cart");
        const getResponse = await fetch(
          "https://reactcart-e848e-default-rtdb.firebaseio.com/cart.json"
        );
        let getData = await getResponse.json();
        if (!getData) getData = [];
        console.log(getData);
        if (getData.err) {
        } else {
          console.log(getData);
          dispatch(cartSliceActions.setCart(getData));
          setInitial(1);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getCart();
  }, []);

  return (
    <div className="App">
      <div
        className={
          notification === "Pending"
            ? "pending"
            : notification === "Sending"
            ? "sending"
            : notification === "Success"
            ? "success"
            : "error"
        }
      >
        <p>
          {notification === "Sending"
            ? "Sending"
            : notification === "Success"
            ? "Successful"
            : "Error"}
        </p>
        <p>
          {notification === "Sending"
            ? "Sending data to cart!"
            : notification === "Success"
            ? "Sending data successful!"
            : "sending data failed!"}
        </p>
      </div>
      <Header />
      <Cart setNotification={setNotification} />
      <Store />
    </div>
  );
}

export default App;
