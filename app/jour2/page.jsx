import styles from '@/components/Jour2.module.css';
import Sujet from '../../components/Sujet';
import robu1 from '@/public/img/jour2img/sujet1img/robu1.jpg';
import robu2 from '@/public/img/jour2img/sujet1img/robu2.jpg';
import cons1 from '@/public/img/jour2img/sujet2img/cons1.png';
import cons2 from '@/public/img/jour2img/sujet2img/cons2.jpg';
import cons3 from '@/public/img/jour2img/sujet2img/cons3.jpeg';
import pause1 from '@/public/img/jour2img/pause/pause1.jpg';
import pause2 from '@/public/img/jour2img/pause/pause2.jpg';
import pause3 from '@/public/img/jour2img/pause/pause3.jpeg';
import stress1 from '@/public/img/jour2img/sujet3img/stress1.jpg';
import repos1 from '@/public/img/jour2img/sujet4img/repos1.jpeg';
import repos2 from '@/public/img/jour2img/sujet4img/repos2.jpeg';
import repos3 from '@/public/img/jour2img/sujet4img/repos3.jpeg';

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: 'Mvvb-app | Jour2 : Psychologie humaine',
    description: 'Presentation des activités du deuxième jour de notre conférence',
    openGraph: {
        title: 'Mvvb-app | Jour2 : Psychologie humaine',
        description: 'Presentation des activités du deuxième jour de notre conférence',
        images: ['/logo_mvvb.png']
    }
}

/**
 * Page du contenu de la deuxieme journee de l'evenement
 * @returns jour2
 */
export default function Jour2() {
    let contenu1 = " Saviez-vous qu’il existe un ensemble d’attitudes et\n" +
        "d’habiletés qui procure le courage, la motivation et les ressources nécessaires pour passer à l’action de manière, \n" +
        "efficace face aux situations stressantes? C’est la robustesse psychologique. \n" +
        " Apprenez comment la développer et comment influencer votre biologie, vos\n" +
        " hormones et vos neurotransmetteurs par d’autres moyens que la médication, afin de favoriser le fonctionnement\n" +
        "optimal de votre organisme.";

    let contenu2 = "Nous avons accès à toutes sortes d’informations en même temps et notre esprit est de plus en plus dispersé. \n" +
        " La pleine conscience est idéale pour reprendre le contrôle.  \n" +
        " On peut l’insérer dans notre quotidien, elle peut se faire partout et à \n" +
        "tout moment (dans le trafic, dans nos réunions, à l’épicerie, à l’hôpital, en faisant la vaisselle, en marchant, \n" +
        " en mangeant…). Les bienfaits croissent avec l’usage!";


    let contenu3 = "Ces deux ateliers pratico-pratiques et ludiques de 60 minutes offrent des outils pertinents et des astuces pour comprendre et mieux gérer son stress. \n" +
        "Le premier atelier vise à vous faire connaître les techniques de défusion. Comment faire taire ce petit hamster qui ne cesse de nous stresser. \n" +
        " Démystification de la perception. Le mot RADAR sera utilisé dans les 2 ateliers. \n" +
        "Respirer (prendre le temps de respirer avant de vivre son émotion c’est faisable?); Analyser (la respiration prise avant de passer à l’action… celle d’analyser!); \n" +
        " Distance (comment prendre de la distance face à une situation). \n" +
        "Le deuxième atelier vous aidera à consolider ce que vous avez appris dans le premier. 2 lettres seront ajoutées : \n" +
        "Action Réfléchies (comment passer à l’action de façon plus détendu) \n" +
        "Identifier vos valeurs et vos besoins \n" +
        "Exercer votre créativité et osez!";

    let contenu4 = "L’importance du repos, prendre des pauses, pourquoi est-ce si important? On le sait mais le fait-on vraiment? \n" +
        " Nous avons tous tendance à minimiser nos symptômes de fatigue et notre déficit de repos, \n" +
        " ce qui peut nous amener à réagir parfois trop tard pour récupérer et éviter l’épuisement. \n" +
        " On nous enseigne que la meilleure façon de ne pas être déshydraté est de boire régulièrement de l’eau… \n" +
        "devrions-nous aussi développer l’habitude de se reposer AVANT d’être fatigué? \n" +
        "Se reposer permet de retrouver notre vie, renouveler notre énergie et restaurer notre santé mentale. \n" +
        "Pour continuer de s’adapter à long terme, on doit prendre soin de renouveler \n" +
        "régulièrement notre réserve d’énergie disponible et pour ça, \n" +
        "on peut apprendre non pas seulement à se reposer plus, mais mieux!";

    return <>
        {/* Appel du component Sujet pour ajouter les differents sujets du jour2 */}
        <div className={styles.dayTitle}>Journée du 13 Février 2024: Comprendre la Psychologie Humaine</div>
        <Sujet
            heure="9H00 - 11H00"
            img1Url={robu1}
            img2Url={robu2}
            img3Url={robu2}
            titre_contenu="LA ROBUSTESSE PSYCHOLOGIQUE"
            contenu={contenu1}
            direction=''
        />

        <Sujet
            heure="11H10 - 13H00"
            img1Url={cons1}
            img2Url={cons2}
            img3Url={cons3}
            titre_contenu="INITIATION À LA PLEINE CONSCIENCE!"
            contenu={contenu2}
            direction='inverser'
        />

        <Sujet
            heure="13H10 - 14H00"
            img1Url={pause1}
            img2Url={pause2}
            img3Url={pause3}
            titre_contenu="PAUSE CAFE"
            direction=''
        />

        <Sujet
            heure="14H10 - 15H10"
            img1Url={stress1}
            img2Url={stress1}
            img3Url={stress1}
            titre_contenu="STRESSÉ(E), JE REPRENDS LE CONTRÔLE! STRESSÉ(E), JE PASSE À L’ACTION!"
            contenu={contenu3}
            direction='inverser'
        />

        <Sujet
            heure="15H20 - 16H20"
            img1Url={repos1}
            img2Url={repos2}
            img3Url={repos3}
            titre_contenu="LE REPOS EFFICACE : UN PILIER ESSENTIEL POUR MAXIMISER SA PERFORMANCE ET SA SANTÉ"
            contenu={contenu4}
            direction=''
        />
    </>
}