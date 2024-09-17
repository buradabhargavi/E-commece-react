import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Store from "./Pages/Store/Store";
import ContactUs from "./Pages/Contactus/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Login from "./Components/LoginPages/Login";
import Signup from "./Components/LoginPages/Signup";
import ForgotPassword from "./Components/LoginPages/ForgotPassword";
import LoginProvider from "./Store/LoginProvider";
import AuthLogin from "./Pages/AuthRouer/AuthLogin";
import AuthProtect from "./Pages/AuthRouer/AuthProtect";
import CartProvider from "./Store/cartProvider";

const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/aboutus", element: <AboutUs /> },
  {
    element: <AuthLogin />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  { path: "/forgotPassword", element: <ForgotPassword /> },
  {
    element: <AuthProtect />,
    children: [{ path: "/store", element: <Store /> }],
  },
]);
function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <RouterProvider router={router}>
          <Routes />
        </RouterProvider>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
