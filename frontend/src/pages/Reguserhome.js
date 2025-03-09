import React from "react";
import "../styles/AdminLayout.css";
import { useNavigate } from "react-router-dom";


const Reguserhome = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username"); // Get username from localStorage

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="logo">
          <h1>Spirit11</h1>
        </div>
        <div className="nav-links">
          <button className="nav-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="nav-links">
          <button className="nav-button" onClick={() => navigate("/chatbot")}>
            Chatbot
        </button>
        </div>
      </nav>

      <div className="dashboard-content">
        <h2>Hello, {username || "User"}! Welcome to Spirit11!</h2>
        <p>Your personalized dashboard is now ready.</p>
      </div>
    </div>
  );
};

export default Reguserhome;
