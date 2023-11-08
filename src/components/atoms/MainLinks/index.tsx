import Link from "next/link";
import styles from "./MainLinks.module.scss";

// Aca estaria bueno que hagas un componente y hagas un map por cada item del nav.
// Por ejemplo, un componente que se llame NavItem, que reciba por props el texto y el href.
// El tema del hover o selected, con el efecto de ponerle mas bold, hace que se muevan los items, ya que genera mas espacio en el contenido. Lo evitaria
// Buscaria otra forma, como cambiarle de color la fuente, o agregarle un subrayado ??

// Las rutas imaginatela asi -> /categoria/${category}
// Y luego dentro de cada categoria -> /categoria/${category}/${id}
// Vamos a tener una pagina dinamica que sea igual para todas la cateogorias, pero donde en la pagina, segun la categoria, se muestre distintas imagenes, textos, etc. Pero misma estructura

const MainLinks = () => {
  return (
    <>
      <li className={styles.list}>
        <Link href={"/"} className={styles.link}>
          Inicio
        </Link>
      </li>
      <li className={styles.list}>
        <Link href="#categorias" className={styles.link}>
          Categorías
        </Link>
      </li>
      <li className={styles.list}>
        <Link href="#mujer" className={styles.link}>
          Mujer
        </Link>
      </li>
      <li className={styles.list}>
        <Link href="#hombre" className={styles.link}>
          Hombre
        </Link>
      </li>
      <li className={styles.list}>
        <Link href="#marcas" className={styles.link}>
          Marcas
        </Link>
      </li>
      <li className={styles.list}>
        <Link href="#zapatillas" className={styles.link}>
          Zapatillas
        </Link>
      </li>
    </>
  );
};

export default MainLinks;
