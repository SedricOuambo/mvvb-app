'use client'
import { useState } from 'react';
import styles from '@/components/Contact.module.css';
import { FaInstagram, FaFacebookF, FaBlenderPhone, FaWhatsapp, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Link from 'next/link';

/**
 * Fonction permettant d'envoyer un mail via EmailJS
 * @param {formData contenant les valeurs de tous les champs} formData 
 */
// const sendEmail = (formData) => {
//     const infos_results = document.getElementById('infos_results');
//     const subject = document.getElementById('subject');
//     const message = document.getElementById('message');

//     const templateParams = {
//         name: formData.get('name'),
//         subject: formData.get('object'),
//         email: formData.get('email'),
//         message: formData.get('message'),
//     }

//     emailjs.send(
//         'service_e8l5qhh',      //SERVICE ID
//         'template_2gzcyss',     //TEMPLATE ID
//         templateParams,
//         'XI68Lm3ggbss3OTpx'     //USER PUBLIC KEY
//     ).then(
//         (response) => {
//             infos_results.style.color = 'green';
//             infos_results.textContent = 'Votre message a été envoyé avec succès. Nous vous reviendrons très bientôt.'
//             //Linkpres l'envoi du mail, on efface les champs objets et message
//             //Pour empecher les envois repetitifs par simple clic
//             subject.value = "";
//             message.value = "";
//         },
//         (error) => {
//             infos_results.style.color = 'red';
//             infos_results.textContent = 'Message non envoyé.';
//         }
//     );
// }

/**
 * Page du contenu de la page de contact
 * @returns Contact
 */
export default function Contact() {
    const [erreurname, setErreurName] = useState('');
    const [erreuremail, setErreurEmail] = useState('');
    const [erreurphone, setErreurPhone] = useState('');
    const [erreurmessage, setErreurMessage] = useState('');
    const [erreurobject, setErreurObject] = useState('');
    const [infosmessage, setInfosMessage] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        let erreur = false;
        if (!formData.get('name')) {
            setErreurName('Veuillez remplir ce champ');
            erreur = true;
        }
        else { setErreurName(''); }

        if (!formData.get('email') || !emailRegex.test(formData.get('email'))) {
            setErreurEmail('L\'adresse email est invalide');
            erreur = true;
        }
        else { setErreurEmail(''); }

        if (!formData.get('phone') || !phoneRegex.test(formData.get('phone'))) {
            setErreurPhone('Le numéro de téléphone est invalide');
            erreur = true;
        } else { setErreurPhone(''); }

        if (!formData.get('object')) {
            setErreurObject('Veuillez spécifier l\'objet de votre message');
            erreur = true;
        }
        else { setErreurObject(''); }

        if (!formData.get('message')) {
            setErreurMessage('Veuillez écrire un message');
            erreur = true;
        }
        else { setErreurMessage(''); }

        //S'il n'y a pas d'erreur, on envoie le mail
        if (!erreur) {
            // sendEmail(formData);
            const templateParams = {
                name: formData.get('name'),
                subject: formData.get('object'),
                email: formData.get('email'),
                message: formData.get('message'),
            }
            emailjs.send(
                'service_7xr0l1o',      //SERVICE ID
                'template_qxyqu87',     //TEMPLATE ID
                templateParams,
                'EafQMSog5KfEZpIoZ'     //USER PUBLIC KEY
            ).then(
                (response) => {
                    setInfosMessage('Votre message a été envoyé avec succès. Nous vous reviendrons très bientôt.');
                },
                (error) => {
                    setInfosMessage('Message non envoyé.');
                }
            );
        }
    }

    return <>
        <div className={styles.container__contact}>
            <div className={styles.form__info}>
                <div className={styles.contact_info_contact}>
                    <h3 className={styles.title}>On reste en contact?</h3>
                    <p className={styles.text}>
                        Vous souhaitez nous contactez, avoir davantages d'informations
                        sur Entraide App ou tout simplement papoter, Nous sommes joignables
                        par téléphone, WhatsApp ou email.
                    </p>

                    <div className={styles.info}>
                        <div className={styles.information}>
                            <Link href="tel:+18193199747" target="_blank" className={styles.contact__information}>
                                <FaBlenderPhone className={styles.icon} />
                                <h3>+18999999999</h3>
                            </Link>
                        </div>
                        <div className={styles.information}>
                            <Link href="https://wa.me/+18999999999" target="_blank" className={styles.contact__information}>
                                <FaWhatsapp className={styles.icon} />
                                <h3>Whatsapp</h3>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.social__media}>
                        <p>Nous sommes aussi ici:</p>
                        <div className={styles.social_icons_container}>
                            <Link href="#" target="_blank"> <FaFacebookF className={styles.icon} /> </Link>
                            <Link href="#" target="_blank"> <FaTwitter className={styles.icon} /></Link>
                            <Link href="#" target="_blank"><FaInstagram className={styles.icon} /></Link>
                        </div>
                    </div>
                </div>

                <div className={styles.contact_form}>
                    <span className={styles.circle + ' ' + styles.one}></span>
                    <span className={styles.circle + ' ' + styles.two}></span>

                    <form onSubmit={handleSubmit}>
                        <p className={styles.title}>Envoyer un email</p>
                        <p className={styles.subtitle}>Nous reviendrons vers vous dans les brefs delais. Promis!</p>

                        <div>
                            <input type="text" name="name" placeholder='Votre nom' />
                            {erreurname && <span>{erreurname}</span>}
                        </div>
                        <div>
                            <input type="text" name="email" placeholder='Votre email'/>
                            {erreuremail && <span>{erreuremail}</span>}
                        </div>
                        <div>
                            <input type="tel" name="phone" placeholder='Votre N° de téléphone' />
                            {erreurphone && <span>{erreurphone}</span>}</div>
                        <div>
                            <input type="text" name="object" placeholder='Objet de votre message' id='subject'/>
                            {erreurobject && <span>{erreurobject}</span>}
                        </div>
                        <div>
                            <textarea name="message" placeholder='Votre message' id='message'></textarea>
                            {erreurmessage && <span>{erreurmessage}</span>}
                        </div>
                        <div className={styles.btn_bloc}>
                            <input type="reset" value="Effacer" className={styles.button + ' ' + styles.btn} />
                            <input type="submit" value="Envoyer" className={styles.button + ' ' + styles.btn} />
                        </div>
                        <div id='infos_results' className={styles.infos_results}>
                            {infosmessage && <div>{infosmessage}</div>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}