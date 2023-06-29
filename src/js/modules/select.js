const selectElements = document.querySelectorAll('.select');
selectElements.forEach(function (selectElement) {
   const _this = selectElement,
      selectOption = _this.querySelectorAll('option'),
      selectOptionLength = selectOption.length,
      duration = 450;

   _this.style.display = 'none';
   const selectWrapper = document.createElement('div');
   selectWrapper.classList.add('select');
   _this.parentNode.insertBefore(selectWrapper, _this);
   selectWrapper.appendChild(_this);

   const newSelect = document.createElement('div');
   newSelect.classList.add('new-select');
   _this.insertAdjacentElement('afterend', newSelect);

   //const selectHead = _this.nextElementSibling;
   const selectHead = document.createElement('div');
   selectHead.classList.add('select-header');
   selectHead.textContent = _this.querySelector('option:disabled').textContent;
   newSelect.appendChild(selectHead);
   console.log(newSelect);
   console.log(selectHead);
   const selectList = document.createElement('div');
   selectList.classList.add('new-select__list');
   selectHead.insertAdjacentElement('afterend', selectList);
   selectHead.innerHTML = `
       <span class="arrow"></span>
       ${selectHead.innerHTML}
   `;
   //selectHead.addEventListener('click', function () {
   //   selectHead.classList.toggle('on');
   //});

   for (let i = 1; i < selectOptionLength; i++) {
      const newSelectItem = document.createElement('div');
      newSelectItem.classList.add('new-select__item');
      const newSelectSpan = document.createElement('span');
      newSelectSpan.textContent = selectOption[i].textContent;
      newSelectItem.appendChild(newSelectSpan);
      newSelectItem.setAttribute('data-value', selectOption[i].value);
      selectList.appendChild(newSelectItem);
   }

   const selectItem = selectList.querySelectorAll('.new-select__item');
   selectList.style.display = 'none';
   selectHead.addEventListener('click', function () {
      if (!selectHead.classList.contains('on')) {
         selectHead.classList.add('on');
         selectList.style.display = 'block';

         selectItem.forEach(function (item) {
            item.addEventListener('click', function () {
               let chooseItem = item.getAttribute('data-value');

               _this.value = chooseItem; // Встановлюємо вибраний елемент в селекті
               selectHead.textContent = item.querySelector('span').textContent;

               selectList.style.display = 'none';
               selectHead.classList.remove('on');
            });
         });

      } else {
         selectHead.classList.remove('on');
         selectList.style.display = 'none';
      }
   });
});
