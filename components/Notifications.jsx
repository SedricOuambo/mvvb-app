import styles from './Notifications.module.css'

/**
 * Setion des notifications
 * @returns Setion des notifications
 */
export default function Notifications() {
    return <section className={styles.section}>
        <h1 className='title'> Notifications</h1>
        <div className={styles.container + ' ' + 'container'}>
            <p>Voulez-vous recevoir les notifications pour les événements à venir ?</p>
            <form>
                <div className={styles.notifications_form}>
                    <input type="text" placeholder='Votre email' />
                    <input type="submit" value="Souscrire" />
                </div>
            </form>
        </div>
    </section>
}