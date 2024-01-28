
import styles from './Horaire.module.css'
export default function Horaire() {
    return <section className={styles.section}>
        <h1 className='title'> Date et Adresse</h1>
         <div className={styles.grid + ' '+styles.horaire +' '+'container'}>
             <div>
                <p>Date</p>
                <div className={styles.horaire__icon}><i className="uil uil-calendar-alt"></i></div>
                <div>Du 12 Fevrier au 13 Fevrier 2024</div>
             </div>

             <div>
                <p>Heure</p>
                <div className={styles.horaire__icon}><i className="uil uil-clock"/></div>
                <div>9H - 15H</div>
             </div>

             <div>
                <p>Lieu</p>
                <div className={styles.horaire__icon}><i className="uil uil-map-marker-alt"></i></div>
                <div>1240 Avenue Mvvb</div>
             </div>
         </div>
    </section>
}