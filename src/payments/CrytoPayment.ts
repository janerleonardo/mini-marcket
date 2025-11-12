import { IPaymentMethod } from './IPaymentMethod.js';

export class CrytoPayments implements IPaymentMethod {
  name = 'Cryto';
  calculateTotal(amount: number): string {
    const fee = amount *0.05;
    const total = amount + fee;
    return `Pago con ${this.name}: $${total.toFixed(2)} (incluye comisión de $${fee})`;
  }
}
