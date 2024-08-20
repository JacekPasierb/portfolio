"use client";

import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import css from "../styles/NavBar.module.css";
import {
  CheckBadgeIcon,
  EnvelopeIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { poppins } from "../ui/fonts";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/" className={pathname === "/" ? css.active : undefined}>
            <HomeIcon />
            <p className={`${poppins.className}`}>Technologie</p>
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={pathname === "/projects" ? css.active : undefined}
          >
            <FolderIcon />
            <p className={`${poppins.className}`}>Projekty</p>
          </Link>
        </li>
        <li>
          <Link
            href="/certificates"
            className={pathname === "/certificates" ? css.active : undefined}
          >
            <CheckBadgeIcon />
            <p className={`${poppins.className}`}> Certyfikaty</p>
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className={pathname === "/contact" ? css.active : undefined}
          >
            <EnvelopeIcon />
            <p className={`${poppins.className}`}> Kontakt</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
