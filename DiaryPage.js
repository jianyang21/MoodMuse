import React, { useState, useEffect } from "react";
import "./DiaryPage.css";

const DiaryPage = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEntries = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3001/get-entries");

      if (response.ok) {
        const data = await response.json();
        setEntries(data.entries || []);
      } else {
        const errorData = await response.json();
        setError(
          `Failed to load entries: ${errorData.error || "Unknown error"}`,
        );
      }
    } catch (err) {
      console.error("Error fetching entries:", err);
      setError("Unable to connect to server. Please try again later.");
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
