import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/home";
import Error404 from "../pages/404";
import About from "../pages/about";
import CreateAiImage from "../pages/createAiImage";
import Login from "../pages/login";
import Signup from "../pages/signup";

const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="createAiImage" element={<CreateAiImage />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<Signup />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
