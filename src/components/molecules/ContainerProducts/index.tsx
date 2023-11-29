import { CardProduct } from "@/components/molecules";
import { Product } from "../CardProduct/CardProduct.types";
import styles from "./ContainerProducts.module.scss";

// Para que estarias usando este archivo?
import "@/styles/SwiperComponents.scss";

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
          // Este div es necesario? O se puede usar el container del CardProduct para esos estilos??
          <div className={styles.containerCardProduct}>
            <CardProduct key={product.id} product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ContainerProducts;
