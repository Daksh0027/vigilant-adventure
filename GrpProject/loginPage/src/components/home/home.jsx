import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router";
 
// made by nishtha 
function Home() {
  return (
    <div className={styles.divbody}>
      <nav className={styles.navBar}>
        <div className={styles.navLogo}>
          <div className={styles.logo}></div>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.contactType}>
            <i className="fa-solid fa-phone"></i>
            <p>+91 9876543210</p>
          </div>
          <span className={styles.divider}></span>
          <div className={styles.contactType}>
            <i className="fa-solid fa-envelope"></i>
            <p>customercare@memora.com</p>
          </div>
        </div>
      </nav>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <p className={styles.tagline}>MAKE A DIGITAL SCRAPBOOK WITH</p>
          <h1 className={styles.title}>
            <span>MEMORA</span>
          </h1>
          <Link to="/login" className={styles.button}>
            SIGN UP
          </Link>
          <p className={styles.websiteLink}>www.memora.com</p>
        </div>
        <div className={styles.imageSection}>
          <img
            src="https://marketplace.canva.com/EAFP1Ub_KvY/1/0/1600w/canva-brown-and-white-simple-photo-collage-scrapbook-qL25kwGJq7U.jpg"
            alt="Scrapbook Preview"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
