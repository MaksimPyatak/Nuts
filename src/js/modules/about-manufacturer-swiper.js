import Swiper, { Navigation, Scrollbar } from 'swiper';
//import 'swiper/css';
//import 'swiper/css/navigation';

export const aboutManufacturerSwiper = new Swiper('.about-manufacturer__swiper', {
   modules: [Navigation, Scrollbar],
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   scrollbar: {
      el: '.swiper-scrollbar',
   },
});