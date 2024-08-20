import React from 'react'
import style from "../styles/ModalMenu.module.css";
import Link from 'next/link';

interface ModalMenuProps {
    toggleModal: () => void;
  }

const ModalMenu: React.FC<ModalMenuProps>= ({ toggleModal }) => {
  return (
    <div className={style.modal}>
    <button className={style.closeButton} onClick={toggleModal}>
      &times;
    </button>
    <nav className={style.modalNav}>
      <ul>
        <li>
          <Link href="/" onClick={toggleModal}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={toggleModal}>
            O mnie
          </Link>
        </li>
        <li>
          <Link href="/projects" onClick={toggleModal}>
            Projekty
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={toggleModal}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default ModalMenu