import Link from "next/link"
import styles from './NavItem.module.scss'

interface NavItemProps {
  title: string;
  href: string
}


export const NavItem = ({title, href}: NavItemProps) => {
  return (
    <li className={styles.list}>
        <Link href={href} className={styles.link}>
          {title}
        </Link>
      </li>
  )
}

