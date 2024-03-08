import Contact from '@/components/Contact.jsx';
/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: ' Contact',
    description: 'Contactez nous pour reserver votre place ou pour avoir plus d\'informafion',
    openGraph: {
        title: 'Contact',
        description: 'Contactez nous pour reserver votre place ou pour avoir plus d\'informafion',
        images: ['/logo mvvb.jpg']
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