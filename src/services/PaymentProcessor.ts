import { IPaymentMethod } from "../payments/IPaymentMethod.js";

export class PaymentProcessor{
  constructor(private paymentMethod: IPaymentMethod){}

  process(amount: number): number {
    console.log(`Procesando  pago con ${this.paymentMethod.name}`);
    return this.paymentMethod.calculateTotal(amount);
  }

}
