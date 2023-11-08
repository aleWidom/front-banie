import { FC } from "react";
import Image from "next/image";
// Importar de forma dinamica. Evitar el ../../../
// Porque si cambia la ruta de la imagen, esto iria a romper.
import brand from "../../../assets/brand.png";
import styles from "./Brand.module.scss";

interface BrandIconProps {}

const Brand: FC<BrandIconProps> = () => {
  // Porque el margin de 10px ?? Pensa que si esto esta componetizado, capaz no se necesite el margin en todos lados.
  // Podrias wrapper al Brand con div y ahi ponerle el margin.. o que el padre del nav tenga el margin, asi evitamos ponerlo en varios lugares.
  // Igual, consejo, no usaria el margin para posicionar.. no es responsive
  return <Image src={brand} width={100} alt="brand" className={styles.brand} />;
};

export default Brand;
