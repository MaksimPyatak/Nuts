import Swiper, { Scrollbar, Mousewheel } from 'swiper';

export const catalogSwiper = new Swiper(".catalog-swiper", {
   modules: [Scrollbar, Mousewheel],
   direction: "vertical",
   slidesPerView: "auto",
   freeMode: true,
   scrollbar: {
      el: ".swiper-scrollbar",
   },
   mousewheel: true,
});