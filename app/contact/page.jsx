import styles from '@/components/Contact.module.css';
import { FaInstagram, FaFacebookF, FaBlenderPhone, FaWhatsapp, FaTwitter } from "react-icons/fa";
import Image from 'next/image';

/**
 * Page du contenu de la page de contact
 * @returns Contact
 */
export default function Contact() {
    return <>
        <div className={styles.container__contact}>
            <div className={styles.form__info}>
                <div className={styles.contact_info_contact}>
                    <h3 className={styles.title}>On reste en contact?</h3>
                    <p className={styles.text}>
                        Vous souhaitez nous contactez, avoir davantages d'informations
                        sur Entraide App ou tout simplement papoter, Nous sommes joignables
                        par téléphone, WhatsApp ou email.
                    </p>

                    <div className={styles.info}>
                        <div className={styles.information}>
                            <a href="tel:+18193199747" target="_blank" className={styles.contact__information}>
                                <FaBlenderPhone className={styles.icon} />
                                <h3>+18999999999</h3>
                            </a>
                        </div>
                        <div className={styles.information}>
                            <a href="https://wa.me/+18999999999" target="_blank" className={styles.contact__information}>
                                <FaWhatsapp className={styles.icon} />
                                <h3>Whatsapp</h3>
                            </a>
                        </div>
                    </div>

                    <div className={styles.social__media}>
                        <p>Nous sommes aussi ici:</p>
                        <div className={styles.social_icons_container}>
                            <a href="#"> <FaFacebookF className={styles.icon} /> </a>
                            <a href="#"> <FaTwitter className={styles.icon} /></a>
                            <a href="#"><FaInstagram className={styles.icon} /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.contact_form}>
                    <span className={styles.circle + ' ' + styles.one}></span>
                    <span className={styles.circle + ' ' + styles.two}></span>

                    <form action="">
                        <p className={styles.title}>Envoyer un email</p>
                        <p className={styles.subtitle}>Nous reviendrons vers vous dans les brefs delais. Promis!</p>

                        <div><input type="text" name="name" placeholder='Votre nom' /></div>
                        <div><input type="email" name="email" placeholder='Votre email' /></div>
                        <div><input type="tel" name="phone" placeholder='Votre N° de téléphone' /> </div>
                        <div><input type="text" name="object" placeholder='Objet de votre message' /> </div>
                        <div><textarea name="message" placeholder='Votre message'></textarea></div>
                        <div className={styles.btn_bloc}>
                            <input type="reset" value="Effacer" className={styles.button + ' ' + styles.btn} />
                            <input type="submit" value="Envoyer" className={styles.button + ' ' + styles.btn} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}