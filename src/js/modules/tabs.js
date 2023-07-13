const tabs = document.getElementsByClassName('tabs__tab');
const cards = document.getElementsByClassName('tabs-section__content-container');
const tabsList = document.querySelector('.tabs__list');
const openingBox = document.querySelector('.tabs__opening-box');
const selectTab = document.querySelector('.tabs__select-tab');

if (tabs.length > 0) {
   for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];
      tab.addEventListener("click", showCard);
   }
   openingBox.addEventListener("click", showTabs);
}

function showCard(e) {
   let valueDisplay = window.getComputedStyle(openingBox).getPropertyValue('display');
   if (valueDisplay != "none") {
      tabsList.style.display = "none";
      openingBox.classList.remove('on');
   }
   let target = e.target;
   for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active-tab');
   }
   target.classList.add('active-tab');
   let innerTarget = target.innerHTML;
   selectTab.innerHTML = innerTarget;
   const whichCard = target.getAttribute('id');
   for (let i = 0; i < cards.length; i++) {
      const howContent = cards[i].dataset.howContent
      if (howContent == whichCard) {
         cards[i].style.display = "grid";
      } else {
         cards[i].style.display = "none";
      }
   }
}

let clickOutsideNewSelect = function (event) {
   // Перевірити, чи елемент, на якому відбувся клік, не є частиною контейнера
   if (!tabsList.contains(event.target) && !openingBox.contains(event.target)) {
      console.log('click');
      // Клік відбувся за межами контейнера
      tabsList.style.display = "none";
      openingBox.classList.remove('on');
      document.removeEventListener("click", clickOutsideNewSelect);
   }
}

function showTabs() {
   console.log('showTabs');
   let valueDisplay = window.getComputedStyle(tabsList).getPropertyValue('display');
   if (valueDisplay == "none") {
      tabsList.style.display = "flex";
      openingBox.classList.add('on');
      document.addEventListener("click", clickOutsideNewSelect);
   } else {
      tabsList.style.display = "none";
      openingBox.classList.remove('on');
      document.removeEventListener("click", clickOutsideNewSelect);
   }
}

//Після взаємодії з випадаючим списком tabs та поверненні до ширини вікна де пропадає випадаючий список, tabs не відображаються. Для цього використовую спостерігач подій на відповідність медіазапиту
const mql = window.matchMedia('(min-width: 768px)');
function screenTest(e) {
   if (e.matches) {
      tabsList.style.display = "flex";
   }
   else {
      tabsList.style.display = "none";
      openingBox.classList.remove('on');
      document.removeEventListener("click", clickOutsideNewSelect);
   }
}

mql.addEventListener('change', screenTest);