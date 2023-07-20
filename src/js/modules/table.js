// Отримуємо таблицю та рядки з товарами
const table = document.querySelector('.basket-table');

if (table) {
   //calculateAmount()
   const rows = table.getElementsByTagName('tr');

   function calculateTotalAmount() {
      // Підраховуємо загальну суму для всіх товарів
      let totalAmount = 0;
      for (let i = 1; i < rows.length; i++) {
         totalAmount += parseInt(rows[i].cells[3].innerText);
      }

      // Відображаємо загальну суму в підсумковому рядку
      document.querySelector('.total-block__total').innerText = totalAmount;
   }

   function calculateAmount(i) {
      console.log(i);
      const row = rows[i];
      const input = row.querySelector('.basket-table__number');
      const quantity = input.value; // Отримуємо кількість з другої комірки
      const price = parseInt(row.cells[2].innerText); // Отримуємо ціну за одиницю з третьої комірки
      const total = quantity * price; // Підраховуємо загальну суму для даного товару
      row.cells[3].innerText = total + ' грн'; // Записуємо загальну суму в четверту комірку
   }

   // Проходимося по рядках (починаючи з індексу 1, оскільки індекс 0 - заголовок)
   for (let i = 1; i < rows.length; i++) {
      const input = rows[i].querySelector('.basket-table__number');
      const decrease = rows[i].querySelector('.basket-table__decrease-icon');
      const increase = rows[i].querySelector('.basket-table__increase-icon');

      calculateAmount(i);
      input.addEventListener("input", function () {
         calculateAmount(i);
         calculateTotalAmount();
      })
      decrease.addEventListener("click", () => {
         const currentValue = parseFloat(input.value);
         input.value = currentValue - 1;
         calculateAmount(i);
         calculateTotalAmount();
      });
      increase.addEventListener("click", () => {
         const currentValue = parseFloat(input.value);
         input.value = currentValue + 1;
         calculateAmount(i);
         calculateTotalAmount();
      });
   }
   calculateTotalAmount();
}
