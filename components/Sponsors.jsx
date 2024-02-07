import styles from './Sponsors.module.css';
import Image from 'next/image';

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
            <a href="#"><Image src={Cite} alt="img1" /></a>
            <a href="#"><Image src={Unesco} alt="img1" /></a>
            <a href="#"><Image src={Google} alt="img1" /></a>
            <a href="#"><Image src={Unicef} alt="img1" /></a>
            <a href="#"><Image src={Oms} alt="img1" /></a>
        </div>
    </section>
}