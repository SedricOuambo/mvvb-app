import styles from './MenuNav.module.css'

export default function MenuNav() {
    return <nav className={styles.nav}>
        <ul>
            <li>
                <a href="#">Accueil</a>
            </li>
            <li>
                <a href="#">Anciens Evenements</a>
            </li>
            <li>
                <a href="#">Programmes</a>
            </li>
            <li>
                <a href="#">Contacts</a>
            </li>
            <li>
                <a href="#">Inscription</a>
            </li>
        </ul>
    </nav>
}