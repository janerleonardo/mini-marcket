import { Product } from './models/Product.js';
import { CardPayment } from './payments/CreditCardPayment.js';
import { PaymentProcessor } from './services/PaymentProcessor.js';
import { ShoppingCart } from './services/ShoppingCart.js';

document.addEventListener('DOMContentLoaded', () => {
  const btnAddItem = document.getElementById(
    'btnAddItems'
  ) as HTMLButtonElement;
  const btnPay = document.getElementById('btnPay') as HTMLButtonElement;
  const totalCart = document.getElementById('carricTotal') as HTMLElement;
  const pay = document.getElementById('pay') as HTMLElement;
  const table = document.getElementById('itemsContainer') as HTMLElement;
  const inputs = document.getElementById('inputItem') as HTMLElement;
  const btnAdd = document.getElementById('Add') as HTMLButtonElement;

  // Productos base
  const p1 = new Product(1, 'Camisa', 50, 10);
  const p2 = new Product(2, 'Pantalón', 80, 10);
  let flag: boolean = false;

  // Carrito
  const cart = new ShoppingCart();
  cart.addProduct(p1, 2);
  cart.addProduct(p2, 1);
  // totalCart.textContent =`  ${cart.getItems()}`

  let tableHTML = `<table border= "1">
                  <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                  </tr>`;
  cart.getItems().forEach((element) => {
    tableHTML =
      tableHTML +
      ` <tr>
                              <td>${element.product.id}</td>
                              <td>${element.product.name}</td>
                              <td>${element.product.getFinalPrice()}</td>
                              <td>${element.product.discount}</td>
                            </tr> `;
  });

  tableHTML = tableHTML + `</table>`;
  table.innerHTML = tableHTML;
  btnAddItem.addEventListener("click", ()=>{
   flag = (flag === true) ? false : true ;
   inputs.innerHTML ="";
   btnAddItem.textContent = 'Add Items';
   if (flag){
     btnAddItem.textContent = 'Cerrar';
        inputs.innerHTML = `
          <h2>Nuevo Item</h2>
          <label>Item:</label>
          <input type="string" id="itemId" step="0.1" />
          <label>Nombre:</label>
          <input type="string" id="itemName" step="0.1" />
          <button id="btnAdd">Add</button>
        `;

   }



  });


  totalCart.textContent = `Total carrito: ${cart.getTotal()}`;

  console.log(cart.getItems());

  console.log('Total carrito:', cart.getTotal());

  // Pago
  const payment = new CardPayment(); // Puedes cambiar por PaypalPayment o CryptoPayment
  const processor = new PaymentProcessor(payment);
  pay.textContent = `  ${processor.process(cart.getTotal())}`;
  console.log(processor.process(cart.getTotal()));
});
