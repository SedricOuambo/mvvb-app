import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Sujet.module.css';
import Slider from '@/components/Slider'

export default function Sujet(props){
    return <section className={styles.section2}>
        <div className={ 
                        props.direction === 'inverser' ? 
                            styles.container + ' ' + 'container' + ' ' + styles.inverser 
                        : 
                            styles.container + ' ' + 'container' 
                        }>
            <div>
                <Slider
                    img1Url = {props.img1Url}
                    img2Url = {props.img2Url}
                    img3Url = {props.img3Url}
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