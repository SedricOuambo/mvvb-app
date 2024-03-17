'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './MenuNav.module.css';
import logo from '@/public/img/logo.jpg';
import { FaBars } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
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

    return <nav className={styles.nav}>
        <Link href="/" className={styles.nav__brand}>
            <Image src={logo} alt="Logo mvvb" />
            <h1>MVVB</h1>
        </Link>
        <div className={styles.nav__menu + ' ' + (active && styles.nav__active)}>
            <div><Link href="/"> Accueil </Link></div>
            <div><Link href="/jour1">Jour 1</Link></div>
            <div><Link href="/jour2">Jour 2</Link></div>
            <div><Link href="/contact">Contact</Link></div>
        </div>
        <div onClick={navToggle} className={styles.nav__toggler}>{toggleIcon ? <BiTrash /> : <FaBars />}</div>
    </nav>
}
