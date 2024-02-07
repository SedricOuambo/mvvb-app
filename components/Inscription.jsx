import styles from './Inscription.module.css';
/**
 * Section inscription
 * @returns Section inscription
 */
export default function Inscription() {
    return <section className={styles.section}>
        <h1 className='title'> Inscription</h1>
        <div className={styles.form + ' ' + styles.inscription__container + ' ' + 'container'}>
            <h2>Veuillez vous inscrire</h2>
            <form className={styles.form}>
                <div className={styles.form + ' ' + styles.inscription__inputs}>
                    <div className={styles.inscription__content}>
                        <label className={styles.inscription__label + ' ' + styles.input__name}>Nom:</label>
                        <input type="text" className={styles.inscription__input} />
                    </div>
                    <div className={styles.inscription__content}>
                        <label className={styles.inscription__label + ' ' + styles.input__name}>Prenom:</label>
                        <input type="text" className={styles.inscription__input} />
                    </div>
                    <div className={styles.inscription__content}>
                        <label className={styles.inscription__label + ' ' + styles.input__name}>Courriel:</label>
                        <input type="text" className={styles.inscription__input} />
                    </div>
                    <div className={styles.inscription__content}>
                        <label className={styles.inscription__label + ' ' + styles.input__name}>Telephone:</label>
                        <input type="text" className={styles.inscription__input} />
                    </div>
                </div>
                <div>
                    <p>Veuillez selectionner ce qui s'applique a vous :</p>
                    <div className={styles.inscription__choix}>
                        <div className={styles.inscription__choixcomposants}>
                            <input type="checkbox" />
                            <p>Je suis Etudiant</p>
                        </div>
                        <div className={styles.inscription__choixcomposants}>
                            <input type="checkbox" />
                            <p>Je suis professionnel</p>
                        </div>
                        <div className={styles.inscription__choixcomposants}>
                            <input type="checkbox" />
                            <p>Je suis entrepreneur</p>
                        </div>
                        <div className={styles.inscription__choixcomposants}>
                            <input type="checkbox" />
                            <p>Autres</p>
                        </div>
                    </div>
                </div>
                <div><input type="submit" value="S'inscrire" className={styles.button + ' ' + styles.button__flex} /></div>
            </form>
        </div>
    </section>
}
