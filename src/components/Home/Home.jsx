import React from 'react'
import styles from './Home.module.css';
import {getImageUrl} from '../../utils';
export const Home = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Uday Kiran Pillala</h1>
          <p className={styles.description}>
          Hardworking and enthusiastic Artificial Intelligence And Data Science Student. Knowledgeable in user interface, testing, and
debugging processes. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.
          </p>
          <a href="mailto:pillalauday2005@gmail.com" target='_blank' className={styles.contactBtn}>
            Contact Me
          </a>
          </div>
        
        <img 
          src= { getImageUrl("home/uday.jpg")}
           alt="Image of me"
           className={styles.heroImg}
            />
          <div className={styles.topBlur}/>
          <div className={styles.bottomBlur}/>    
    </section>
  );
};
