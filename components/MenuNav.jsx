'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './MenuNav.module.css';
import logo from '@/public/img/logo.jpg';
import { FaBars } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

/**
 * Gestion du Menu 
 * @param {setPage} param0 
 * @returns rien
 */
export default function MenuNav() {

    const [toggleIcon, setToggleIcon] = useState(false);
    const [active, setActive] = useState(false);

    const navToggle = () => {
        setToggleIcon(!toggleIcon);
        setActive(!active);
    }

    const pathName = usePathname();

    return <nav className={styles.nav}>
        <Link href="/" className={styles.nav__brand}>
            <Image src={logo} alt="Logo mvvb" />
            <h1>MVVB</h1>
        </Link>
        <div className={styles.nav__menu + ' ' + (active && styles.nav__active)}>
            <div>
                <Link href="/"
                    className={styles.menu_color + ' ' + (pathName === '/' ? styles.active__menu : "")}>
                    Accueil
                </Link>
            </div>
            <div>
                <Link href="/jour1"
                    className={styles.menu_color + ' ' + (pathName === '/jour1' ? styles.active__menu : "")}>
                    Jour 1
                </Link>
            </div>
            <div>
                <Link href="/jour2"
                    className={styles.menu_color + ' ' + (pathName === '/jour2' ? styles.active__menu : "")}>
                    Jour 2
                </Link>
            </div>
            <div>
                <Link href="/contact"
                    className={styles.menu_color + ' ' + (pathName === '/contact' ? styles.active__menu : "")}>
                    Contact
                </Link>
            </div>
        </div>
        <div onClick={navToggle} className={styles.nav__toggler}>{toggleIcon ? <BiTrash /> : <FaBars />}</div>
    </nav>
}
