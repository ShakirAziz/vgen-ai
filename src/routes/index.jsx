import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Homepage from "../pages/home";
import Error404 from "../pages/404";
import About from "../pages/about";
import CreateAiImage from "../pages/createAiImage";
import Login from "../pages/login";
import Signup from "../pages/signup";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "createAiImage", element: <CreateAiImage /> },
      { path: "about", element: <About /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "signUp", element: <Signup /> },

  { path: "*", element: <Error404 /> },
]);

export default Routers;
