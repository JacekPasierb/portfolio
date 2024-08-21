// src/app/about/page.tsx
import React from "react";
import styles from "./page.module.css";
import { poppins } from "./ui/fonts";

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
            Cześć! Nazywam się Jacek Pasierb i jestem Full Stack Developerem z
            pasją do tworzenia innowacyjnych rozwiązań w zakresie technologii
            webowych. Specjalizuję się w <strong>React</strong> i{" "}
            <strong>Node.js</strong>, mam doświadczenie z bazami danych{" "}
            <strong>MongoDB</strong> i <strong>Postgres</strong> oraz
            technologiami <strong>TypeScript</strong>.
          </p>
          <p>
            Obecnie poszerzam swoją wiedzę o <strong>Next.js</strong>,
            frameworku do tworzenia aplikacji webowych. Chociaż dopiero uczę się
            jego zaawansowanych funkcji, już teraz potrafię wykorzystać jego
            możliwości do budowania wydajnych i nowoczesnych stron
            internetowych.
          </p>
          <p>
            Od 2 lat pracuję w branży IT, realizując projekty, które wymagają
            zarówno kreatywności, jak i solidnego podejścia do programowania.
            Moje umiejętności obejmują projektowanie responsywnych interfejsów
            użytkownika, budowanie skalowalnych aplikacji webowych oraz
            integrację z różnymi usługami i API.
          </p>
          <p>
            Poza programowaniem, interesuję się <strong> technologiami </strong>
            ,<strong> psychologią </strong> , oraz
            <strong> podróżami </strong>. W wolnym czasie lubię czytać książki,
            zwiedzać nowe miejsca i uczyć się nowych umiejętności.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
