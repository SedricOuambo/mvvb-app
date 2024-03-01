import styles from './Sponsors.module.css';
import Image from 'next/image';
import Link from 'next/link';

import Cite from '@/public/img/sponsors/cite.png';
import Unesco from '@/public/img/sponsors/unesco.png';
import Google from '@/public/img/sponsors/google.png';
import Unicef from '@/public/img/sponsors/unicef.png';
import Oms from '@/public/img/sponsors/oms.jpeg';

/**
 * Section Sponsor
 * @returns Section Sponsor
 */
export default function Sponsors() {
    return <section className={styles.section}>
        <h1 className='title'> Nos sponsors</h1>
        <div className={styles.container__sponsors + ' ' + 'container'}>
            <Link href="https://www.collegelacite.ca/" target='_blank'><Image src={Cite} alt="img1"/></Link>
            <Link href="https://www.unesco.org/fr" target='_blank'><Image src={Unesco} alt="img1"/></Link>
            <Link href="https://www.google.com/" target='_blank'><Image src={Google} alt="img1" /></Link>
            <Link href="https://www.unicef.org/" target='_blank'><Image src={Unicef} alt="img1" /></Link>
            <Link href="https://www.un.org/youthenvoy/fr/2013/09/oms-lorganisation-mondiale-sante/" target='_blank'><Image src={Oms} alt="img1" />   </Link>
        </div>
    </section>
}