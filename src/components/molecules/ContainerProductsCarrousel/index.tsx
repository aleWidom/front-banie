"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CardProduct } from "@/components/molecules";
import { Product } from "../CardProduct/CardProduct.types";
import styles from './ContainerProductsCarrousel.module.scss'
import "@/styles/SwiperComponents.scss";

interface CardCategoriesHomeProps {
  products: Product[];
  title?: string;
}

export const ContainerProductsCarrousel = ({
  products,
  title,
}: CardCategoriesHomeProps) => {
  return (
    <>
        <div className={styles.cardsHome}>
          <h3>{title}</h3>
          <Swiper
            className={styles.swipper}
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={{
              "340": {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              "768": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "976": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            navigation
            loop={true}
            autoplay
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <CardProduct product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </>


  );
};

export default ContainerProductsCarrousel;

