export interface IPaymentMethod {
  name: string
  calculateTotal(amount: number): number;


}
