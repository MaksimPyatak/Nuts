const playrVideoButtons = document.getElementsByClassName("play-video");
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

Array.from(playrVideoButtons).forEach(async function (button) {
   button.addEventListener("click", function () {
      //let scriptElement = document.createElement('script');

      //// Вказуємо шлях до скрипта, який хочемо підключити
      //scriptElement.src = 'https://www.youtube.com/iframe_api';

      //// Додаємо елемент <script> в тег <head> або <body> (в залежності від того, де потрібно підключити скрипт)
      //document.body.appendChild(scriptElement);

      let data = button.getAttribute("data-content");
      const root = document.documentElement;

      root.style.setProperty('--mgr-logo-section', `${getScrollbarWidth()}px`);
      videoModal.style.display = "block";
      document.body.style.paddingRight = `${getScrollbarWidth()}px`

      // Створити <iframe> елемент
      let iframe = document.createElement("iframe");
      iframe.setAttribute("id", "youtubePlayer");
      iframe.setAttribute("rel", "dns-prefetch");
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


      const closeIcon = document.querySelector('.video-modal__icon-box');
      // Встановлюємо обробник події закриття модального вікна
      headerZero.addEventListener("click", close);
      closeIcon.addEventListener("click", close);

      // Відео-програвач YouTube
      let player;

      // Ініціалізація програвача при завантаженні API
      async function onYouTubeIframeAPIReady() {
         player = new YT.Player("youtubePlayer", {
            events: {
               onReady: onPlayerReady
            }
         });
      }
      //! Не даЄ закрити вікно якщо не завантажилось API YouTube
      //const closeIcon = document.querySelector('.video-modal__icon-box');
      // Функція, яка буде викликана, коли програвач готовий
      //async function onPlayerReady(event) {
      //   console.log(closeIcon);
      //   // Встановлюємо обробник події закриття модального вікна
      //   headerZero.addEventListener("click", close);
      //   closeIcon.addEventListener("click", close);
      //}

      async function close(e) {
         console.log('click');
         youtubePlayer.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
         if (bodyElement.classList.contains('_lock')) {
            document.body.classList.remove('_lock');
         }
         if (headerZero.classList.contains('_active')) {
            headerZero.classList.remove('_active');
         }
         videoModal.style.display = "none";
         document.body.style.paddingRight = '0px'
         root.style.setProperty('--mgr-logo-section', `0px`);
         headerZero.removeEventListener("click", close);
         closeIcon.removeEventListener("click", close);
      }

      // Викликати функцію onYouTubeIframeAPIReady() після завантаження API
      if (typeof YT !== 'undefined' && YT.loaded) {
         console.log('if');
         onYouTubeIframeAPIReady();
      } else {
         console.log('else');
         window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      }
   });
});
