import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/profile/:id" element={<UserProfile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
