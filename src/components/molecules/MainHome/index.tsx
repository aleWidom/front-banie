
import { fetchMainCategoriesProducts} from "@/services/products"
import { CardCategoriesHome } from "@/components/molecules"
import styles from './MainHome.module.scss'



export const MainHome = async () => {

    const mainCategoriesProducts = await fetchMainCategoriesProducts()
  
    return (
      <div className={styles.containerCategories}>
        <CardCategoriesHome title="Ofertas" products={mainCategoriesProducts.products}/>
        <CardCategoriesHome title="Destacados" products={mainCategoriesProducts.products}/>
        <CardCategoriesHome title="Lanzamientos" products={mainCategoriesProducts.products}/>
      </div>
    )
  }

  export default MainHome;