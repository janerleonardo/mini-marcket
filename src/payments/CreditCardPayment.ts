import { IPaymentMethod } from "./IPaymentMethod.js";

export class CardPayment implements IPaymentMethod {
  name = 'Credit Card';
  calculateTotal(amount: number): number {
    const fee = amount *0.05;
    return amount + fee;
  }

}
