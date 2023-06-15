import Swiper, { Navigation } from 'swiper';
//import 'swiper/css';
//import 'swiper/css/navigation';

export const productCardSwiper = new Swiper('.product__swiper', {
   modules: [Navigation],
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

});