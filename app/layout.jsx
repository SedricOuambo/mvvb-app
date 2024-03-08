
import Bannierre from '@/components/Bannierre';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] });

/**
 * @type {import('next').Metadata}
 */
export const metadata ={
  title:'Bienvenue sur MVVB',
  description:'Mieux Vivre Et Vivre Bien',
}

export default function RootLayout({ children }) {
  return  <html lang="fr">
    <body className={inter.className + ' ' + styles.body}>
      <Header/>
      <Bannierre/>
      <main className={styles.main}>
        {children}
      </main>
      <Footer/>
    </body>
  </html>
}
