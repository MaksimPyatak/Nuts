import Swiper, { Navigation } from 'swiper';

export const aboutManufacturerSwiper = new Swiper('.about-manufacturer__swiper', {
   modules: [Navigation],
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   scrollbar: {
      el: '.swiper-scrollbar',
   },
});