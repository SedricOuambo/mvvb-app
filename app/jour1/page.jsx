import styles from '@/components/Jour1.module.css';
import Sujet from '../../components/Sujet';
import img1Sujet1 from '@/public/img/sujet1_1.jpg';
import img2Sujet1 from '@/public/img/sujet1_2.jpg';
import img3Sujet1 from '@/public/img/sujet1_3.jpg';
import img1Sujet2 from '@/public/img/sujet2_1.jpg';
import img2Sujet2 from '@/public/img/sujet2_2.jpg';
import img3Sujet2 from '@/public/img/sujet2_3.jpg';
import img1Sujet3 from '@/public/img/pause.jpeg';
import img2Sujet3 from '@/public/img/pause2.jpeg';
import img3Sujet3 from '@/public/img/pause3.jpeg';
import img1Sujet4 from '@/public/img/physique1.jpeg';
import img2Sujet4 from '@/public/img/physique2.jpg';
import img3Sujet4 from '@/public/img/physique3.png';
import img1Sujet5 from '@/public/img/physique4.jpeg';
import img2Sujet5 from '@/public/img/physique5.jpg';
import img3Sujet5 from '@/public/img/physique6.jpeg';

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: 'Mvvb-app | Jour1 : Alimentation',
    description: 'Presentation des activités du premier jour de notre conférence',
    openGraph: {
        title: 'Mvvb-app | Jour1 : Alimentation',
        description: 'Presentation des activités du premier jour de notre conférence',
        images: ['./logo_mvvb.png']
    }
}

/**
 * Page du contenu de la premiere journee de l'evenement
 * @returns Jour1
 */
export default function Jour1() {
    //Definiton des contenus des differents sujets
    let contenu1 = "Vous voulez prendre plaisir à bien manger \n" +
        "mais vous n’avez pas d’idées? Le quinoa, les fèves edamame, \n" +
        "ça mange quoi en hiver? Les étiquettes nutritionnelles sont \n" +
        "un vrai casse-tête? Cette conférence a pour but de vous apprendre \n" +
        "tous les principes de base et des méthodes simples afin d’améliorer vos \n" +
        "habitudes alimentaires!";

    let contenu2 = "Adopter de saines habitudes de vie est le meilleur bouclier \n" +
        "pour combattre les envahisseurs externes. Or, il est maintenant \n" +
        "scientifiquement prouvé que les milliards de bactéries qui logent \n" +
        "dans le microbiote intestinal peuvent influencer la santé physique \n" +
        "et mentale. Dans cette conférence, découvrez les aliments clés pour \n" +
        "favoriser un microbiote sain et du coup, améliorer votre réponse \n" +
        "immunitaire envers les virus et les maladies.";

    let contenu3 = "Apprenez comment utiliser l’activité physique comme puissant médicament \n" +
        "et ainsi lutter contre les maladies comme le diabète, l’hypertension et \n" +
        "la dépression. De plus, identifiez le meilleur exercice pour perdre du poids \n" +
        "et à quelle intensité le pratiquer. Pour améliorer vos performances, notre \n" +
        "kinésiologue vous donnera les meilleurs trucs pour persévérer et optimiser vos résultats.";

    let contenu4 = "Vous hésitez entre l’entraînement par intervalles et le bon vieux cardio de type continu? \n" +
        "Cela vous surprendra peut-être… mais il n’y a aucune différence au niveau de l’amélioration \n" +
        "du cardiovasculaire quand on compare entre les deux. Notre kinésiologue répondra à vos \n" +
        "questions et vous donnera la recette pour optimiser vos entraînements.";

    return <>
        {/* Appel du component Sujet pour ajouter les differents sujets du jour1 */}
        <div className={styles.dayTitle}>Journée du 12 Février 2024: L&apos;Alimentation</div>
        <Sujet
            heure="9H00 - 11H00"
            img1Url={img1Sujet1}
            img2Url={img2Sujet1}
            img3Url={img3Sujet1}
            titre_contenu="MANGER BON ET BIEN, POUR LE PLAISIR ET LA SANTÉ!"
            contenu={contenu1}
            direction=''
        />

        <Sujet
            heure="11H10 - 13H00"
            img1Url={img1Sujet2}
            img2Url={img2Sujet2}
            img3Url={img3Sujet2}
            titre_contenu="LES ALIMENTS : DES ALLIÉS POUR NOTRE IMMUNITÉ!"
            contenu={contenu2}
            direction='inverser'
        />

        <Sujet
            heure="13H10 - 14H00"
            img1Url={img1Sujet3}
            img2Url={img2Sujet3}
            img3Url={img3Sujet3}
            titre_contenu="PAUSE CAFE"
            direction=''
        />

        <Sujet
            heure="14H10 - 15H10"
            img1Url={img1Sujet4}
            img2Url={img2Sujet4}
            img3Url={img3Sujet4}
            titre_contenu="AVEZ-VOUS BOUGÉ AUJOURD’HUI?"
            contenu={contenu3}
            direction='inverser'
        />

        <Sujet
            heure="15H20 - 16H20"
            img1Url={img1Sujet5}
            img2Url={img2Sujet5}
            img3Url={img3Sujet5}
            titre_contenu="OPTIMISEZ VOTRE ENTRAÎNEMENT"
            contenu={contenu4}
            direction=''
        />
    </>
}