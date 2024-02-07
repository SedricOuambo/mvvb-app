import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Sujet.module.css';
import Slider from '@/components/Slider';
/**
 * Utilise pour afficher les differents sujet d'un jour de l'evenement.
 * Chaque sujet contient 2 blocs (un pour les imgages qui defilent et un autre pour le contenu)
 * L'affichage est inversee d'un sujet a un autre (Sujet 1 = img a gauche, sujet 2 = img a droite ...)
 * @param {*} props 
 * @returns Sujet
 */
export default function Sujet(props) {
    return <section className={styles.section2}>
        {/* La classe inverser permet d'inverser l'affichage des sujets */}
        <div className={styles.container + ' ' + 'container' + ' ' + (props.direction === 'inverser' && styles.inverser)}>
            <div>
                <Slider
                    img1Url={props.img1Url}
                    img2Url={props.img2Url}
                    img3Url={props.img3Url}
                />
            </div>
            <div>
                <p className={styles.heure}>{props.heure}</p>
                <div>
                    <p className={styles.titre}>{props.titre_contenu}</p>
                    <div className={styles.contenu}>{props.contenu}</div>
                </div>
            </div>
        </div>
        <div className={styles.separateur}></div>
    </section>
}