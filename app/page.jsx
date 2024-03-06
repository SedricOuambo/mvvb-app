import Presentation from '@/components/Presentation';
import Horaire from '@/components/Horaire';
import Programme from '@/components/Programme';
import Intervenants from '@/components/Intervenants';
import Sponsors from '@/components/Sponsors';
import Notifications from '@/components/Notifications';

/**
 * Page d'accueil qui regroupe tous les components
 * @returns Page d'accueil
 */
export default function Accueil() {
  return <>
    <Presentation />
    <Horaire />
    <Programme />
    <Intervenants />
    <Sponsors />
    <Notifications />
  </>
}