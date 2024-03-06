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

    const [SousmenuProgramme, setSousmenuProgramme] = useState(false);
    const ProgramsClick = () => { setSousmenuProgramme(!SousmenuProgramme); } //Pour derouler le programme
    const jour1Click = () => { ProgramsClick(); }          //Gestion du clic pour afficher le jour1
    const jour2Click = () => { ProgramsClick(); }           //Gestion du clic pour afficher le jour2

    return <nav className={styles.nav}>
        <Link href="/" className={styles.nav__brand}>
            <Image src={logo} alt="Logo mvvb" />
            <h1>MVVB</h1>
        </Link>
        <div className={styles.nav__menu + ' ' + (active && styles.nav__active)}>
            <div><Link href="/" className={styles.nav__link}> Accueil </Link></div>
            <div><Link href="#">Anciens Evenements</Link></div>
            <div>
                <div onClick={ProgramsClick} className={styles.program}>
                    Programmes
                    <span>
                        {SousmenuProgramme ? '⮝' : '⮟'}
                    </span>
                </div>
                <div className={styles.subMenu + ' ' + (!SousmenuProgramme && styles.sub__menu_hiden)}>
                    <Link href="/jour1" onClick={jour1Click}>Jour 1</Link>
                    <Link href="/jour2" onClick={jour2Click}>Jour 2</Link>
                </div>
            </div>
            <div><Link href="/contact">Contact</Link></div>
            <div><Link href="#">Inscription</Link></div>
        </div>
        <div onClick={navToggle} className={styles.nav__toggler}>{toggleIcon ? <BiTrash /> : <FaBars />}</div>
    </nav>
}
