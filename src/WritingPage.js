// WritingPage.js
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
      const res = await fetch("http://localhost:3001/post-entry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      if (res.ok) {
        setContent("");
        setStatus("✅ Entry posted successfully!");
      } else {
        const errorData = await res.json();
        setStatus(`❌ Failed to post: ${errorData.error || "Unknown error"}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error while posting.");
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
