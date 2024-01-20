import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarList from "./components/NavbarList";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { Suspense, lazy, useState } from "react";
import Context from "./context/Context";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
//import About from "./pages/About";
//import Store from "./pages/Store";
//import Contact from "./pages/Contact";
//import Product from "./pages/Product";
//import Login from "./pages/Login";
import AuthCxt from "./context/AuthContext";
import Logout from "./components/Logout";
const LazyProduct = lazy(() => import("./pages/Product"));
const LazyAbout = lazy(() => import("./pages/About"));
const LazyContact = lazy(() => import("./pages/Contact"));
const LazyLogin = lazy(() => import("./pages/Login"));
const LazyStore = lazy(() => import("./pages/Store"));

function App() {
  const [showCart, setShowCart] = useState(false);
  const { isLoggedIn } = AuthCxt();
  return (
    <Context>
      <div className="App">
        {showCart && <Cart cart={setShowCart} />}
        <NavbarList cart={setShowCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={
              isLoggedIn ? (
                <Suspense>
                  <LazyStore />
                </Suspense>
              ) : (
                <Suspense>
                  <LazyLogin />
                </Suspense>
              )
            }
            exact
          />
          <Route
            path="/about"
            element={
              <Suspense>
                <LazyAbout />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense>
                <LazyContact />
              </Suspense>
            }
          />
          <Route
            path="/store/:id"
            element={
              <Suspense>
                <LazyProduct />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense>
                <LazyLogin />
              </Suspense>
            }
          />
          <Route
            path="/logout"
            element={
              <Suspense>
                <LazyLogin />
              </Suspense>
            }
          />
        </Routes>

        {/* <div className="header">The Generics</div>
        <div className="music">Music</div>
        <Products></Products>
        <Footer></Footer> */}
      </div>
    </Context>
  );
}

export default App;
