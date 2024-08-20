"use client";

import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../NavBar";
import style from "../../styles/Header.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ModalMenu from "../ModalMenu";

const Header = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className={style.header}>
      <Navbar />
      <button className={style.hamburger} onClick={toggleModal}>
        ☰
      </button>
      {isModalOpen && <ModalMenu toggleModal={toggleModal}/>}
      <div className={style.cvContainer}>
        <div className={style.infoContainer}>
          <h1>Jacek Pasierb</h1>
          <p>Full Stack Developer</p>
        </div>
        <Link
          href="/about"
          className={pathname === "/about" ? style.active : undefined}
        >
          <div className={style.imageContainer}>
            <Image
              src="/photo.jpg"
              width={150}
              height={150}
              alt="autor"
              className={style.profileImage} // dodałem klasę dla stylów obrazu
            />
            <span className={style.aboutText}>O mnie</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
