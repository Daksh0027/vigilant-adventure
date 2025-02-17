import React, { useState } from "react";
import styles from "./Scrapbook.module.css"; // Correctly import the CSS module

const Scrapbook = () => {
  const [entries, setEntries] = useState([
    {
      title: "Trip to Paris",
      desc: "A wonderful memory!",
      image:
        "https://f.playcode.io/p-2261392/v-1/7b5e530c-1845-4453-b63b-f81eb0a3dab2/paris.jpg",
    },
    {
      title: "Family Picnic",
      desc: "Best time with family.",
      image:
        "https://f.playcode.io/p-2261392/v-1/09689f49-9be9-47f3-bb3d-5aa4d174905a/picnic.jpg",
    },
    {
      title: "Mountain Adventure",
      desc: "Exploring the heights.",
      image:
        "https://f.playcode.io/p-2261392/v-1/aa8b5e56-2977-4aef-925f-f00cc0564383/mountains.jpg",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addEntry = () => {
    const title = prompt("Enter title:");
    const desc = prompt("Enter description:");
    const image =
      prompt("Enter image URL (or leave blank for default):") ||
      "images/default.jpg";

    if (title && desc) {
      setEntries([...entries, { title, desc, image }]);
    }
  };

  const editEntry = (index) => {
    const newTitle = prompt("Edit title:", entries[index].title);
    const newDesc = prompt("Edit description:", entries[index].desc);
    const newImage = prompt("Edit image URL:", entries[index].image);

    if (newTitle && newDesc) {
      const updatedEntries = [...entries];
      updatedEntries[index] = {
        title: newTitle,
        desc: newDesc,
        image: newImage,
      };
      setEntries(updatedEntries);
    }
  };

  const deleteEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.body}>
      <div className={styles.scrapbookContainer}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.logo}>📖 Scrapbook</div>
          <button className={styles.toggleBtn}>☰</button>

          <ul className={styles.menu}>
            <li>
              🏠 <span>Dashboard</span>
            </li>
            <li>
              👤 <span>Profile</span>
            </li>
            <li>
              📅 <span>Schedule</span>
            </li>
            <li>
              ⚙️ <span>Settings</span>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className={styles.main}>
          <div className={styles.header}>
            <h1>My Scrapbook</h1>
            <button className={styles.addBtn} onClick={addEntry}>
              + Add Entry
            </button>
          </div>

          {/* Scrapbook Grid */}
          <div className={styles.scrapbookGrid}>
            {entries.map((entry, index) => (
              <div
                key={index}
                className={styles.card}
                style={{ backgroundImage: `url(${entry.image})` }}
              >
                <h3>{entry.title}</h3>
                <p>{entry.desc}</p>
                <div className={styles.cardActions}>
                  <button
                    className={styles.editBtn}
                    onClick={() => editEntry(index)}
                  >
                    ✏️
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => deleteEntry(index)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrapbook;
