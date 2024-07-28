import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rohit</h1>
        <p className={styles.description}>
        I am a BE Graduate in Computer Engineering, a full-stack developer, 
        and a DevOps Engineer. I thrive on learning new things and continuously expanding my skill set. Reach out to learn more!
        </p>
        <a href="gadhaverohit811@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Profile.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
