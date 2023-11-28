
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
              <div className={styles.containerCardProduct}>
                <CardProduct key={product.id} product={product} />
              </div>
            ))}
       
        </div>
    </>


  );
};

export default ContainerProducts;

