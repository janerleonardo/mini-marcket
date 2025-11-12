import { IPaymentMethod } from './IPaymentMethod.js';

export class CrytoPayments implements IPaymentMethod {
  name = 'Cryto';
  calculateTotal(amount: number): number {
    const fee = amount + 0.01;
    return amount + fee;
  }
}
