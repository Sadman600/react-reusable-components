import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
// import Contact from "../pages/Contact";
import About from "../pages/About";
import App from "../App";
import Admin from "../pages/Admin";
import AdminLayout from "../components/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Admin />,
      },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
    ],
  },
]);

export default router;
