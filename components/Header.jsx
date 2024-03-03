import MenuNav from './MenuNav';
import styles from './Header.module.css';
/**
 * Entete
 * @param {setPage} param0 
 * @returns 
 */
export default function Header() {
    return <header className={styles.header}>
        <MenuNav/>
    </header>
}
