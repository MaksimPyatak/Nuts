const zoomIcon = document.getElementsByClassName("product__zoom");
const videoModal = document.querySelector('.video-modal');
const videoBox = document.querySelector('.video-modal__container');
const headerZero = document.querySelector('.header__zero');

function getScrollbarWidth() {
   // Creating invisible container
   const outer = document.createElement('div')
   outer.style.visibility = 'hidden'
   outer.style.overflow = 'scroll' // forcing scrollbar to appear
   outer.style.msOverflowStyle = 'scrollbar' // needed for WinJS apps
   document.body.appendChild(outer)

   // Creating inner element and placing it in the container
   const inner = document.createElement('div')
   outer.appendChild(inner)

   // Calculating difference between container's full width and the child width
   const scrollbarWidth = outer.offsetWidth - inner.offsetWidth

   // Removing temporary elements from the DOM
   outer.parentNode.removeChild(outer)

   return scrollbarWidth
}
Array.from(zoomIcon).forEach(function (button) {
   button.addEventListener("click", function () {
      let data = button.getAttribute("data-content");
      videoModal.style.display = "block";
      document.body.style.paddingRight = `${getScrollbarWidth()}px`

      // Створити <img> елемент
      let img = document.createElement("img");
      img.setAttribute("src", data);
      img.setAttribute("alt", "горіхи");
      img.setAttribute("style", "margin:0 auto; display: block");

      // Очистити контейнер перед додаванням нового вмісту
      videoBox.innerHTML = "";

      let bodyElement = document.querySelector('body');
      bodyElement.classList.add('_lock');
      headerZero.classList.add('_active');
      // Додати <img> до контейнера
      videoBox.appendChild(img);
      // Встановлюємо обробник події закриття модального вікна
      const closeIcon = document.querySelector('.video-modal__icon-box');
      headerZero.addEventListener("click", close);
      closeIcon.addEventListener("click", close);

      function close(e) {
         if (bodyElement.classList.contains('_lock')) {
            document.body.classList.remove('_lock');
         }
         if (headerZero.classList.contains('_active')) {
            headerZero.classList.remove('_active');
         }
         videoModal.style.display = "none";
         document.body.style.paddingRight = '0px'
         headerZero.removeEventListener("click", close);
         closeIcon.removeEventListener("click", close);
      }
   });
});
