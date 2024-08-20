import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Twoje Imię. Wszystkie prawa zastrzeżone.</p>
      <div className={styles.socials}>
        <a href="https://linkedin.com/in/twojprofil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/twojprofil" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
