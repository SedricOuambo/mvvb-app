'use client'
import { useState } from 'react';
import Image from 'next/image'
import styles from './MenuNav.module.css'
import logo from '@/public/img/logo.jpg'
import { FaBars } from "react-icons/fa"
import { BiTrash } from "react-icons/bi"

/**
 * Gestion du Menu 
 * @param {setPage} param0 
 * @returns rien
 */
export default function MenuNav({ setPage }) {

    const [toggleIcon, setToggleIcon] = useState(false);
    const [active, setActive] = useState(false);

    const navToggle = () => {
        setToggleIcon(!toggleIcon);
        setActive(!active);
    }

    const [SousmenuProgramme, setSousmenuProgramme] = useState(false);
    const ProgramsClick = () => { setSousmenuProgramme(!SousmenuProgramme); } //Pour derouler le programme
    const jour1Click = () => { ProgramsClick(); setPage('jour1'); }          //Gestion du clic pour afficher le jour1
    const jour2Click = () => { ProgramsClick(); setPage('jour2'); }           //Gestion du clic pour afficher le jour2

    return <nav className={styles.nav}>
        <a href="#" className={styles.nav__brand} onClick={() => setPage('accueil')}>
            <Image src={logo} alt="Logo mvvb" />
            <h1>MVVB</h1>
        </a>
        <div className={styles.nav__menu + ' ' + (active && styles.nav__active)}>
            <div><a href="#" onClick={() => setPage('accueil')} className={styles.nav__link}> Accueil </a></div>
            <div><a href="#">Anciens Evenements</a></div>
            <div>
                <div>
                    <a href="#" onClick={ProgramsClick}>
                        Programmes
                        <span>
                            {SousmenuProgramme ? '⮝' : '⮟'}
                        </span>
                    </a>
                </div>
                <div className={styles.subMenu + ' ' + (!SousmenuProgramme && styles.sub__menu_hiden)}>
                    <a href="#" onClick={jour1Click}>Jour 1</a>
                    <a href="#" onClick={jour2Click}>Jour 2</a>
                </div>
            </div>
            <div><a href="#">Contacts</a></div>
            <div><a href="#">Inscription</a></div>
        </div>
        <div onClick={navToggle} className={styles.nav__toggler}>{toggleIcon ? <BiTrash /> : <FaBars />}</div>
    </nav>
}
