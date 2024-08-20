"use client";

import Image from "next/image";
import React from "react";
import Navbar from "../NavBar";
import style from "../../styles/Header.module.css";
import { Black_Ops_One } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={style.header}>
      <Navbar />
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
              style={{
                borderRadius: "50%",
                opacity: "60%",
                border:
                  pathname === "/about"
                    ? "2px solid #9AE8FF"
                    : "2px solid Black ",
                marginBottom: "5px",
              }}
            />
            O mnie
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
