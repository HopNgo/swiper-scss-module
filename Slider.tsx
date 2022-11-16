import ImageSwiper from '@/assets/images/swiper-img.png';
import clsx from 'clsx';
import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';

/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/pagination';

type Pagination = {
  clickable: boolean;
  renderBullet: (_: number, className: string) => string;
};

export const Slider = () => {
  const pagination: Pagination = {
    clickable: true,
    renderBullet: function (_: number, className: string) {
      return `<span class="${className} dot-slide"></span>`;
    },
  };

  return (
    <div className={clsx(styles.mySwiper)}>
      <Swiper modules={[Pagination]} loop={true} pagination={pagination} slidesPerView={1}>
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <Image src={ImageSwiper} alt={''}></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
