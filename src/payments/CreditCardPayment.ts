import { IPaymentMethod } from "./IPaymentMethod.js";

export class CardPayment implements IPaymentMethod {
  name = 'Credit Card';
  calculateTotal(amount: number): string {
  const fee = amount *0.1;
    const total = amount + fee;
    return `Pago con ${this.name}: $${total.toFixed(2)} (incluye comisión de $${fee})`;
  }

}
