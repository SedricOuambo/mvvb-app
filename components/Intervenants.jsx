import styles from './Intervenants.module.css'
import Image from 'next/image'
import sedric_photo from '@/public/img/Sedric.png'
import otniel_photo from '@/public/img/Otniel.jpg'
import gladice_photo from '@/public/img/Gladice.png'
import invite_photo from '@/public/img/Invite.png'
/**
 * 
 * @returns Section des intervenants
 */
export default function Intervenants() {
    return <section className={styles.section}>
        <h1 className='title'> Les intervenants</h1>
        <div className={styles.grid + ' ' + 'container'}>
            {/* Intervenant1 */}
            <div className={styles.card}>
                <Image src={sedric_photo} alt='Sedric-photo' />
                <div className={styles.Intervenant_title}>
                    <h2>Sedric Ouambo</h2>
                    <h3>Intervenant 1</h3>
                </div>
                <h2>Collège la Cité</h2>
                <div className={styles.Intervenant_social_media}>
                    <a href="#"><i className="uil uil-twitter" /></a>
                    <a href="#"><i className="uil uil-facebook-f" /></a>
                    <a href="#"><i className="uil uil-instagram-alt" /></a>
                </div>
            </div>

            {/* Intervenant2 */}
            <div className={styles.card}>
                <Image src={otniel_photo} alt='Otniel-photo' />
                <div className={styles.Intervenant_title}>
                    <h2>Christin Otniel</h2>
                    <h3>Intervenant 2</h3>
                </div>
                <h2>Collège la Cité</h2>
                <div className={styles.Intervenant_social_media}>
                    <a href="#"><i className="uil uil-twitter" /></a>
                    <a href="#"><i className="uil uil-facebook-f" /></a>
                    <a href="#"><i className="uil uil-instagram-alt" /></a>
                </div>
            </div>

            {/* Intervenant3 */}
            <div className={styles.card}>
                <Image src={gladice_photo} alt='Gladice-photo' />
                <div className={styles.Intervenant_title}>
                    <h2>Doudou Gladice</h2>
                    <h3>Intervenant 3</h3>
                </div>
                <h2>Collège la Cité</h2>
                <div className={styles.Intervenant_social_media}>
                    <a href="#"><i className="uil uil-twitter" /></a>
                    <a href="#"><i className="uil uil-facebook-f" /></a>
                    <a href="#"><i className="uil uil-instagram-alt" /></a>
                </div>
            </div>

            {/* Intervenant4 */}
            <div className={styles.card}>
                <Image src={invite_photo} alt='Invite-photo' />
                <div className={styles.Intervenant_title}>
                    <h2>Invité</h2>
                    <h3>Intervenant 4</h3>
                </div>
                <h2>Collège la Cité</h2>
                <div className={styles.Intervenant_social_media}>
                    <a href="#"><i className="uil uil-twitter" /></a>
                    <a href="#"><i className="uil uil-facebook-f" /></a>
                    <a href="#"><i className="uil uil-instagram-alt" /></a>
                </div>
            </div>

            {/* Intervenant5 */}
            <div className={styles.card}>
                <Image src={invite_photo} alt='Invite-photo' />
                <div className={styles.Intervenant_title}>
                    <h2>Invité</h2>
                    <h3>Intervenant 5</h3>
                </div>
                <h2>Collège la Cité</h2>
                <div className={styles.Intervenant_social_media}>
                    <a href="#"><i className="uil uil-twitter" /></a>
                    <a href="#"><i className="uil uil-facebook-f" /></a>
                    <a href="#"><i className="uil uil-instagram-alt" /></a>
                </div>
            </div>

            {/* Intervenant6 */}
            <div className={styles.card}>
                <Image src={invite_photo} alt='Invite-photo' />
                <div className={styles.Intervenant_title}>
                    <h2>Invité</h2>
                    <h3>Intervenant 6</h3>
                </div>
                <h2>Collège la Cité</h2>
                <div className={styles.Intervenant_social_media}>
                    <a href="#"><i className="uil uil-twitter" /></a>
                    <a href="#"><i className="uil uil-facebook-f" /></a>
                    <a href="#"><i className="uil uil-instagram-alt" /></a>
                </div>
            </div>
        </div>
    </section>
}