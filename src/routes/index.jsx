import Store from "../pages/Store";
import Cart from "../pages/Cart";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [ {
      path: "/",
      element: <Store/>,
    },
     {
      path: "/cart/",
      element: <Cart/>,
    },]
  },
 
]);

export default router;
