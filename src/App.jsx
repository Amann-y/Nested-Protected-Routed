import React from "react";
import Login from "./components/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Student from "./components/Student";
import checkAuth from "./Auth/Auth";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      loader: checkAuth,
      element: <Dashboard />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "student",
          element: <Student />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
