import Link from "next/link";
import {NavItem} from '@/components/atoms'
import styles from "./MainLinks.module.scss";

// El tema del hover o selected, con el efecto de ponerle mas bold, hace que se muevan los items, ya que genera mas espacio en el contenido. Lo evitaria
// Buscaria otra forma, como cambiarle de color la fuente, o agregarle un subrayado ??

// Las rutas imaginatela asi -> /categoria/${category}
// Y luego dentro de cada categoria -> /categoria/${category}/${id}
// Vamos a tener una pagina dinamica que sea igual para todas la cateogorias, pero donde en la pagina, segun la categoria, se muestre distintas imagenes, textos, etc. Pero misma estructura


const navItems = [
  {id:1, title:"Categorias", href:"/categorias"},
  {id:2, title:"Mujer", href:"/mujer"},
  {id:3, title:"Hombre", href:"/hombre"},
  {id:4, title:"Marcas", href:"/marcas"},
  {id:5, title:"Zapatillas", href:"/zapatillas"},
]

export const MainLinks = () => {
  return (
    <>
      {navItems.map((navItem)=> (
        <NavItem key={navItem.id} title={navItem.title} href={navItem.href} />
      ))}
    </> 
  );
};


