'use client'
import { useState } from 'react';
import styles from './MenuNav.module.css'

export default function MenuNav({setPage}) {
    const [SousmenuProgramme, setSousmenuProgramme] = useState(false);
    const ProgramsClick = () => {
        setSousmenuProgramme(!SousmenuProgramme);
      };
    return <nav className={styles.nav}>
        <ul>
            <li>
            <a href="#" onClick={() => setPage('accueil')}>
                    Accueil
                </a>
            </li>
            <li>
                <a href="#">Anciens Evenements</a>
            </li>
            <li>
            <a href="#" onClick={ProgramsClick}>
            Programmes
            <span>
                {SousmenuProgramme ? '⮝' : '⮟'}
            </span>
          </a>
          {SousmenuProgramme && (
            <ul className={styles.subMenu}>
              <li>
              <a href="#" onClick={() => setPage('jour1')}>
                    Jour 1
                </a>
              </li>
              <li>
              <a href="#" onClick={() => setPage('jour2')}>
                    Jour 2
                </a>
              </li>
            </ul>
          )}
                
            </li>
            <li>
                <a href="#">Contacts</a>
            </li>
            <li>
                <a href="#">Inscription</a>
            </li>
        </ul>
    </nav>
}
