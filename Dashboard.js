import './Dashboard.css';
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/entries")
      .then(res => setEntries(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="dashboard">
      <h1>You have made {entries.length} entries in this year</h1>
      <div>
        {entries.map(entry => (
          <div key={entry._id} className="entry">
            <p>{entry.text}</p>
            <small>{new Date(entry.createdAt).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
