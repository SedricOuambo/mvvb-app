
import Bannierre from '@/components/Bannierre';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import { MenuProvider } from '@/components/MenuProvider';
import '@/styles/globals.css';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] });

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: 'Mvvb-app | Présentation',
  description: 'Site web annonçant une conférence sur le mieux vivre.',
  openGraph: {
    title: 'Mvvb-app | Présentation',
    description: 'Site web annonçant une conférence sur le mieux vivre.',
    images: ['./img/logo_mvvb.png']
  }
}

export default function RootLayout({ children }) {
  return <html lang="fr">
    <body className={inter.className + ' ' + styles.body}>
      <MenuProvider>
        <Header />
        <Bannierre />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </MenuProvider>
    </body>
  </html>
}
