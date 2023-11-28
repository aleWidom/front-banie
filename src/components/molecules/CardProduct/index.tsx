import Image from "next/image";
import { Product } from "./CardProduct.types";
import styles from "./CardProduct.module.scss";

interface CardProductHomeProps {
  product: Product;
}
export const CardProduct = ({ product }: CardProductHomeProps) => {
  return (
    <div className={styles.containerCardProduct}>
      <Image
        width={"100"}
        height={"100"}
        alt="product"
        src={product.images[0]}
        className={styles.image}
        priority
      />
      <h3>{product.title}</h3>
      <p>$ {product.price}</p>
    </div>
  );
};

export default CardProduct;
