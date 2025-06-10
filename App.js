// App.js
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import logoBackground from "./wmremove-transformed.jpeg";
import moodMuseLogo from "./moodmuse-logo.png";
import WritingPage from "./WritingPage";
import DiaryPage from "./DiaryPage";
import "./App.css";

function App() {
  const handleLogin = () => console.log("Login clicked");
  const handleSignup = () => console.log("Signup clicked");

  return (
    <BrowserRouter>
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
          <button className="newbutton" onClick={handleLogin}>
            Log In
          </button>
          <button className="signup" onClick={handleSignup}>
            Sign Up
          </button>
        </div>

        <Routes>
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/diary" element={<DiaryPage />} />
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
