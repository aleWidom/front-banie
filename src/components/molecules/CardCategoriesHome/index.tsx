"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CardProductHome } from "@/components/molecules";
import { Product } from "../CardProductHome/CardProductHome.types";
import styles from "./CardCategoriesHome.module.scss";
import '@/styles/SwiperComponents.scss'

interface CardCategoriesHomeProps {
  products: Product[];
  title: string;
}

export const CardCategoriesHome = ({
  products,
  title,
}: CardCategoriesHomeProps) => {
  return (
    <div className={styles.cards}>
      <h3>{title}</h3>
      <Swiper
        className={styles.swipper}
        modules={[Navigation, Pagination, Scrollbar]}
        breakpoints={{
          '340': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '976': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation
        pagination={{ clickable: false }}
        scrollbar={{ draggable: true }}
        loop={true}
        >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <CardProductHome product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCategoriesHome;
