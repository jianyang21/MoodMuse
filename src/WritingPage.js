import React, { useState } from "react";
import "./WritingPage.css";

const WritingPage = () => {
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  const handlePost = async () => {
    if (!content.trim()) {
      setStatus("Please write something before posting.");
      return;
    }

    try {
      // Use localStorage for now instead of backend API
      const storedEntries = localStorage.getItem("moodmuse-entries");
      const entries = storedEntries ? JSON.parse(storedEntries) : [];

      const newEntry = {
        _id: Date.now().toString(),
        content: content.trim(),
        createdAt: new Date().toISOString(),
      };

      entries.unshift(newEntry); // Add to beginning for newest first
      localStorage.setItem("moodmuse-entries", JSON.stringify(entries));

      setContent("");
      setStatus("✅ Entry posted successfully!");

      // Clear status after 3 seconds
      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      console.error(err);
      setStatus("❌ Error saving entry.");
    }
  };

  return (
    <div className="writing-page">
      <h1>Share Your Thoughts</h1>
      <div className="writing-container">
        <textarea
          placeholder="Start writing here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="post-button" onClick={handlePost}>
          Post
        </button>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
};

export default WritingPage;
