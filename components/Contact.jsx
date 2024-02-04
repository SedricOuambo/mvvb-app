import styles from './Contact.module.css'
/**
 * Formulaire pour contacter
 * @returns Section Contact
 */
export default function Contact() {
    return <section className={styles.section}>
        <h1 className='title'> Contactez nous!</h1>
        <div className={styles.grid + ' ' + styles.contact__container + ' ' + 'container'}>
            <div className={styles.contact__information_content}>
                <div className={styles.contact__information}>
                    <a href="tel:+18999999999" target="_blank" className={styles.contact__information}>
                        <i className={styles.contact__icon + ' ' + 'uil uil-phone'}></i>
                        <div>
                            <h3 className={styles.contact__title + ' ' + styles.call__me}>Appel</h3>
                            <span className={styles.contact__subtitle}>+1 899-99-9999</span>
                        </div>
                    </a>
                </div>

                <div className={styles.contact__information}>
                    <a href="mailto:mvvb-app@gmail.com" target="_blank" className={styles.contact__information}>
                        <i className={styles.contact__icon + ' ' + 'uil uil-envelope'}></i>
                        <div>
                            <h3 className={styles.contact__title + ' ' + styles.email}>Courriel</h3>
                            <span className={styles.contact__subtitle}>mvvb-app@gmail.com</span>
                        </div>
                    </a>
                </div>

                <div className={styles.contact__information}>
                    <a href="https://wa.me/+1 899-99-9999" target="_blank" className={styles.contact__information}>
                        <i className={styles.contact__icon + ' ' + 'uil uil-whatsapp'}></i>
                        <div>
                            <h3 className={styles.contact__title}>Whatsapp</h3>
                        </div>
                    </a>
                </div>

                <div className={styles.contact__information}>
                    <i className={styles.contact__icon + ' ' + 'uil-map-marker'}></i>
                    <div>
                        <h3 className={styles.contact__title + ' ' + styles.email}>Adresse</h3>
                        <span className={styles.contact__subtitle}>1240 Avenue Mvvb</span>
                    </div>
                </div>
            </div>

            <form className={styles.grid}>
                <div className={styles.grid + ' ' + styles.contact__inputs}>
                    <div className={styles.contact__content}>
                        <label className={styles.contact__label + ' ' + styles.input__name}>Nom</label>
                        <input type="text" className={styles.contact__input} />
                    </div>
                    <div className={styles.contact__content}>
                        <label className={styles.contact__label + ' ' + styles.input__email}>Email</label>
                        <input type="email" className={styles.contact__input} />
                    </div>
                </div>
                <div className={styles.contact__content + ' ' + styles.contact__form}>
                    <label className={styles.contact__label}>Message</label>
                    <textarea name="" id="" cols="0" rows="7" className={styles.contact__input}></textarea>
                </div>

                <div>
                    <input type="submit" value="Envoyer message" className={styles.button + ' ' + styles.button__flex} />
                </div>
            </form>
        </div>
    </section>
}