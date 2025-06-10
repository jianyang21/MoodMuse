// App.js
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import WritingPage from "./WritingPage";
import "./App.css";

function App() {
  const handleLogin = () => console.log("Login clicked");
  const handleSignup = () => console.log("Signup clicked");

  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <div className="logo">MoodMuse</div>

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
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Profile
            </NavLink>
          </li>
        </ul>

        <div className="buttons">
          <button className="newbutton" onClick={handleLogin}>
            Log In
          </button>
          <button className="signup" onClick={handleSignup}>
            Sign Up
          </button>
        </div>

        <Routes>
          <Route path="/writing" element={<WritingPage />} />
          <Route
            path="/diary"
            element={
              <div className="welcome">
                <h1>Diary</h1>
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="welcome">
                <h1>Profile</h1>
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="welcome">
                <h1>Welcome back!</h1>
                <p>How are you feeling today?</p>
                <div className="mood-buttons">
                  <button className="happy">😊 Happy</button>
                  <button className="meh">😐 Meh</button>
                  <button className="sad">😢 Sad</button>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
