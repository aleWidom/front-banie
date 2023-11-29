import { useListProduct } from "@/queries/useListProduct";
import { ContainerProducts } from "@/components/molecules";
import styles from "./MainCategories.module.scss";

// Podrias evitar crear un componente para esto, y hacerlo directamente en la page.
// Imaginate en la aplicacion super crecida, y tener miles de archivos. Podemos evitarlo a este.
export const MainCategories = async () => {
  const data = await useListProduct();

  return <ContainerProducts products={data.products} />;
};

export default MainCategories;
