const form = document.querySelector('.account__table');
if (form) {
   form.addEventListener('submit', function (event) {
      event.preventDefault();
      window.location.href = '/order-completed.html';
   })
}