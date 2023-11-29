
import Link from "next/link";
import { CardProduct } from "@/components/molecules";
import { Product } from "../CardProduct/CardProduct.types";
import styles from './ContainerProducts.module.scss'
import "@/styles/SwiperComponents.scss";

interface CardCategoriesHomeProps {
  products: Product[];
}

export const ContainerProducts = ({
  products,
}: CardCategoriesHomeProps) => {
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

