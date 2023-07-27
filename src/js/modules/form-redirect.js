const loginForm = document.getElementById('form-redirect');
if (loginForm) {
   loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (loginForm) {

         const redirectUrl = loginForm.getAttribute('data-redirect');
         window.location.href = redirectUrl;
      }
   })
}