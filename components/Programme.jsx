'use client'
import { useState } from "react";
import styles from './Programme.module.css'
export default function Programme({children, titre}) {
    return <section className={styles.section}>
        <h1 className='title'> Programme</h1>
        <div className='container'>
        </div>
    </section>
}