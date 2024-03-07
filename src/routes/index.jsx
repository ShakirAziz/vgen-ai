import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/home";
import Error404 from "../pages/404";
import About from "../pages/about";
import CreateAiImage from "../pages/createAiImage";
import Login from "../pages/login";

const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<CreateAiImage />} />
          <Route path="pricing" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
