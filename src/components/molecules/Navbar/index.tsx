'use client'
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import Brand from "@/components/atoms/Brand";
import MenuIcon from "@/components/atoms/MenuIcon";
import NavLinks from "@/components/atoms/NavLinks";
import styles from './NavBar.module.scss'
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

export const Navbar = ({ }) => {

  const [menuActive, setMenuActive] = useState(false)

  const [width, setWidth] = useState(769)


  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, [])

  useEffect(() => {

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return (
      <nav className={styles.containerNavbar}>
        <MenuIcon menuActive={menuActive} setMenuActive={setMenuActive} width={width}/>
        <Brand />
        <NavLinks menuActive={menuActive} width={width} />
        <Link href="/user" >
          <FaUserAlt className={styles.user} />
        </Link>
        <Link href="/cart" >
          <FaShoppingCart className={styles.cart} />
        </Link>
      </nav>
  )
};
