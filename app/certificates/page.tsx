'use client'

import React, { useState } from 'react';
import styles from '../styles/Certificates.module.css';

interface Certificate {
  images: string[]; // Tablica ścieżek do obrazów certyfikatu
  title: string;    // Tytuł certyfikatu
  description: string; // Opis certyfikatu
  link?: string;    // Link do certyfikatu lub jego szczegółów (opcjonalny)
}

const certificates: Certificate[] = [
  {
    images: ['/cert3.png', '/cert2.png', '/cert1.png'],
    title: 'Full Stack Developer',
    description: 'Kurs GO-IT',
    // Link jest opcjonalny, możesz go pominąć
  },

  // Dodaj więcej certyfikatów według potrzeb
];

const CertificatesPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Moje Certyfikaty</h1>
      <div className={styles.certificatesGrid}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.certificateCard}>
            <div className={styles.imageGallery}>
              {cert.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`${cert.title} - część ${i + 1}`}
                  className={styles.certificateImage}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
            <h2 className={styles.certificateTitle}>{cert.title}</h2>
            <p className={styles.certificateDescription}>{cert.description}</p>
            {cert.link ? (
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certificateLink}>
                Zobacz Certyfikat
              </a>
            ) : (
              <p className={styles.noLink}>Brak linku do certyfikatu</p>
            )}
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <img src={selectedImage} alt="Powiększone zdjęcie" className={styles.modalImage} />
        </div>
      )}
    </main>
  );
};

export default CertificatesPage;
