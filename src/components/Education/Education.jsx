import React from 'react';
import styles from './Education.module.css';
export const Education = () => {
  return (
   <section className={styles.container} id='Education'>
    <div className={styles.title}>
        Education
    </div>
    <div className={styles.content}>
       <h2>
        B-Tech in Velagapudi Ramakrishna Siddhartha Engineering College, Vijayawada
       </h2>
       <h3>2022-2026</h3><br />
       <h2>
        Intermediate in Nagarjuna Junior College,Tiruvuru
       </h2>
       <h3>2020-2022</h3><br />
       <h2>
        SSC in Nagerjuna E.M High School,Tiruvuru
       </h2>
       <h3>2020</h3>
    </div>

   </section>
  )
}
