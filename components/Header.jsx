import MenuNav from './MenuNav'
import Image from 'next/image'
import styles from './Header.module.css'

import logo from '@/public/logo mvvb.jpg'

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.title}>
        <Image src={logo} alt="Logo mvvb" />
            <h1>MVVB</h1>
            <MenuNav />
        </div>
        
    </header>
}