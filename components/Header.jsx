import MenuNav from './MenuNav'
import Image from 'next/image'
import styles from './Header.module.css'
import logo from '@/public/img/logo.jpg'

export default function Header() {
    return <header className={styles.header}>
        {/* UNICONS  */}
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
        <div className={styles.title}>
        <Image src={logo} alt="Logo mvvb" />
            <h1>MVVB</h1>
            <MenuNav />
        </div>
    </header>
}
