export class Product {
  constructor(
    public id: number,
    public name: string,
    public priceInCents: number,
    public numberOfTotalStories: number,
    public priceInDollars: number
  ) {}

  public static adapt(item: any): Product {
    return new Product(item.id, item.name, item.priceInCents, item.numberOfTotalStories, item.priceInCents / 100);
  }
}
