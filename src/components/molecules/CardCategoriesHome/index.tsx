"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation';
import 'swiper/css';
import {CardProductHome}  from '@/components/molecules';
import { Product } from '../CardProductHome/CardProductHome.types';
import styles from './CardCategoriesHome.module.scss'

interface CardCategoriesHomeProps {
  products: Product[];
  title: string
}


export const CardCategoriesHome = ({ products, title }: CardCategoriesHomeProps) => {
  return (
    <div className={styles.cards}>
      <h3>{title}</h3>
      <Swiper slidesPerView={2} spaceBetween={20}>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <CardProductHome product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}


export default CardCategoriesHome;


