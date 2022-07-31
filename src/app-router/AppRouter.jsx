import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/profile" element={<NewBlog />} />
        <Route path="/updateBlog" element={<UpdateBlog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
