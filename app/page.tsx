// src/app/about/page.tsx
import React from 'react';
import styles from './page.module.css';
import { poppins } from './ui/fonts';

const AboutPage: React.FC = () => {
  return (
    <main className={styles.container}>
      <h1 className={poppins.className}>O Mnie</h1>
      <section className={styles.introduction}>
        <div className={styles.profileImage}>
          <img src="/photo.jpg" alt="Profile" className={styles.profileImg} />
        </div>
        <div className={styles.bio}>
          <h2 className={poppins.className}>Witaj!</h2>
          <p>
            Cześć! Nazywam się Jacek Pasierb i jestem Full Stack Developerem z pasją do tworzenia innowacyjnych rozwiązań
            w zakresie technologii webowych. Specjalizuję się w <strong>React</strong> i <strong>Node.js</strong>, ale
            mam również doświadczenie z innymi technologiami jak <strong>MongoDB</strong> i <strong>TypeScript</strong>.
          </p>
          <p>
            Od kilku lat pracuję w branży IT, realizując projekty, które wymagają zarówno kreatywności, jak i solidnego
            podejścia do programowania. Moje umiejętności obejmują projektowanie responsywnych interfejsów użytkownika, budowanie
            skalowalnych aplikacji webowych oraz integrację z różnymi usługami i API.
          </p>
          <p>
            Poza programowaniem, interesuję się <strong>technologiami</strong>, <strong>psychologią</strong>, oraz
            <strong>podróżami</strong>. W wolnym czasie lubię czytać książki, zwiedzać nowe miejsca i uczyć się nowych
            umiejętności.
          </p>
        </div>
      </section>
      <section className={styles.skills}>
        <h2 className={poppins.className}>Moje Umiejętności</h2>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>TypeScript</li>
          <li>CSS & SCSS</li>
          <li>APIs</li>
        </ul>
      </section>
    </main>
  );
};

export default AboutPage;

