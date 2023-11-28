import { useListProduct } from "@/queries/useListProduct";
import { ContainerProductsCarrousel } from "@/components/molecules";
import styles from "./MainHome.module.scss";

export const MainHome = async () => {
  const data = await useListProduct();

  return (
    <div className={styles.containerCategories}>
      <ContainerProductsCarrousel title="Ofertas" products={data.products} />
      <ContainerProductsCarrousel  title="Destacados" products={data.products} />
      <ContainerProductsCarrousel  title="Lanzamientos"  products={data.products} />
    </div>
  );
};

export default MainHome;
