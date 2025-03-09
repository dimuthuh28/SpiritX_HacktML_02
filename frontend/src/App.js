import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AdminLayout from "./components/AdminLayout";
import ChatBot from "./pages/ChatBot";
import GuestHomePage from "./pages/GuestHomePage";
import Login from "./pages/Login";
import PlayerStatsView from "./pages/Admin/PlayerStats";
import PlayersView from "./pages/Admin/PlayersView";
import React from "react";
import RegUserHome from "./pages/Reguserhome";
import Reguserhome from "./pages/Reguserhome";
import Signup from "./pages/Signup";
import TournamentSummary from "./pages/Admin/TournementSummary";
import SpiriterChat from "./components/spiriterChat";
import Navbar-u from "./components/Navbar-u";
import UserDashboard from "./pages/Dashboard";
import TeamSelection from "./components/TeamSelection";

function App() {
  return (
    <Router>
      <Navbar-u />

      <Routes>
        <Route path="/" element={<GuestHomePage />} />
        <Route path="/Chatbot" element={<ChatBot />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* after logging to the system user will be redirected */}
        <Route path="/Admindashboard" element={<RegUserHome />} />

        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/Team" element={<TeamSelection />} />

        {/* After login, the user will be redirected */}
        <Route path="/reguserhome" element={<RegUserHome />} />

        {/* Admin route layout */}
        <Route path="/admindash" element={<AdminLayout />}>
          {/* The default route inside AdminLayout */}
          <Route index element={<div><h1>Admin Dashboard</h1><p>Welcome to the admin dashboard.</p></div>} /> 
          <Route path="players" element={<PlayersView />} />
          <Route path="stats" element={<PlayerStatsView />} />
          <Route path="summary" element={<TournamentSummary />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
