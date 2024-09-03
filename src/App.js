import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Store from "./Pages/Store/Store";
import ContactUs from "./Pages/Contactus/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/store", element: <Store /> },
]);
function App() {
  return (
    <RouterProvider router={router}>
      <Routes />
    </RouterProvider>
  );
}

export default App;
