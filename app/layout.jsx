'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Accueil from '@/components/Accueil'
import Jour1 from '@/components/Jour1'
import Jour2 from '@/components/Jour2'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import '@/styles/globals.css'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [page, setPage] = useState('accueil');

  return  <html lang="fr">
    <body className={inter.className + ' ' + styles.body}>
      <Header setPage={setPage}/>
      <main className={styles.main}>
        {/*children*/}
        {page === 'accueil' ?
          <Accueil />
        : page === 'jour1' ?
          <Jour1 />
        :
        page === 'jour2' ?
          <Jour2 />
        :
          <div>404 - Not Found</div>
        }
      </main>
      <Footer/>
    </body>
  </html>
}
