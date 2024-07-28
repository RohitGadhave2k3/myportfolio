import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/problem.png")} alt="Problem icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem Solving</h3>
              <p>
                Solved 250+ DSA and MySQL problems on LeetCode, enhancing my analytical and coding skills.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/certificate.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Certification & Skills</h3>
              <p>
                <ul className={styles.certificatesList}>
                  <li>
                    <a href="https://drive.google.com/file/d/1l35C36XwwJ7tLvqUvdZS2VKRM9BYhNOu/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                      Web Development by Udemy
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/17peHNnJN6iVAyZrVKwlx_HEtvG4FEuxz/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                      DSA (Java)
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/1WKGwEwQS7RTA0ZQ1Wr-dRwo4R46CdqUl/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                      Introduction to DevOps Tools
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/achivement.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Achievements & Participation</h3>
              <p>
              <ul className={styles.certificatesList}>
                  <li>
                    <a href="https://drive.google.com/file/d/1l35C36XwwJ7tLvqUvdZS2VKRM9BYhNOu/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                      Smart India Hackathon (SIH)
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/17p72fJjAFJ31pWBzenVqeZvqZC0KhTW-/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                      Informatica and Hack2Skill
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
