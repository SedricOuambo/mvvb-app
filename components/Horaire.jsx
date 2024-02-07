import { FaCalendarAlt, FaClock, FaLocationArrow } from "react-icons/fa";
import styles from './Horaire.module.css';
/**
 * Section Horaire et adresse
 * @returns Section Horaire et adresse
 */
export default function Horaire() {
   return <section className={styles.section}>
      <h1 className='title'> Date et Adresse</h1>
      <div className={styles.grid + ' ' + styles.horaire + ' ' + 'container'}>
         <div>
            <p>Date</p>
            <div className={styles.horaire__icon}><FaCalendarAlt className={styles.horaire__i} /></div>
            <div>Du 12 Fevrier au 13 Fevrier 2024</div>
         </div>

         <div>
            <p>Heure</p>
            <div className={styles.horaire__icon}><FaClock className={styles.horaire__i} /></div>
            <div>9H - 15H</div>
         </div>

         <div>
            <p>Lieu</p>
            <div className={styles.horaire__icon}><FaLocationArrow className={styles.horaire__i} /></div>
            <div>1240 Avenue Mvvb</div>
         </div>
      </div>
   </section>
}