'use client';
import { useState, useEffect } from 'react';
import styles from './Bannierre.module.css';

/**
 * Elle contient l'image baniere et le compte a rebours
 * @returns Banierere
 */
export default function Bannierre() {
  const [time, setTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const eventDate = new Date('2024-05-12T23:59:59');

    const updateCountdown = () => {
      const currentDate = new Date();
      const timeDifference = eventDate - currentDate;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTime({
        days: formatTime(days),
        hours: formatTime(hours),
        minutes: formatTime(minutes),
        seconds: formatTime(seconds),
      });
    };
    const formatTime = (value) => (value < 10 ? `0${value}` : value);
    // Mettre à jour le chronomètre toutes les secondes
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <section className={styles.banner}>
      <span>Prochaine Conférence dans :</span>
      <div className={styles.Chronometre}>
        <div className={styles.sous__chrono}>
          <div className={styles.decopmte}>
            <div className={styles.time}>{time.days}:</div>
            <div className={styles.label}>JOURS</div>
          </div>
          <div className={styles.decopmte}>
            <div className={styles.time}>{time.hours}:</div>
            <div className={styles.label}>HEURES</div>
          </div>
        </div>
        <div className={styles.sous__chrono}>
          <div className={styles.decopmte}>
            <div className={styles.time}>{time.minutes}:</div>
            <div className={styles.label}>MINUTES</div>
          </div>
          <div className={styles.decopmte}>
            <div className={styles.time}>{time.seconds}</div>
            <div className={styles.label}>SECONDES</div>
          </div>
        </div>
      </div>
    </section>
  );
}
