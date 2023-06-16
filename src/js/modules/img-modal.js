const zoomIcon = document.getElementsByClassName("product__zoom");
const videoModal = document.querySelector('.video-modal');
const videoBox = document.querySelector('.video-modal__container');
const headerZero = document.querySelector('.header__zero');

Array.from(zoomIcon).forEach(function (button) {
   button.addEventListener("click", function () {
      let data = button.getAttribute("data-content");
      videoModal.style.display = "block";

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
         headerZero.removeEventListener("click", close);
         closeIcon.removeEventListener("click", close);
      }
   });
});
