const input = document.getElementById('photo');

if (input !== null) {
   const labelElement = document.querySelector('label[for="photo"]');
   const imgElement = labelElement.querySelector('img');
   const labelContainer = labelElement.querySelector('div');
   const labelText = labelContainer.querySelector('div');
   input.addEventListener('change', updatePhoto)
   function updatePhoto() {
      if (input.files.length > 0) {
         imgElement.src = URL.createObjectURL(input.files[0]);
         labelContainer.style.background = 'rgba(0, 0, 0, 0.30)';
         labelText.textContent = 'Изменить фото'
      } else {
         imgElement.src = 'img/account/empty-photo.svg';
         labelContainer.style.background = '#337D5A';
         labelText.textContent = 'Загрузить фото'
      }
   }
}
