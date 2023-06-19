/* Превірка підтримки webp, додавання класу webp або no-webp для HTML */
export function isWebp() {
   // Превірка підтримки webp
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   // Додавання класу _webp або _no-webp для HTML
   testWebP(function (support) {
      let className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
   });
}

//----------------------------------
//Підключення файлу з бургер-меню
//export function burgerMenu() {
//   const iconMenu = document.querySelector('.menu__burger');
//   if (iconMenu) {
//      const menuBoxList = document.querySelector('.menu__box-list');
//      const headerZero = document.querySelector('.header__zero');
//      //const firstSection = document.querySelector('.first-section__swiper');
//      //!!  Прибрав після помилки на сторінці 'News.html'. Можливо додав помилково
//      const menuBurgerIcon = document.querySelector('.menu__burger-icon');
//      const menyHeading = document.querySelector('.menu__heading');
//      iconMenu.addEventListener("click", function (e) {
//         document.body.classList.toggle('_lock');
//         menuBurgerIcon.classList.toggle('_active');
//         headerZero.classList.toggle('_active');
//         //firstSection.classList.toggle('_active');
//         //!!  Прибрав після помилки на сторінці 'News.html'. Можливо додав помилково
//         menuBoxList.classList.toggle('_active');
//         menyHeading.classList.toggle('_active');
//      })
//   }
//}

