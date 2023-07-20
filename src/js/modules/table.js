// Отримуємо таблицю та рядки з товарами
const table = document.getElementById('basket-table');
const rows = productTable.getElementsByTagName('tr');

// Проходимося по рядках (починаючи з індексу 1, оскільки індекс 0 - заголовок)
for (let i = 1; i < rows.length; i++) {
   const row = rows[i];
   const quantity = parseInt(row.cells[1].innerText); // Отримуємо кількість з другої комірки
   const price = parseInt(row.cells[2].innerText); // Отримуємо ціну за одиницю з третьої комірки
   const total = quantity * price; // Підраховуємо загальну суму для даного товару
   row.cells[3].innerText = total; // Записуємо загальну суму в четверту комірку
}

// Підраховуємо загальну суму для всіх товарів
let totalAmount = 0;
for (let i = 1; i < rows.length; i++) {
   totalAmount += parseInt(rows[i].cells[3].innerText);
}

// Відображаємо загальну суму в підсумковому рядку
document.getElementById('total-amount').innerText = totalAmount;
