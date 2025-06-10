import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";
import WritingPage from "./WritingPage";
import DiaryPage from "./DiaryPage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import { AuthProvider, useAuth } from "./AuthContext";
import "./App.css";

// Using placeholder images for now
const logoBackground =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWUzYzcyO3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyYTUyOTg7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkaWVudCkiLz4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0iQXJpYWwiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Nb29kTXVzZSBCRzwvdGV4dD4KPHN2Zz4=";
const moodMuseLogo =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMTgwMjRhIiByeD0iNSIvPgo8dGV4dCB4PSI1MCIgeT0iMjQiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iQXJpYWwiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1vb2RNdXNlPC90ZXh0Pgo8L3N2Zz4=";

function AppContent() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleMoodClick = (mood) => {
    // Save mood to localStorage
    const today = new Date().toISOString().split("T")[0];
    const moodData = {
      mood,
      date: today,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("moodmuse-daily-mood", JSON.stringify(moodData));

    // Navigate to writing page to encourage journaling
    navigate("/writing");
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${logoBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <img src={moodMuseLogo} alt="MoodMuse Logo" className="logo" />

      <ul className="navbar">
        <li>
          <NavLink
            to="/writing"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Writing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/diary"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Diary
          </NavLink>
        </li>
      </ul>

      <div className="buttons">
        {isAuthenticated ? (
          <div className="user-section">
            <span className="welcome-user">
              Welcome, {user?.firstName || user?.name}!
            </span>
            <button className="logout-button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        ) : (
          <>
            <button className="newbutton" onClick={handleLogin}>
              Log In
            </button>
            <button className="signup" onClick={handleSignup}>
              Sign Up
            </button>
          </>
        )}
      </div>

      <Routes>
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route
          path="/"
          element={
            <div className="homepage">
              <div className="background-animation"></div>
              <div className="welcome-content">
                <h1 className="main-title">
                  {isAuthenticated
                    ? `Welcome back, ${user?.firstName || user?.name}!`
                    : "Welcome to MoodMuse"}
                </h1>
                <p className="subtitle">
                  Your personal space for mindful reflection
                </p>
                <p className="mood-question">How are you feeling today?</p>

                <div className="mood-buttons">
                  <button
                    className="mood-btn happy"
                    onClick={() => handleMoodClick("happy")}
                  >
                    Happy
                  </button>
                  <button
                    className="mood-btn neutral"
                    onClick={() => handleMoodClick("neutral")}
                  >
                    Neutral
                  </button>
                  <button
                    className="mood-btn sad"
                    onClick={() => handleMoodClick("sad")}
                  >
                    Sad
                  </button>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/*" element={<AppContent />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
