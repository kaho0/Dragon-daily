import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Shared/Login";
import Register from "../Pages/Shared/Register";
import NewsPage from "../Pages/NewsPage";
import About from "../Pages/About"; // Import the About component

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/news/:id",
        element: <NewsPage />,
        loader: async ({ params }) => {
          const response = await fetch("news.json");
          const newsData = await response.json();
          return newsData.find((news) => news._id === params.id);
        },
      },
      {
        path: "/about", // Define the About route
        element: <About />, // Use the About component
      },
    ],
  },
]);

export default router;
