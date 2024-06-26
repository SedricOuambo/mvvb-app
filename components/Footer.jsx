import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import styles from './Footer.module.css';

/**
 * Pied de page
 * @returns Footer
 */
export default function Footer() {
    return <footer className={styles.footer}>
        <div className={styles.container + ' ' + 'container'}>
            <div className={styles.row1}>
                {/* column1 */}
                <div className={styles.col + ' ' + styles.footer__mvvb}>
                    <div>Mvvb</div>
                    <p>Prenez soin de votre santé physique et mental grâce à notre conférence internationale.</p>
                </div>
                <div className={styles.footer_social}>
                    <a href="#" target="_blank" aria-label="Facebook"><FaFacebookF className={styles.icon} /></a>
                    <a href="#" target="_blank" aria-label="Twitter"><FaTwitter className={styles.icon} /></a>
                    <a href="#" target="_blank" aria-label="Instagram"><FaInstagram className={styles.icon} /></a>
                </div>
            </div>

            <div className={styles.footer__horaire}>
                {/* column2 */}
                <div className={styles.col}>
                    <p>Date</p>
                    <div> Du 12/02/2024 au 15/02/2024</div>
                </div>
                {/* column3 */}
                <div className={styles.col}>
                    <p>Adresse</p>
                    <div> 1240 avenue mvvb</div>
                </div>
                {/* column4 */}
                <div className={styles.col}>
                    <p>Contact</p>
                    <span className={styles.footer__contact}>
                        <div>mvvb@gmail.com</div>
                        <div>+1 816 999 999</div>
                    </span>
                </div>
            </div>

            <div className={styles.separator}></div>

            <div className={styles.copyright}>
                &copy; Copyright Collège la Cité - Hiver 2024
            </div>
        </div>
    </footer>
}