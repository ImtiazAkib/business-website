import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import LifeWithUs from "../Pages/LifeWithUs/LifeWithUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import CustomerSupport from "../Pages/CustomerSupport/CustomerSupport";
import SupportServices from "../Pages/SupportServices/SupportServices";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/life-with-us",
        element: <LifeWithUs></LifeWithUs>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/customer-support",
        element: <CustomerSupport></CustomerSupport>,
      },
      {
        path: "/back-office-support-services",
        element: <SupportServices></SupportServices>,
      },
    ],
  },
]);
