
import Link from "next/link";
import { CardProduct } from "@/components/molecules";
import { Product } from "../CardProduct/CardProduct.types";
import styles from "./ContainerProducts.module.scss";


interface CardCategoriesHomeProps {
  products: Product[];
}

export const ContainerProducts = ({ products }: CardCategoriesHomeProps) => {
  // Que pasa si falla algun producto?? Si no tenemos imagen??
  // Que pasa si una imagen tarda un pooco mas que el resto?
  return (
    <>
        <div className={styles.container}>
            {products.map((product) => (
              <Link href={`/categories/${product.id}`} className={styles.containerCardProduct} key={product.id}>
                <CardProduct product={product} />
              </Link>
            ))}
       
        </div>
    </>
  );
};

export default ContainerProducts;
