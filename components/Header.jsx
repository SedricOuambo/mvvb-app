import MenuNav from './MenuNav'
import styles from './Header.module.css'

export default function Header({setPage}) {
    return <header className={styles.header}>
            <MenuNav setPage={setPage}/>
    </header>
}
