import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="Contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("Contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:pillalauday2005@gmail.com">pillalauday2005@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("Contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/uday-kiran-pillala">linkedin.com/uday-kiran-pillala</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("Contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/udaykiran1205">github.com/udaykiran1205</a>
        </li>
      </ul>
    </footer>
  );
};
