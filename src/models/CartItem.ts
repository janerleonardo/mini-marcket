import { Product } from "./Product";

export class CartItem{
  constructor(
    public product: Product,
    public quantity: number
  ){}

  getTotal(): number{
    return this.product.getFinalPrice()*this.quantity;
  }

}
