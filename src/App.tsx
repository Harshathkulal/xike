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
import PageWrapper from "./components/PageWrapper";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="relative">
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/shoe/*"
            element={
              <PageWrapper>
                <Shoe />
              </PageWrapper>
            }
          />
          <Route
            path="/shoe/:type/:id"
            element={
              <PageWrapper>
                <Shoedetail />
              </PageWrapper>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PageWrapper>
                <Login />
              </PageWrapper>
            }
          />
          <Route
            path="/signup"
            element={
              <PageWrapper>
                <Signup />
              </PageWrapper>
            }
          />
          <Route
            path="/cart"
            element={
              <PageWrapper>
                <Cart />
              </PageWrapper>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <PageWrapper>
                  <Checkout />
                </PageWrapper>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
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
