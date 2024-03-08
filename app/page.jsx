
import Presentation from '@/components/Presentation';
import Horaire from '@/components/Horaire';
import Programme from '@/components/Programme';
import Intervenants from '@/components/Intervenants';
import Sponsors from '@/components/Sponsors';
import Notifications from '@/components/Notifications';

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: 'Mieux Vivre Et Vivre Bien Conference',
  description: 'Bienvenue sur notre page d\' accueil MVVB',
  openGraph: {
    title: 'Accueil MVVB',
    description: 'Bienvenue sur notre page d\' accueil MVVB',
    images: ['/logo mvvb.jpg']
  }
}

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