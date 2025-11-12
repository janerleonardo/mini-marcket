export class Product {
  constructor(
    public readonly id: number,
    public name: string,
    public price: number,
    public discount: number = 0
  ) {}

    getFinalPrice(): number {
    return this.price - (this.price * this.discount) / 100;
  }

}
