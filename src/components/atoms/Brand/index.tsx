import { FC } from "react";
import Image from 'next/image'
import brand from '../../../assets/brand.png'
import styles from './Brand.module.scss'

interface BrandIconProps { }

const Brand: FC<BrandIconProps> = () => {
  return (
    <Image
      src={brand}
      width={100}
      alt="brand"
      className={styles.brand}
    />
  );
};

export default Brand;
