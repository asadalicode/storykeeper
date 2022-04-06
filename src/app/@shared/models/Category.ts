export class Category {
  constructor(public id: number, public caregoryName: string) {}

  public static adapt(item: any): Category {
    return new Category(item.id, item.caregoryName);
  }
}
