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
              <div className="hero-section">
                <div className="animated-centerpiece">
                  <div className="breathing-circle">
                    <div className="inner-circle">
                      <div className="pulse-dot"></div>
                    </div>
                  </div>
                  <div className="floating-elements">
                    <div className="float-particle particle-1">✨</div>
                    <div className="float-particle particle-2">🌙</div>
                    <div className="float-particle particle-3">💫</div>
                    <div className="float-particle particle-4">🌟</div>
                    <div className="float-particle particle-5">☁️</div>
                    <div className="float-particle particle-6">🦋</div>
                  </div>
                </div>

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
                    <button className="mood-btn happy">
                      <span className="emoji">😊</span>
                      <span className="label">Happy</span>
                    </button>
                    <button className="mood-btn meh">
                      <span className="emoji">😐</span>
                      <span className="label">Meh</span>
                    </button>
                    <button className="mood-btn sad">
                      <span className="emoji">😢</span>
                      <span className="label">Sad</span>
                    </button>
                  </div>
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
