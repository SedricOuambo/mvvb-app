import styles from './Bannierre.module.css'

export default function Bannierre() {
    return <section className={styles.banner}>
        
        <span>MVVB</span>  
        
       
            <div className={styles.Chronometre}>
                <div className={styles.decopmte}>
                <div className={styles.time}>00:</div>
                <div className={styles.label}>JOURS</div>
                </div>
                <div className={styles.decopmte}>
                <div className={styles.time}>00:</div>
                <div className={styles.label}>HEURES</div>
                </div>
                <div className={styles.decopmte}>
                <div className={styles.time}>00:</div>
                <div className={styles.label}>MINUTES</div>
                </div>
                <div className={styles.decopmte}>
                <div className={styles.time}>00</div>
                <div className={styles.label}>SECONDES</div>
                </div>
            </div>
        
            <p>Mieux Vivre et Vivre Bien</p>
        
        
    </section>
}