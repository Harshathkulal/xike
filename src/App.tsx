import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Cart from "./pages/cart/cart";
import Shoe from "./pages/shoe/shoe";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Shoedetail from "./pages/shoedetails/shoedetail";
import Checkout from "./pages/checkout/checkout";
import { useAppSelector } from "./redux/hooks";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shoe/*" element={<Shoe />}></Route>
          <Route path="/shoe/:type/:id" element={<Shoedetail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
        <Footer />
       <ToastContainer/>
      </BrowserRouter>
    </>
  );
}

export default App;

interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const userInfo = useAppSelector((state) => state.user.userInfo); // Access authUser from Redux store
  return userInfo ? children : <Navigate to="/login" />;
};
