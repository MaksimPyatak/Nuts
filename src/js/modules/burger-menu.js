const iconMenu = document.querySelector('.middle-header__burger-icon');

if (iconMenu) {
   const topHeader = document.querySelector('.top-header');
   const middleHeader = document.querySelector('.middle-header');
   const lowerHeader = document.querySelector('.lower-header');
   const headerZero = document.querySelector('.header__zero');
   let height = lowerHeader.scrollHeight;
   lowerHeader.style.top = (0 - height) + 'px';

   function changeLowerHeaderTop() {
      const classList = lowerHeader.classList;
      let height = lowerHeader.scrollHeight;
      lowerHeader.style.top = (0 - height) + 'px';
      classList.forEach(className => {
         if (className == '_active' && lowerHeader.style.top == (0 - height) + 'px') {
            lowerHeader.style.top = null;
         } else {
            lowerHeader.style.top = (0 - height) + 'px';
         }
      });
   }

   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      headerZero.classList.toggle('_active');
      topHeader.classList.toggle('_active');
      middleHeader.classList.toggle('_active');
      lowerHeader.classList.toggle('_active');
      iconMenu.classList.toggle('_active');
      changeLowerHeaderTop();
   })
   const videoModal = document.querySelector('.video-modal');
   window.addEventListener('resize', function () {
      if (window.innerWidth > 1024) {
         //  element.classList.remove(className); 
         document.body.classList.remove('_lock');
         if (videoModal.style.display != "block") {
            headerZero.classList.remove('_active');

         } topHeader.classList.remove('_active');
         middleHeader.classList.remove('_active');
         lowerHeader.classList.remove('_active');
         iconMenu.classList.remove('_active');
      }
   });
   window.addEventListener('resize', function () {
      if (window.innerWidth < 1024) {
         changeLowerHeaderTop();
      }
   });
}