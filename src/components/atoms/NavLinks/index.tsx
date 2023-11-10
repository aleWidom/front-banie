"use client";
import {MainLinks} from "@/components/atoms";
import styles from "./NavLinks.module.scss";

interface NavLinksProps {
  menuActive: boolean;
}

const NavLinks = ({ menuActive}: NavLinksProps) => {
  return (
    <ul className={menuActive ? styles.ulNavContainerMenuActive : styles.ulNavContainerMenuInactive}>
          {menuActive && <div className={styles.containerHeaderNavbarMovile}></div>}
          <MainLinks />
    </ul>
  );
};

export default NavLinks;

