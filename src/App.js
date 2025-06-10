import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import WritingPage from "./WritingPage";
import DiaryPage from "./DiaryPage";
import "./App.css";

// Using placeholder images for now
const logoBackground =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWUzYzcyO3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyYTUyOTg7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkaWVudCkiLz4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0iQXJpYWwiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Nb29kTXVzZSBCRzwvdGV4dD4KPHN2Zz4=";
const moodMuseLogo =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMTgwMjRhIiByeD0iNSIvPgo8dGV4dCB4PSI1MCIgeT0iMjQiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iQXJpYWwiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1vb2RNdXNlPC90ZXh0Pgo8L3N2Zz4=";

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
