import Image from "next/image";
import { useGetProduct } from "@/queries/useListProduct";
import { Button } from "@/components/atoms";
import styles from './DatailProductPage.module.scss'


const DetailProductPage = async ({ params: { idProduct } } : { params: { idProduct: string } }) => {
  
    const product = await useGetProduct(idProduct)


  
    return (
    <div className={styles.containerDetailProductPage}>
        <Image
        width={"100"}
        height={"100"}
        alt="product"
        src={product.images[0]}
        className={styles.image} 
        priority
      />
             <h3>{product.title}</h3>
             <h3>${product.price}</h3>
{/*        <Button text="Agregar al Carrito" size="large"/> */}
        <p>{product.description}</p>
    </div>
  )
}

export default DetailProductPage;
