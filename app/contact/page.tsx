'use client';

import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    // For demonstration, we'll just log the form data
    console.log(formState);

    // Simulate successful submission
    setStatus('Your message has been sent successfully!');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Kontakt</h1>
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <h2>Telefon</h2>
          <p>+48 123 456 789</p>
        </div>
        <div className={styles.infoItem}>
          <h2>Email</h2>
          <p>jacek@example.com</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">Imię:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Wiadomość:</label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.submitButton}>Wyślij</button>
      </form>
      {status && <p className={styles.statusMessage}>{status}</p>}
    </main>
  );
};

export default ContactPage;
