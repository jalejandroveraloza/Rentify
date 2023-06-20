import { useState, createContext, useEffect, lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Login from "./components/Login/Login";
import EmailLogin from "./components/Login/EmailLogin";
import Register from "./components/Register/Register";
import AddProduct from "./components/Product/AddProduct";
import ViewProducts from "./components/Product/ViewProducts";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
export const DataContainer = createContext();
function App() {
  const [CartItem, setCartItem] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);

  const addToCart = (product, num = 1) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + num }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: num }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    // If product quantity == 1 then we have to remove it
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    }
    //else we just decrease the quantity
    else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  const deleteProduct = (product) => {
    setCartItem(CartItem.filter((item) => item.id !== product.id));
  };
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(CartItem));
  }, [CartItem, isLoggedIn]);
  return (
    <DataContainer.Provider
      value={{
        CartItem,
        setCartItem,
        addToCart,
        decreaseQty,
        deleteProduct,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      <Suspense fallback={<Loader />}>
        <Router>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          <NavBar
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setLoggedUser={setLoggedUser}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetails />} />
            <Route
              path="/cart"
              element={<Cart isLoggedIn={isLoggedIn} loggedUser={loggedUser} />}
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/login/email"
              element={
                <EmailLogin
                  setUserLoggedIn={setIsLoggedIn}
                  setLoggedUser={setLoggedUser}
                />
              }
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/addproduct"
              element={<AddProduct isLoggedIn={isLoggedIn} loggedUser={loggedUser}/>}
            />
            <Route
              path="/viewproducts"
              element={<ViewProducts loggedUser={loggedUser} />}
            />
            <Route path="/orders" element={<Orders />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </DataContainer.Provider>
  );
}

export default App;
