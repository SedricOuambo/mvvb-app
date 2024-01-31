import Image from 'next/image';
import styles from './Section1.module.css'

import Image1 from '@/public/Image1.jpg'

export default function Section1() {
    return <section className={styles.section1}>
         <Image src={Image1} alt="Image1" />
         <h1>Bienvenue sur mvvb-app : Bien Vivre et Vivre Mieux</h1>
        
    </section>
}