'use client'
import { useState } from 'react';
import Image from 'next/image'
import styles from './MenuNav.module.css'
import logo from '@/public/img/logo.jpg'
import {FaBars, FaTrash} from "react-icons/fa"
import {BiTrash} from "react-icons/bi"

export default function MenuNav({setPage}) {

    const [toggleIcon, setToggleIcon] = useState(false);
    const [active, setActive] = useState(false);

    const navToggle = () => { 
        setToggleIcon(!toggleIcon);
        setActive(!active);
    }

    const [SousmenuProgramme, setSousmenuProgramme] = useState(false);
    const ProgramsClick = () => {
        setSousmenuProgramme(!SousmenuProgramme);
    };

    return <nav className={styles.nav}>
        <a href="#" className={styles.nav__brand}>
            <Image src={logo} alt="Logo mvvb" />
            <h1>MVVB</h1>
        </a>
        <div className={ active 
                                ? styles.nav__menu +' '+ styles.nav__active
                                : styles.nav__menu}>
            <div>
                <a href="#" onClick={() => setPage('accueil')} className={styles.nav__link}>
                    Accueil
                </a>
            </div>
            <div>
                <a href="#">Anciens Evenements</a>
            </div>
            <div>
                <div>
                    <a href="#" onClick={ProgramsClick}>
                        Programmes
                        <span>
                            {SousmenuProgramme ? '⮝' : '⮟'}
                        </span>
                    </a>
                </div>
                {SousmenuProgramme && (
                <div className={styles.subMenu}>
                    <a href="#" onClick={() => setPage('jour1')}>
                        Jour 1
                    </a>
                    <a href="#" onClick={() => setPage('jour2')}>
                        Jour 2
                    </a>
                </div>  
                )}
            </div>
            <div>
                <a href="#">Contacts</a>
            </div>
            <div>
                <a href="#">Inscription</a>
            </div>
        </div>
        <div onClick={navToggle} className={styles.nav__toggler}>
            {toggleIcon
                ? <BiTrash/>
                : <FaBars/>
            }
        </div>
    </nav>
}
