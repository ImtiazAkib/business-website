import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import LifeWithUs from "../Pages/LifeWithUs/LifeWithUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import CustomerSupport from "../Pages/CustomerSupport/CustomerSupport";
import SupportServices from "../Pages/SupportServices/SupportServices";
import Telemarketing from "../Pages/Telemarketing/Telemarketing";
import VirtualAssistance from "../Pages/VirtualAssistance/VirtualAssistance";
import DigitalMarketing from "../Pages/DigitalMarketing/DigitalMarketing";
import Development from "../Pages/Development/Development";
import Blogs from "../Pages/Blogs/Blogs";

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
      {
        path: "/telemarketing-sales",
        element: <Telemarketing></Telemarketing>,
      },
      {
        path: "/virtual-executive-assistant",
        element: <VirtualAssistance></VirtualAssistance>,
      },
      {
        path: "/digital-marketing",
        element: <DigitalMarketing></DigitalMarketing>,
      },
      {
        path: "/web-design-development",
        element: <Development></Development>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
