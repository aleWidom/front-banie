import { useListProduct} from "@/queries/useListProduct"
import { CardCategoriesHome } from "@/components/molecules"
import styles from './MainHome.module.scss'



export const MainHome = async () => {

    const data = await useListProduct()
  

    
    return (
      <div className={styles.containerCategories}>
        <CardCategoriesHome title="Ofertas" products={data.products}/>
        <CardCategoriesHome title="Destacados" products={data.products}/>
        <CardCategoriesHome title="Lanzamientos" products={data.products}/>
      </div>
    )
  }

  export default MainHome;