import Image from "next/image";
import { Product } from "./CardProductHome.types";
import styles from "./CardProductHome.module.scss";

interface CardProductHomeProps {
  product: Product;
}
export const CardProductHome = ({ product }: CardProductHomeProps) => {
  return (
    <div className={styles.containerCategory}>
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

export default CardProductHome;
