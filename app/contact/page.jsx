import Contact from '@/components/Contact.jsx';
/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: ' Mvvb-app | Contact',
    description: 'Page pour nous contacter et avoir plus d\'informations',
    openGraph: {
        title: 'Mvvb-app | Contact',
        description: 'Page pour nous contacter et avoir plus d\'informations',
        images: ['./logo_mvvb.png']
    }
}

/**
 * Page du contenu de la page de contact
 * @returns Contact
 */
export default function Contact2() {
    return <>
        <Contact />
    </>
}