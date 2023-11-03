import Link from 'next/link';
import styles from './MainLinks.module.scss'

const MainLinks = () => {
  return (
    <>
      <li className={styles.list}>
        <Link href={"/"} className={styles.link}>
          Inicio
        </Link>
      </li>
      <li className={styles.list}>
        <Link href='#categorias' className={styles.link}>
          Categorías
        </Link>
      </li>
      <li className={styles.list}>
        <Link href='#mujer' className={styles.link}>
          Mujer
        </Link>
      </li>
      <li className={styles.list}>
        <Link href='#hombre' className={styles.link}>
          Hombre
        </Link>
      </li>
      <li className={styles.list}>
        <Link href='#marcas' className={styles.link}>
          Marcas
        </Link>
      </li >
      <li className={styles.list}>
        <Link href='#zapatillas' className={styles.link}>
          Zapatillas
        </Link>
      </li>
  </>
  )
}

export default MainLinks;