'use client';

import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import ContactForm from '../components/ContactForm/ContactForm';

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
          <p>+48 724 862 714</p>
        </div>
        <div className={styles.infoItem}>
          <h2>Email</h2>
          <p>jpasierb@proton.me</p>
        </div>
      </div>
      
    </main>
  );
};

export default ContactPage;
