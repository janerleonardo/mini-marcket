import { IPaymentMethod } from "./IPaymentMethod.js";

export class CardPayment implements IPaymentMethod {
  name = 'Debit Card';
  calculateTotal(amount: number): string {
    const fee = amount *0;
    const total = amount + fee;
    return `Pago con ${this.name}: $${total.toFixed(2)} (incluye comisión de $${fee})`;
  }

}
