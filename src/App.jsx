import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import Layout from "./components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "user/:id", element: <UserDetails /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
