import { IPaymentMethod } from "./IPaymentMethod.js";

export class  PayPalPayment implements IPaymentMethod {
  name = 'PayPal';
  calculateTotal(amount: number): number {
    const fee = amount + 0.03;
    return amount + fee;
  }

}
