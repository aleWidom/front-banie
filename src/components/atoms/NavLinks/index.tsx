"use client";
import { FC } from 'react';
import Link from "next/link";
import styles from "./NavLinks.module.scss";
import Brand from '../Brand';
import MainLinks from '../MainLinks/index';


interface NavLinksProps {
  menuActive: boolean,
  width: number
}

const NavLinks: FC<NavLinksProps> = ({ menuActive, width }: NavLinksProps) => {
  return (
    <ul className={menuActive && width < 768 ? styles.ulNavMobile : styles.ulNavDesktop}>
      {menuActive && width < 768 &&
        <>
          <div className={styles.containerHeaderNavbarMovile}>
            <Brand />

          </div>
          <MainLinks />
        </>}
        {width > 768 &&  <MainLinks />}
    </ul >
  )
};

export default NavLinks;
