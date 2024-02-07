'use client';
import styles from './Programme.module.css';
/**
 * Section Programme de l'evenement
 * @returns 
 */
export default function Programme() {
    return <section className={styles.section}>
        <h1 className='title'> Programme</h1>
        <div className='container'>
                <div className="day">
                    <h2 className="h2">Jour 1 : L'Alimentation</h2>
                    <ul className="ul">
                        <li>08:00 - 09:00 : Discours d'ouverture</li>
                        <li>09:00 - 11:00 : Session 1 - MANGER BON ET BIEN, POUR LE PLAISIR ET LA SANTÉ!</li>
                        <li>11:10 - 13:00 : Session 2 - LES ALIMENTS : DES ALLIÉS POUR NOTRE IMMUNITÉ!</li>
                        <li>13:10 - 14:00 : PAUSE CAFE</li>
                        <li>14:10 - 15:10 : Session 3 - AVEZ-VOUS BOUGÉ AUJOURD’HUI?</li>
                        <li>15:20 - 16:20 : Session 4 - OPTIMISEZ VOTRE ENTRAÎNEMENT</li>
                    </ul>
                </div>
                <div className="day">
                    <h2 className="h2">Jour 2 : Comprendre la Psychologie Humaine</h2>
                    <ul className="ul">
                    <li>08:00 - 09:00 : Resume des themes aborder le jour precedent</li>
                        <li>09:00 - 11:00 : Session 1 - LA ROBUSTESSE PSYCHOLOGIQUE</li>
                        <li>11:10 - 13:00 : Session 2 - INITIATION À LA PLEINE CONSCIENCE!</li>
                        <li>13:10 - 14:00 : PAUSE CAFE</li>
                        <li>14:10 - 15:10 : Session 3 - STRESSÉ(E), JE REPRENDS LE CONTRÔLE! STRESSÉ(E), JE PASSE À L’ACTION!</li>
                        <li>15:20 - 16:20 : Session 4 - LE REPOS EFFICACE : UN PILIER ESSENTIEL POUR MAXIMISER SA PERFORMANCE ET SA SANTÉ</li>
                    </ul>
                </div>
            </div>
    </section>
}