import { IPaymentMethod } from "./IPaymentMethod.js";

export class  PayPalPayment implements IPaymentMethod {
  name = 'PayPal';
  calculateTotal(amount: number): string {
  const fee = amount *0.07;
    const total = amount + fee;
    return `Pago con ${this.name}: $${total.toFixed(2)} (incluye comisión de $${fee})`;
  }

}
