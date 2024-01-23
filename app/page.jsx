import Bannierre from '@/components/Bannierre'
import Presentation from '@/components/Presentation'
import Horaire from '@/components/Horaire'
import Programme from '@/components/Programme'
import Intervenants from '@/components/Intervenants'
import Sponsors from '@/components/Sponsors'
import Inscription from '@/components/Inscription'
import Contact from '@/components/Contact'
import Notifications from '@/components/Notifications'
import styles from './page.module.css'

export default function Home() {
  return <main className={styles.main}>
    <Bannierre/>
    <Presentation/>
    <Horaire/>
    <Programme/>
    <Intervenants/>
    <Sponsors/>
    <Inscription/>
    <Contact/>
    <Notifications/>
    </main>
}
