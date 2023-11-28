import { useListProduct } from "@/queries/useListProduct";
import { ContainerProducts } from "@/components/molecules";
import styles from "./MainCategories.module.scss";

export const MainCategories = async () => {
  const data = await useListProduct();

  return (
      <ContainerProducts products={data.products} />
  );
};

export default MainCategories;
