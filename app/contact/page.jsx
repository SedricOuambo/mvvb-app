import Contact from '@/components/Contact.jsx';
/**
 * @type {import('next').Metadata}
 */
export const metadata ={
    title:' Contact',
    description:'Contactez nous pour reserver votre place ou pour avoir plus d\'informafion',
    openGraph: {
        title: 'Contact',
        description: 'Contactez nous pour reserver votre place ou pour avoir plus d\'informafion',
        images: ['/logo mvvb.jpg']
      }
  }
export default function Pcontact() {
    return <>
        <Contact />
    </>
}