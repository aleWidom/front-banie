import { FC } from "react";
import Image from "next/image";
import brand from "@/assets/brand.png";
import styles from "./Brand.module.scss";

interface BrandIconProps {
  menuActive: boolean
}

const Brand: FC<BrandIconProps> = ({menuActive}) => {
  return <Image src={brand} width={100} alt="brand" className={menuActive ? styles.brandMenuActive : styles.brandMenuInactive} />;
};

export default Brand;
