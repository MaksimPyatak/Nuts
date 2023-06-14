const playrVideoButtons = document.getElementsByClassName("play-video");
const videoModal = document.querySelector('.video-modal');
const videoBox = document.querySelector('.video-modal__container');
const headerZero = document.querySelector('.header__zero');

Array.from(playrVideoButtons).forEach(function (button) {
   button.addEventListener("click", function () {
      let data = button.getAttribute("data-content");
      videoModal.style.display = "block";

      // Створити <iframe> елемент
      let iframe = document.createElement("iframe");
      iframe.setAttribute("id", "youtubePlayer");
      iframe.setAttribute("width", "560");
      iframe.setAttribute("height", "315");
      iframe.setAttribute("src", data + "?enablejsapi=1");
      iframe.setAttribute("title", "YouTube video player");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
      iframe.setAttribute("allowfullscreen", "");

      // Очистити контейнер перед додаванням нового вмісту
      videoBox.innerHTML = "";

      let bodyElement = document.querySelector('body');
      bodyElement.classList.add('_lock');
      headerZero.classList.add('_active');
      // Додати <iframe> до контейнера
      videoBox.appendChild(iframe);

      // Відео-програвач YouTube
      let player;

      // Ініціалізація програвача при завантаженні API
      function onYouTubeIframeAPIReady() {
         player = new YT.Player("youtubePlayer", {
            events: {
               onReady: onPlayerReady
            }
         });
      }

      const closeIcon = document.querySelector('.video-modal__icon-box');
      // Функція, яка буде викликана, коли програвач готовий
      function onPlayerReady(event) {
         // Встановлюємо обробник події закриття модального вікна
         headerZero.addEventListener("click", close);
         closeIcon.addEventListener("click", close);
      }

      function close(e) {
         youtubePlayer.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
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

      // Викликати функцію onYouTubeIframeAPIReady() після завантаження API
      if (typeof YT !== 'undefined' && YT.loaded) {
         onYouTubeIframeAPIReady();
      } else {
         window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      }
   });
});
