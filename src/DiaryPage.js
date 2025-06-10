import React, { useState, useEffect } from "react";
import "./DiaryPage.css";

const DiaryPage = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEntries = async () => {
    try {
      setLoading(true);
      // Use localStorage for now instead of backend API
      const storedEntries = localStorage.getItem("moodmuse-entries");
      if (storedEntries) {
        const entries = JSON.parse(storedEntries);
        setEntries(entries || []);
      } else {
        // Add some demo entries if none exist
        const demoEntries = [
          {
            _id: "demo1",
            content:
              "Today was a great day! I felt really accomplished after finishing my project.",
            createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
          },
          {
            _id: "demo2",
            content:
              "Feeling a bit overwhelmed with work lately, but I know it will get better.",
            createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
          },
          {
            _id: "demo3",
            content:
              "Had a wonderful time with friends today. Grateful for the people in my life.",
            createdAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
          },
        ];
        localStorage.setItem("moodmuse-entries", JSON.stringify(demoEntries));
        setEntries(demoEntries);
      }
    } catch (err) {
      console.error("Error fetching entries:", err);
      setError("Unable to load entries from storage.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="diary-page">
        <h1>My Diary</h1>
        <div className="loading-message">Loading your entries...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="diary-page">
        <h1>My Diary</h1>
        <div className="error-message">
          <p>{error}</p>
          <button className="retry-button" onClick={fetchEntries}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="diary-page">
      <h1>My Diary</h1>
      <div className="diary-container">
        {entries.length === 0 ? (
          <div className="no-entries">
            <p>No entries yet. Start writing your thoughts!</p>
          </div>
        ) : (
          <div className="entries-list">
            {entries.map((entry, index) => (
              <div key={entry._id || index} className="diary-entry">
                <div className="entry-header">
                  <span className="entry-date">
                    {formatDate(entry.createdAt)}
                  </span>
                </div>
                <div className="entry-content">{entry.content}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiaryPage;
