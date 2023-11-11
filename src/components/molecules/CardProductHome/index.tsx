import Image from "next/image";
import { Product } from "./CardProductHome.types";
import styles from "./CardProductHome.module.scss";

interface CardProductHomeProps {
  product: Product;
}
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#DAE0EB" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const CardProductHome = ({ product }: CardProductHomeProps) => {
  return (
    <div className={styles.containerCategory}>
      <Image
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        width={"100"}
        height={"100"}
        alt="product"
        src={product.images[0]}
        className={styles.image}
      />
      <h3>{product.title}</h3>
      <p>$ {product.price}</p>
    </div>
  );
};

export default CardProductHome;
