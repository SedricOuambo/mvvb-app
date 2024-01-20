import styles from './MenuNav.module.css'

export default function MenuNav() {
    return <nav className={styles.nav}>
        <ul>
            <li>
                <a href="#">Accueil</a>
            </li>
            <li>
                <a href="#">Ancien Evenements</a>
            </li>
            <li>
                <a href="#">Enregistrement</a>
            </li>
            <li>
                <a href="#">Programmes</a>
            </li>
            <li>
                <a href="#">Contacts</a>
            </li>
        </ul>
    </nav>
}