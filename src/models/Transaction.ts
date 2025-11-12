import { IPaymentMethod } from "../payments/IPaymentMethod";

export class Transaction {
  constructor(
    public total: number,
    public date: Date,
    public paymentMethod: IPaymentMethod
  ){}
}
