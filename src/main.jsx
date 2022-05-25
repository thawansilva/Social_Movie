import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import NotFound from "./pages/NotFound";
import UserAuthContext from "./context/UserAuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuthContext>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserAuthContext>
  </React.StrictMode>
);
