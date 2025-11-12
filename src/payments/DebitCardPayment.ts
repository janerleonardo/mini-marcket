import { IPaymentMethod } from "./IPaymentMethod.js";

export class CardPayment implements IPaymentMethod {
  name = 'Debit Card';
  calculateTotal(amount: number): number {
    return amount;
  }

}
