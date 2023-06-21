import Swiper, { Navigation } from 'swiper';
//import 'swiper/css';
//import 'swiper/css/navigation';

export const productCardSwiper = new Swiper('.news__swiper', {
   modules: [Navigation],
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   slidesPerView: 1,
   spaceBetween: 10,
   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 320px
      769: {
         slidesPerView: 2,
         spaceBetween: 20
      },
      // when window width is >= 480px
      1025: {
         slidesPerView: 3,
         spaceBetween: 31
      }
   }

});