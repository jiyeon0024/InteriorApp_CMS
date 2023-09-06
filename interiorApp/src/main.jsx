import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainTemplate from "./template/MainTemplate.jsx";
import { Route, Routes, HashRouter, RouterProvider } from "react-router-dom";
import Blog from "./pages/blog.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <MainTemplate>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </MainTemplate>
    </HashRouter>
  </React.StrictMode>
);
