import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Shared/Login";
import Register from "../Pages/Shared/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const response = await fetch("news.json");
          return response.json(); // Ensure the data is returned
        },

      },
      {
        path: '/news/:id',
        element:
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
