"use client";
// import { fetchMainCategoriesProducts } from "@/services/products";
import { CardCategoriesHome } from "@/components/molecules";
import styles from "./MainHome.module.scss";
import useListProduct from "@/queries/useListProduct";

const MainHome = () => {
  // const mainCategoriesProducts = await fetchMainCategoriesProducts();
  // console.log("mainCategoriesProducts", mainCategoriesProducts);

  const {
    data: listProduct,
    isLoading: isLoadingListProduct,
    isError: isErrorListProduct,
  } = useListProduct();

  if (isLoadingListProduct) {
    // Pantalla loading
    return <div>Loading...</div>;
  }

  if (isErrorListProduct || !listProduct) {
    // Pantalla error
    return <div>Error...</div>;
  }

  return (
    <div className={styles.containerCategories}>
      <CardCategoriesHome title="Ofertas" products={listProduct.products} />
      <CardCategoriesHome title="Destacados" products={listProduct.products} />
      <CardCategoriesHome
        title="Lanzamientos"
        products={listProduct.products}
      />
    </div>
  );
};

export default MainHome;
