import React from 'react';
import styles from './Skills.module.css';
import skills from "../../data/skills.json";
import { getImageUrl } from '../../utils';
export const Skills = () => {
  return (
    <section className={styles.container} id='Skills'>
        <h2 className={styles.title}>
                Skills
            </h2>
        <div className={styles.content}>
            {skills.map((skill,id)=>{
                return(
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                        </div>
                        <p>{skill.title}</p>

                    </div>
                );
            }
            )}


        </div>

    </section>
  )
}
