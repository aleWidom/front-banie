"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import Brand from "@/components/atoms/Brand";
import MenuIcon from "@/components/atoms/MenuIcon";
import NavLinks from "@/components/atoms/NavLinks";
import styles from "./NavBar.module.scss";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

export const Navbar = ({}) => {
 
  const [menuActive, setMenuActive] = useState(false);
  
  return (
    <nav className={styles.containerNavbar}>
      <MenuIcon
        menuActive={menuActive}
        setMenuActive={setMenuActive}
      />
      <Brand menuActive={menuActive} />
      <NavLinks menuActive={menuActive}/>
      <Link href="/user">
        <FaUserAlt className={styles.user} />
      </Link>
      <Link href="/cart">
        <FaShoppingCart className={styles.cart} />
      </Link>
    </nav>
  );
};
