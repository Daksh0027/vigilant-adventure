import React, { useState } from "react"; // Importing React and useState hook for state management
// Importing CSS
import "./ScrapbookDashboard.css";
import "./styles.css"; // Importing another CSS file for additional styles

const ScrapbookDashboard = () => {
  const [darkMode, setDarkMode] = useState(false); // State to manage dark mode (true for dark, false for light)

  const [activeTab, setActiveTab] = useState("gallery"); // State to manage the active tab (default is "gallery")

  // Example scrapbook entries
  //   const sampleEntries = [
  //     { title: "Trip to the Mountains", image: "https://via.placeholder.com/200", description: "A beautiful memory from the hills." },
  //     { title: "Beach Vacation", image: "https://via.placeholder.com/200", description: "Golden sands and blue waves." },
  //     { title: "Birthday Celebration", image: "https://via.placeholder.com/200", description: "A special day with family." }
  //   ];

  // made by Vansh and Arshia

  const sampleEntries = [
    // Array of sample scrapbook entries
    {
      title: "Trip to the Mountains", // Entry title
      image: "mountain.jpeg", // Image URL
      description: "A beautiful memory from the hills.", // Entry description
    },
    {
      title: "Beach Vacation",
      image: "beach.jpeg",
      description: "Golden sands and blue waves.",
    },
    {
      title: "Birthday Celebration",
      image: "birthday.jpeg",
      description: "A special day with family.",
    },
  ];

  return (
    <div className={`dashboard ${darkMode ? "dark" : ""}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Scrapbook</h2>
        <ul>
          {" "}
          {/* List of navigation buttons */}
          <li>
            <button onClick={() => setActiveTab("gallery")}>Gallery</button>
          </li>
          <li>
            <button onClick={() => setActiveTab("add")}>Add Entry</button>
          </li>
          <li>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}{" "}
              {/* Toggle button text based on the current mode */}
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        <h2>Scrapbook Gallery</h2>
        <div className="scrapbook-grid">
          {sampleEntries.map(
            (
              entry,
              index // Mapping over sample entries to render each entry
            ) => (
              <div className="scrapbook-card" key={index}>
                <img src={entry.image} alt={entry.title} />
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default ScrapbookDashboard;
