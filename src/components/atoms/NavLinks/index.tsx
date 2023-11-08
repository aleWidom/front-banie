"use client";
import { FC } from "react";
import Link from "next/link";
import styles from "./NavLinks.module.scss";
import Brand from "../Brand";
// Corregir rutas y ordenar imports
import MainLinks from "../MainLinks/index";

interface NavLinksProps {
  menuActive: boolean;
  width: number;
}

// Estas repitiendo tipado aca. Deja solo el de las props. El FC<NavLinksProps>, no es necesario.
// No esta bueno usar javascript para responsive. Mejor usar una clase con una media query, donde le pongas un "display: none" al elemento que queres ocultar.
// Evitamos re renderizaciones. Pensa que aca llega una prop q se actualiza con cada cambio del viewport. Ya de base dos. La primera q es undefined, y la segunda cuando se setea
// Por eso manjearlo con css es mejor.
// Hace esta prueba. Anda a mobile, y refreshea varias veces.

const NavLinks: FC<NavLinksProps> = ({ menuActive, width }: NavLinksProps) => {
  return (
    <ul
      className={
        menuActive && width < 768 ? styles.ulNavMobile : styles.ulNavDesktop
      }
    >
      {menuActive && width < 768 && (
        <>
          <div className={styles.containerHeaderNavbarMovile}>
            <Brand />
          </div>
          <MainLinks />
        </>
      )}

      {menuActive === false && width > 768 && <MainLinks />}
    </ul>
  );
};

export default NavLinks;
