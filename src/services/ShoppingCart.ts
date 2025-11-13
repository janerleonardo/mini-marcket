import { CartItem } from "../models/CartItem.js";
import { Product } from "../models/Product.js";

export class ShoppingCart {
  private items: CartItem[] = [];

  addProduct(product: Product, quantity: number ): void{
    this.items.push(new CartItem(product,quantity));
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.getTotal(), 0 );
  }

  clear(): void {
    this.items = [];
  }

  getItems(): CartItem[] {
    return this.items;
  }

}
