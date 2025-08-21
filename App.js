import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard';
import { useState } from "react";
import axios from "axios";

function App() {
  const [mood, setMood] = useState("");

  const handlePost = async () => {
  if (!mood) return alert("Please write something!");
  try {
    const res = await axios.post("http://localhost:5000/entries", { text: mood });
    console.log("Saved entry:", res.data);
    setMood(""); // clear textarea
    alert("Mood saved ✅");
  } catch (err) {
    console.error("Save failed:", err.response?.data || err.message);
    alert("Failed to save entry ❌");
  }
};


  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Welcome to MoodMuse</h1>
                <p>Track your mood and reflect on your day with our simple journaling tool.</p>
                <div className="container1">
                  <h2>Today's Mood</h2>
                  <p>How are you feeling today?</p>
                  <textarea
                    placeholder="Enter your mood here..."
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                  />
                  <button className="post" onClick={handlePost}>Post</button>
                </div>
              </>
            }
          />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
