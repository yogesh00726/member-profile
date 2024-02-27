import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Register from "./components/Register.tsx";
import Profile from "./components/Profile";
import { FC } from 'react';

const App: FC = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">      
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Register New User
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
